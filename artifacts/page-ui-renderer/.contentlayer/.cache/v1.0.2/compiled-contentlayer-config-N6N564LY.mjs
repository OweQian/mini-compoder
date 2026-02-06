var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// data/config/metadata.js
var require_metadata = __commonJS({
  "data/config/metadata.js"(exports, module) {
    var domain = "pageui.shipixen.com";
    var metadata = {
      title: "Landing page components & templates that you can copy & paste",
      description: "Page UI is a set of landing page components & templates that you can copy & paste into you React/Next.js codebase. Built on top of Shadcn UI and TailwindCSS.",
      domain: "pageui.shipixen.com",
      logoTitle: "Page UI",
      businessName: "Page UI",
      siteUrl: "https://pageui.shipixen.com",
      siteRepo: "",
      socialBanner: "/static/images/ogImg.jpg",
      supportEmail: "support@shipixen.com",
      email: "",
      twitter: "https://twitter.com/shipixen",
      instagram: "",
      tiktok: "",
      github: "https://github.com/danmindru/page-ui",
      linkedin: "",
      youtube: "",
      facebook: "",
      threads: "",
      mastodon: "",
      author: "Page UI",
      language: "en-us",
      theme: "dark",
      locale: "en-US"
    };
    module.exports = { metadata, domain };
  }
});

// data/config/site.settings.js
var require_site_settings = __commonJS({
  "data/config/site.settings.js"(exports, module) {
    var { metadata } = require_metadata();
    var siteConfig2 = {
      ...metadata,
      blogPath: "",
      // The location of all blog pages under 'data'. Empty string means 'data' (default). Best for SEO is to have articles under the root path.
      allArticlesPath: "/docs",
      // The name of the page where you can see a list of all articles (needs to match app/all-articles/page.tsx)
      // Configure analytics
      disableAnalytics: false,
      // Disable all analytics on the site
      analytics: {
        // By default Vercel analytics is enabled.
        //
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
        // umamiAnalytics: {
        //   // We use an env variable for this site to avoid other users cloning our analytics ID
        //   umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
        // },
        // plausibleAnalytics: {
        //   plausibleDataDomain: '', // e.g. insert-business-name.vercel.app
        // },
        // simpleAnalytics: {},
        // posthogAnalytics: {
        //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
        // },
        // googleAnalytics: {
        //   googleAnalyticsId: '', // e.g. G-XXXXXXX
        // },
      },
      newsletter: {
        // Optional: enable newsletter
        // provider: 'emailoctopus',
      },
      search: true
      // Enable or disable search
    };
    module.exports = { siteConfig: siteConfig2 };
  }
});

// contentlayer.config.ts
var import_site = __toESM(require_site_settings());
import {
  defineDocumentType,
  makeSource
} from "shipixen-contentlayer/source-files";
import { writeFileSync } from "fs";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import path from "path";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings
} from "@shipixen/pliny/mdx-plugins/index.js";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";
import rehypePrismPlus from "rehype-prism-plus";
import rehypePresetMinify from "rehype-preset-minify";
import {
  allCoreContent,
  sortPosts
} from "@shipixen/pliny/utils/contentlayer.js";
var root = process.cwd();
var isProduction = process.env.NODE_ENV === "production";
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath
  },
  toc: { type: "json", resolve: (doc) => extractTocHeadings(doc.body.raw) }
};
function createTagCount(allBlogs) {
  const tagCount = {};
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  writeFileSync("./app/tag-data.json", JSON.stringify(tagCount));
}
function createSearchIndex(allBlogs) {
  if (import_site.siteConfig?.search === true) {
    writeFileSync(
      `public/search.json`,
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    );
    console.log("Local search index generated...");
  }
}
var BLOG_URL = import_site.siteConfig.blogPath ? `${import_site.siteConfig.blogPath}/` : "";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `${BLOG_URL}**/*.mdx`,
  contentType: "mdx",
  fields: {
    showThemeSelector: { type: "boolean" },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    summary: { type: "string" },
    images: { type: "json" },
    authors: { type: "list", of: { type: "string" } },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" },
    showInstallNotice: { type: "boolean" }
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: "json",
      resolve: (doc) => ({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images ? doc.images[0] : import_site.siteConfig.socialBanner,
        url: `${import_site.siteConfig.siteUrl}/${doc._raw.flattenedPath}`,
        author: doc.authors
      })
    }
  }
}));
var Authors = defineDocumentType(() => ({
  name: "Authors",
  filePathPattern: "authors/**/*.md",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string" },
    occupation: { type: "string" },
    company: { type: "string" },
    email: { type: "string" },
    twitter: { type: "string" },
    linkedin: { type: "string" },
    github: { type: "string" },
    layout: { type: "string" }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Authors],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, "data") }],
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
      rehypePresetMinify
    ]
  },
  onMissingOrIncompatibleData: "skip-warn",
  onSuccess: async (importData) => {
    const { allBlogs } = await importData();
    createTagCount(allBlogs);
    createSearchIndex(allBlogs);
  }
});
export {
  Authors,
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-N6N564LY.mjs.map
