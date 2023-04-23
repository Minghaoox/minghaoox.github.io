// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
//数学公式插件
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'David 💌 Miao',
  tagline: 'The tagline of my site',
  favicon: 'img/miao/猫咪-4.svg',
  url: 'https://minghaoox.github.io/',
  baseUrl: '/',
  customFields: {
    docs: '/docs',
  },
  organizationName: 'myInterest', // Usually your GitHub org/user name.
  projectName: "David's Wiki", // Usually your repo name.
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      {
        theme: {
          // 全局导入主题
          customCss: require.resolve('./src/css/custom.css'),
        },

        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Minghaoox/',
          // 数学公式配置
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          // ... configuration object here
        },

      },
    ],
  ],

  // 数学公式配置
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "David's Page",

      logo: {
        alt: 'My Site Logo',
        src: 'img/emojis/酷.svg'
      },

      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: '📗Notes'
        },
        { to: '/blog', label: '👨🏻‍💻Blogs', position: 'right' },
        // { to: '/', label: '🏡Home', position: 'right' },

        {
          href: 'https://openai.com',
          label: 'OpenAI',
          position: 'right',
        },
      ],
    },

    algolia: {
      // The application ID provided by Algolia
      appId: '3F6BG6ECNB',
      // Public API key: it is safe to commit it
      apiKey: '43ae6cf6f5308836dae69a605ae4b011',
      indexName: 'minghaoox.github.io/',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Notes Page',
              to: '/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'My GitHub Page',
              href: 'https://github.com/Minghaoox/',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'My Daily Blog',
              to: '/blog',
            },
            {
              label: 'Proxies for Research Only',
              href: 'https://note.youdao.com/ynoteshare/index.html?id=970ae6eece5f1bd28617d1131279acf6&type=note&_time=1672286326447',
            },
            {
              label: 'SouthWest University of Nationalities',
              href: 'https://www.swun.edu.cn/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} David's Project, Inc.`,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },

  },
}

module.exports = config
