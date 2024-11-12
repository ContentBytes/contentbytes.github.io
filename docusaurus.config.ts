import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Content Bytes",
  tagline: "Meetups for content community in Kraków, Poland",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://contentbytes.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ContentBytes", // Usually your GitHub org/user name.
  projectName: "contentbytes.github.io", // Usually your repo name.
  // deploymentBranch: 'gh-pages',

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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Content Bytes",
      logo: {
        alt: "Content Bytes logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          label: "About",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "events",
          position: "right",
          label: "Events",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Content Bytes logo",
        src: "img/logo.svg",
        height: 80,
      },
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/content-bytes/",
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/people/Content-Bytes/61564025612434/",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Content Bytes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
