import { Button } from '@/components/shared/ui/button';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingLeadingPill } from '@/components/landing/leading/LandingLeadingPill';
import { LandingStatsSection } from '@/components/landing/stats/LandingStatsSection';
import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingShowcase } from '@/components/landing/showcase/LandingShowcase';
import { LandingShowcaseItem } from '@/components/landing/showcase/LandingShowcaseItem';
import { LandingBentoGridSection } from '@/components/landing/bento-grid/LandingBentoGridSection';
import { LandingBentoGridIconItem } from '@/components/landing/bento-grid/LandingBentoGridIconItem';
import { LandingBentoGridNumberItem } from '@/components/landing/bento-grid/LandingBentoGridNumberItem';
import { LandingBentoGridImageItem } from '@/components/landing/bento-grid/LandingBentoGridImageItem';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingFooter } from '@/components/landing/footer/LandingFooter';
import { LandingFooterColumn } from '@/components/landing/footer/LandingFooterColumn';
import { LandingFooterLink } from '@/components/landing/footer/LandingFooterLink';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import {
  ServerIcon,
  DatabaseIcon,
  ActivityIcon,
  LineChartIcon,
  ShieldCheckIcon,
  ZapIcon,
  NetworkIcon,
  LayersIcon,
  GithubIcon,
  BookOpenIcon,
  PlayCircleIcon,
} from 'lucide-react';

