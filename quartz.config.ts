import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wolf Hall 数字人文研究库",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "wallfacer-web.github.io/wolf_hall",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f3ec",
          lightgray: "#e2dacd",
          gray: "#b6ac9c",
          darkgray: "#5a5248",
          dark: "#2a2622",
          secondary: "#8a3b12",
          tertiary: "#516b5c",
          highlight: "rgba(138, 59, 18, 0.08)",
          textHighlight: "#f7df7a88",
        },
        darkMode: {
          light: "#181513",
          lightgray: "#3f3832",
          gray: "#7e7367",
          darkgray: "#ddd3c6",
          dark: "#f3ece2",
          secondary: "#d48a5a",
          tertiary: "#8fb39d",
          highlight: "rgba(212, 138, 90, 0.12)",
          textHighlight: "#b79d2488",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disabled for faster GitHub Pages builds on a note-heavy vault.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
