const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UDSM DHIS2 Club",
  tagline: "A student centered club.",
  url: "https://dhis2-club-tanzania.github.io",
  baseUrl: "/udsm-dhis2-club/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "dhis2-club-tanzania",
  projectName: "udsm-dhis2-club",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/dhis2-club-tanzania/udsm-dhis2-club/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/dhis2-club-tanzania/udsm-dhis2-club/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "DHIS2 Club",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "News and Updates",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/dhis2-club-tanzania/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "News and Updates",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Medium",
                href: "https://medium.com/@dhis2club",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/udsmdhis2club",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/dhis2-club-tanzania/udsm-dhis2-club",
              },
            ],
          },
        ],
        copyright: `Proudly Sponsored by <a href="http://dhis2.udsm.ac.tz/"> UDSM DHIS2 Lab </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
