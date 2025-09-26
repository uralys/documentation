import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://documentation.uralys.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uralys', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Uralys Documentation',
      logo: {
        alt: 'Uralys Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'html',
          position: 'right',
          value:
            '<a href="https://open.spotify.com/artist/1lRNAaGXQBBXR6MWs0pEVp" target="_blank" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg\'); background-repeat: no-repeat;  background-size: 24px 24px; display: flex">'
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<a href="https://github.com/uralys/documentation" target="_blank" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg\'); background-repeat: no-repeat;  background-size: 24px 24px; display: flex">'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'plop',
              to: '/'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'uralys.com',
              href: 'https://uralys.com'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/uralys'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uralys.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