export default function IoTSharpLandingPage() {
  // Logo Component
  const LogoComponent = () => (
    <div className="flex items-center gap-2">
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-bold text-xl">IoTSharp</span>
    </div>
  );

  // FAQ Data
  const faqItems = [
    {
      question: 'IoTSharp 支持哪些物联网协议？',
      answer:
        'IoTSharp 支持多种主流物联网协议，包括 MQTT、CoAP、HTTP、LwM2M、Modbus 等。我们持续添加对新协议的支持以满足不同设备的需求。',
    },
    {
      question: '如何快速开始使用 IoTSharp？',
      answer:
        '您可以通过 Docker 快速部署 IoTSharp，只需几分钟即可启动并运行。我们提供了详细的文档和示例来帮助您快速上手。访问 GitHub 仓库获取完整的安装指南。',
    },
    {
      question: 'IoTSharp 适合什么规模的项目？',
      answer:
        'IoTSharp 具有高度可扩展性，适用于从小型原型到企业级部署的各种规模项目。无论您是个人开发者还是大型企业，IoTSharp 都能满足您的需求。',
    },
    {
      question: '数据存储和安全性如何保障？',
      answer:
        'IoTSharp 支持多种数据库（PostgreSQL、MySQL、SQLite 等），提供数据加密、访问控制、SSL/TLS 通信等企业级安全特性，确保您的数据安全。',
    },
    {
      question: 'IoTSharp 是否提供技术支持？',
      answer:
        '作为开源项目，您可以通过 GitHub Issues、Discussions 获取社区支持。我们还提供商业支持和定制开发服务，满足企业级需求。',
    },
  ];

  // Testimonials Data
  const testimonialItems = [
    {
      name: '张伟',
      text: 'IoTSharp 让我们的智能工厂项目提前 3 个月完成部署。它的可扩展性和稳定性超出预期。',
      handle: '@zhangwei',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      featured: true,
    },
    {
      name: 'David Chen',
      text: '开源社区支持很活跃，文档详细，上手非常快。强烈推荐给需要 IoT 平台的团队。',
      handle: '@davidchen',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    },
    {
      name: '李娜',
      text: '我们使用 IoTSharp 管理超过 5000 台设备，性能表现出色，运维成本大幅降低。',
      handle: '@lina',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    },
    {
      name: 'John Smith',
      text: '完美的 IoT 解决方案！支持多种协议，易于集成到现有系统。',
      handle: '@johnsmith',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
      featured: true,
    },
    {
      name: '王强',
      text: '开源免费，功能强大，节省了大量的开发成本。感谢 IoTSharp 团队！',
      handle: '@wangqiang',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    },
    {
      name: 'Sarah Johnson',
      text: 'IoTSharp 的可视化功能让数据分析变得简单直观，团队协作效率显著提升。',
      handle: '@sarahj',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
    },
  ];

  return (
    <div className="w-full">
      {/* Social Proof Band - GitHub Stats */}
      <LandingSocialProofBand>
        <LandingSocialProofBandItem graphic="rating">
          1.2k+ GitHub Stars
        </LandingSocialProofBandItem>
        <LandingSocialProofBandItem graphic="trophy">
          开源物联网平台
        </LandingSocialProofBandItem>
        <LandingSocialProofBandItem>
          企业级可靠性
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      {/* Navigation Header */}
      <LandingHeader logoComponent={<LogoComponent />}>
        <LandingHeaderMenuItem href="#features" label="功能特性" />
        <LandingHeaderMenuItem href="#architecture" label="技术架构" />
        <LandingHeaderMenuItem href="#testimonials" label="用户评价" />
        <LandingHeaderMenuItem href="#faq" label="常见问题" />
        <LandingHeaderMenuItem
          href="https://github.com/IoTSharp/IoTSharp"
          label={<GithubIcon className="w-5 h-5" />}
          type="icon-button"
          variant="ghost"
        />
        <LandingHeaderMenuItem
          href="https://github.com/IoTSharp/IoTSharp"
          label="查看源码"
          type="button"
        />
        <ThemeSwitch />
      </LandingHeader>

      {/* Primary CTA Section */}
      <LandingPrimaryImageCtaSection
        title="IoTSharp - 企业级开源物联网平台"
        description="功能强大的开源 IoT 平台，用于数据采集、处理、可视化和设备管理。支持多种物联网协议，具备企业级可扩展性和可靠性。"
        imageSrc="https://picsum.photos/1200/800.webp?random=iot"
        imageAlt="IoTSharp 物联网平台架构图"
        imagePosition="center"
        textPosition="center"
        leadingComponent={
          <LandingLeadingPill
            text="⭐ 开源免费"
            borderVariant="primary"
            withBackground
            backgroundVariant="primaryGlass"
          />
        }
      >
        <Button size="xl" asChild>
          <a href="https://github.com/IoTSharp/IoTSharp">
            <GithubIcon className="w-5 h-5 mr-2" />
            查看 GitHub
          </a>
        </Button>

        <Button size="xl" variant="outlinePrimary" asChild>
          <a href="https://github.com/IoTSharp/IoTSharp#readme">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            阅读文档
          </a>
        </Button>
      </LandingPrimaryImageCtaSection>

      {/* Stats Section */}
      <LandingStatsSection
        title="社区驱动的开源力量"
        description="IoTSharp 已经成为全球物联网开发者的首选平台"
        columnsDesktop={4}
        columnsMobile={2}
        stats={[
          {
            value: '1.2k+',
            label: 'Stars',
            description: 'GitHub 上获得超过 1200 颗星标',
          },
          {
            value: '290',
            label: 'Forks',
            description: '活跃的开发者社区贡献',
          },
          {
            value: '2,901',
            label: 'Commits',
            description: '持续迭代和功能改进',
          },
          {
            value: '100+',
            label: '企业用户',
            description: '为全球企业提供物联网解决方案',
          },
        ]}
      />

      {/* Product Features Grid */}
      <LandingProductFeaturesGrid
        title="核心功能特性"
        description="IoTSharp 提供完整的物联网解决方案，从设备连接到数据可视化，一站式满足您的需求"
        numberOfColumns={2}
      >
        <LandingProductFeature
          title="数据采集"
          description="支持 MQTT、CoAP、HTTP、LwM2M、Modbus 等多种物联网协议，轻松连接各类设备和传感器，实现实时数据采集。"
          imageSrc="https://picsum.photos/800/600.webp?random=datacollection"
          imageAlt="数据采集功能"
          imagePerspective="paper"
        />

        <LandingProductFeature
          title="数据处理"
          description="强大的实时数据处理引擎，支持数据清洗、转换、聚合和计算，为业务决策提供准确的数据支持。"
          imageSrc="https://picsum.photos/800/600.webp?random=dataprocessing"
          imageAlt="数据处理功能"
          imagePerspective="paper"
        />

        <LandingProductFeature
          title="可视化仪表板"
          description="直观的数据可视化界面，支持自定义图表和仪表板，实时监控设备状态和数据指标，让数据分析更加简单。"
          imageSrc="https://picsum.photos/800/600.webp?random=visualization"
          imageAlt="可视化仪表板"
          imagePerspective="paper"
        />

        <LandingProductFeature
          title="设备管理"
          description="集中式设备管理平台，支持设备注册、配置、监控、远程控制和固件升级，轻松管理数千台物联网设备。"
          imageSrc="https://picsum.photos/800/600.webp?random=devicemanagement"
          imageAlt="设备管理功能"
          imagePerspective="paper"
        />
      </LandingProductFeaturesGrid>

      {/* Technology Showcase */}
      <LandingShowcase
        title="支持的物联网协议和技术"
        description="IoTSharp 支持业界主流的物联网协议，无缝集成您的设备生态系统"
        textPosition="center"
      >
        <LandingShowcaseItem>
          <div className="flex flex-col items-center gap-2">
            <NetworkIcon className="w-12 h-12" />
            <span className="text-sm font-medium">MQTT</span>
          </div>
        </LandingShowcaseItem>

        <LandingShowcaseItem>
          <div className="flex flex-col items-center gap-2">
            <ServerIcon className="w-12 h-12" />
            <span className="text-sm font-medium">CoAP</span>
          </div>
        </LandingShowcaseItem>

        <LandingShowcaseItem>
          <div className="flex flex-col items-center gap-2">
            <LayersIcon className="w-12 h-12" />
            <span className="text-sm font-medium">HTTP/HTTPS</span>
          </div>
        </LandingShowcaseItem>

        <LandingShowcaseItem>
          <div className="flex flex-col items-center gap-2">
            <DatabaseIcon className="w-12 h-12" />
            <span className="text-sm font-medium">LwM2M</span>
          </div>
        </LandingShowcaseItem>

        <LandingShowcaseItem>
          <div className="flex flex-col items-center gap-2">
            <ActivityIcon className="w-12 h-12" />
            <span className="text-sm font-medium">Modbus</span>
          </div>
        </LandingShowcaseItem>

        <LandingShowcaseItem>
          <div className="flex flex-col items-center gap-2">
            <ZapIcon className="w-12 h-12" />
            <span className="text-sm font-medium">OPC UA</span>
          </div>
        </LandingShowcaseItem>
      </LandingShowcase>

      {/* Bento Grid - Architecture Highlights */}
      <LandingBentoGridSection
        title="企业级技术架构"
        description="高性能、高可用、高扩展性的技术架构，满足企业级应用需求"
      >
        <LandingBentoGridIconItem
          icon={<ShieldCheckIcon className="w-12 h-12" />}
          bottomText="企业级安全"
          topText="SSL/TLS 加密"
        />

        <LandingBentoGridNumberItem
          topText="支持"
          number="10K+"
          bottomText="并发设备连接"
        />

        <LandingBentoGridImageItem
          topText="高可用架构"
          imageSrc="https://picsum.photos/600/400.webp?random=architecture"
          imageAlt="高可用架构"
          bottomText="分布式部署支持"
          colSpan={2}
          rowSpan={2}
        />

        <LandingBentoGridIconItem
          topText="实时处理"
          icon={<LineChartIcon className="w-12 h-12" />}
          bottomText="毫秒级响应"
        />

        <LandingBentoGridNumberItem
          topText="数据吞吐量"
          number="1M+"
          bottomText="消息/秒"
        />

        <LandingBentoGridIconItem
          icon={<DatabaseIcon className="w-12 h-12" />}
          bottomText="多数据库支持"
          topText="PostgreSQL/MySQL"
        />

        <LandingBentoGridIconItem
          topText="Docker 部署"
          icon={<ServerIcon className="w-12 h-12" />}
          bottomText="快速启动"
        />
      </LandingBentoGridSection>

      {/* Testimonials */}
      <LandingTestimonialGrid
        title="用户评价"
        description="看看其他开发者和企业如何使用 IoTSharp"
        testimonialItems={testimonialItems}
      />

      {/* FAQ Section */}
      <LandingFaqCollapsibleSection
        title="常见问题"
        description="关于 IoTSharp 的一些常见问题解答"
        faqItems={faqItems}
      />

      {/* Secondary CTA */}
      <LandingSaleCtaSection
        title="准备开始您的物联网项目？"
        description="立即在 GitHub 上 Star IoTSharp，加入我们的开源社区，与全球开发者一起构建更好的物联网应用。"
        ctaHref="https://github.com/IoTSharp/IoTSharp"
        ctaLabel="Star on GitHub"
        secondaryCtaHref="https://github.com/IoTSharp/IoTSharp#readme"
        secondaryCtaLabel="查看文档"
        withBackgroundGlow
        backgroundGlowVariant="primary"
      />

      {/* Footer */}
      <LandingFooter
        title="IoTSharp"
        description="开源物联网平台 - 为数据采集、处理、可视化和设备管理提供完整解决方案"
        footnote="© 2025 IoTSharp. All rights reserved. | Apache 2.0 License"
        logoComponent={<LogoComponent />}
      >
        <LandingFooterColumn title="产品">
          <LandingFooterLink href="#features">功能特性</LandingFooterLink>
          <LandingFooterLink href="#architecture">技术架构</LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp#readme">
            文档
          </LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp/releases">
            版本发布
          </LandingFooterLink>
        </LandingFooterColumn>

        <LandingFooterColumn title="资源">
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp">
            GitHub
          </LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp/discussions">
            社区讨论
          </LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp/issues">
            问题反馈
          </LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp/wiki">
            Wiki
          </LandingFooterLink>
        </LandingFooterColumn>

        <LandingFooterColumn title="支持">
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp#installation">
            快速开始
          </LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp/discussions">
            获取帮助
          </LandingFooterLink>
          <LandingFooterLink href="https://github.com/IoTSharp/IoTSharp/blob/master/CONTRIBUTING.md">
            贡献指南
          </LandingFooterLink>
          <LandingFooterLink href="#faq">常见问题</LandingFooterLink>
        </LandingFooterColumn>
      </LandingFooter>
    </div>
  );
}
