import axios from 'axios';
import { themes as prismThemes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import docusaurusLunrSearchPlugin from 'docusaurus-lunr-search';

// boolean to check if the site is being built in development mode
const isDev = process.env.NODE_ENV === 'development';

module.exports = async function configCreatorAsync() {
  const contact_info = await axios.get(
    "https://raw.githubusercontent.com/dsmtE/dsmtE/main/contact.json"
  ).then((res) => res.data).catch((err) => ({}));

  const rehypeKatex = (await import('rehype-katex')).default;
  const remarkMath = (await import('remark-math')).default;

  const config: Config = {
    title: 'Cours de programmation C++',
    tagline: '',
    url: `https://dsmte.github.io/`,
    baseUrl: isDev ? '/' : '/Learn--cpp_programming/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'imgs/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'dsmtE', // Usually your GitHub org/user name.
    projectName: 'Learn--cpp_programming', // Usually your repo name.

    i18n: {
      defaultLocale: 'fr',
      locales: ['fr'],
    },

    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

    plugins: [[ docusaurusLunrSearchPlugin, {
      languages: ['fr'],
      includeRoutes: ['**/Lessons/**', '**/TDs/**', '**/Annexes/**', '**/Workshop/**', '**/Subjects/**'],
    }]],

    presets: [
      [
        'classic',
        {
          docs: {
            path: "./content",
            routeBasePath: "/",
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        } satisfies Preset.Options,
      ],
    ],

    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css",
        integrity:
          "sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ",
        crossorigin: "anonymous",
      },
    ],

    themeConfig: {
        navbar: {
          title: '',
          logo: {
            alt: 'Logo',
            src: 'imgs/logo.svg',
          },
          items: [
            {to: '/Lessons', label: 'Cours', position: 'left'},
            {to: '/TDs', label: 'TDs', position: 'left'},
            {to: '/Annexes', label: 'Annexes', position: 'left'},
            {to: '/Workshop', label: 'Workshop', position: 'left'},
            {to: '/Subjects', label: 'Sujets', position: 'left'},
            {to: '/Sources', label: 'Sources', position: 'right'},
          ],
        },
        docs: {
          sidebar: {
            hideable: true,
          },
        },
        footer: {
          style: 'dark',
          links: [
            {
              // label: "Discord",
              // to: `https://discord.com/users/${contact_info.discord_user_id}`,
              html: `
              <a href="https://discord.com/users/${contact_info.discord_user_id}" class="footer__link-item">
                <img src="https://api.iconify.design/skill-icons/discord.svg" /> Discord
              </a>
              `,
            },
            {
              label: "E-Mail",
              to: `mailto:${contact_info.email}`,
            },
            {
              // label: "GitHub",
              // to: "https://github.com/dsmtE",
              html: `
              <a href="https://github.com/dsmtE" class="footer__link-item">
                <img src="https://api.iconify.design/skill-icons/github-dark.svg" /> GitHub
              </a>
              `,
            },
          ],
          copyright:
            `These lessons were written by <a href="https://github.com/dsmtE">DE SMET Enguerrand</a>.</br>` +
            `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          additionalLanguages: ["cmake", "csharp"],
        },
    } satisfies Preset.ThemeConfig,
  };

  return config;
};

