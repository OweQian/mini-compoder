# ============================================================
# 阶段一：依赖安装 (deps)
# 使用 Node 18.17 Alpine 镜像，仅负责安装项目依赖
# ============================================================
FROM node:18.17-alpine AS deps
WORKDIR /app

# 构建参数：是否使用国内镜像代理（传非空值则启用 npmmirror）
ARG proxy

# 安装 libc6-compat 以兼容部分原生模块，并全局安装 pnpm 9.8.0
RUN apk add --no-cache libc6-compat && npm install -g pnpm@9.8.0

# 若指定了 proxy，则配置 pnpm 使用 npmmirror 国内镜像源
RUN [ -z "$proxy" ] || pnpm config set registry https://registry.npmmirror.com/

# 复制依赖声明文件，支持无 lock 文件时的占位
COPY package.json pnpm-lock.yaml* ./

# 必须存在 lock 文件，否则构建失败（保证依赖可复现）
RUN [ -f pnpm-lock.yaml ] || (echo "Lockfile not found." && exit 1)

# 严格按 lock 文件安装依赖，不更新版本
RUN pnpm install --frozen-lockfile

# ============================================================
# 阶段二：构建 (builder)
# 基于已安装的依赖，复制源码并执行 Next.js 构建
# ============================================================
FROM node:18.17-alpine AS builder
WORKDIR /app

ARG proxy

RUN apk add --no-cache libc6-compat && npm install -g pnpm@9.8.0

# 从 deps 阶段复制已安装的 node_modules，避免重复安装
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 执行 Next.js 生产构建（输出到 .next）
RUN pnpm build

# ============================================================
# 阶段三：运行 (runner)
# 最小化运行镜像，仅包含运行时所需文件
# ============================================================
FROM node:18.17-alpine AS runner
WORKDIR /app

ARG proxy

# 创建 nodejs 组和 nextjs 用户，用于非 root 运行（安全最佳实践）
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 安装 curl（健康检查用）和 CA 证书（HTTPS 请求用）
RUN apk add --no-cache curl ca-certificates \
  && update-ca-certificates

# 从 builder 阶段复制构建产物：静态资源、配置、standalone 输出、静态文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder /app/package.json ./package.json

# 复制数据目录（如配置、模板等）
COPY --from=builder /app/data ./data

# 生产环境变量
ENV NODE_ENV production
# 关闭 Next.js 遥测
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

EXPOSE 3000

# 切换到非 root 用户运行
USER nextjs

# 健康检查：每 30 秒检查一次，启动后 30 秒内不判失败，超时 10 秒，重试 3 次
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Next.js standalone 模式入口
CMD ["node", "server.js"]