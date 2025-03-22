import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "BeyondTesting.dev",
  tagline:
    "Correctness by Design",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://beyondtesting.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "beyondtesting-dev", // Usually your GitHub org/user name.
  projectName: "beyondtesting.dev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: 'kb',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.png",
    navbar: {
      title: "BeyondTesting.dev",
      logo: {
        alt: "BeyondTesting.dev Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Knowledge Base",
        },
        // { to: "/faq", label: "FAQ", position: "left" },
        // { to: "/technologies-used", label: "Technologies", position: "left" },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/xframes-project/xframes",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Knowledge Base",
              to: "/kb",
            },
{
label: "More Ada Resources",
href: "https://beyond-tabs.com/language/ada"
},
{
label: "More Eiffel Resources",
href: "https://beyond-tabs.com/language/eiffel"
},
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Discord",
        //       href: "https://discord.gg/Cbgcajdq",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/xframes-project/xframes",
        //     },
        //   ],
        // },
      ],
      copyright: `${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "ada",
        "c",
        "csharp",
        "clojure",
        "cmake",
        "cobol",
        "d",
        "fsharp",
        "fortran",
        "haskell",
        "java",
        "json",
        "julia",
        "kotlin",
        "lisp",
        "lua",
        "nim",
        "ocaml",
        "pascal",
        "python",
        "scheme",
        "racket", // racket extends scheme, so has to come after it
        "ruby",
        "crystal", // crystal extends ruby, so has to come after it
        "rust",
        "scala",
        "smalltalk",
        "swift",
        "tcl",
        "typescript",
        "wasm",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
