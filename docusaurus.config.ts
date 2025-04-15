import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const linkedinLink = "https://www.linkedin.com/company/content-bytes/";
const instagramLink = "https://www.instagram.com/contentbytes.krk/";
const facebookLink = "https://www.facebook.com/people/Content-Bytes/61564025612434/";

const config: Config = {
  title: "Content Bytes",
  tagline: "Meetups for content community in Kraków, Poland",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://contentbytes.pl",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Content Bytes", // Usually your GitHub org/user name.
  projectName: "contentbytes.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

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
          routeBasePath: '/',
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
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Content Bytes",
      logo: {
        alt: "Content Bytes logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          position: "right",
          label: "About",
        },
        {
          to: "/#events",
          position: "right",
          label: "Events",
        },
        {
          to: "/#organizers",
          position: "right",
          label: "Organizers",
        },
        {
          to: "/#partners",
          position: "right",
          label: "Partners",
        },
        {
          to: "/#contact",
          position: "right",
          label: "Contact",
        },
        {
          to: "cakeconf",
          position: "right",
          label: "🧁 CAKE conf 2025",
          className: "cake-button"
        },
        {
          href: facebookLink,
          position: 'right',
          className: "navbar--socials-icon facebook-icon", 
          'aria-label': "Facebook",
        },
        {
          href: instagramLink,
          position: 'right',
          className: "navbar--socials-icon instagram-icon", 
          'aria-label': "Instagram",
        },
        {
          href: linkedinLink,
          position: 'right',
          className: "navbar--socials-icon linkedin-icon", 
          'aria-label': "LinkedIn",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Content Bytes logo",
        src: "img/logo-dark-bg.svg",
        height: 50,
      },
      links: [
        {
          label: "Instagram",
          href: instagramLink, 
        },
        {
          label: "Facebook",
          href: facebookLink,
        },
        {
          label: "LinkedIn",
          href: linkedinLink,
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Content Bytes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: "text/javascript"
      },
      innerHTML: `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account', '1431354');`
    }
  ],
};

export default config;
