import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Civitas Americana',
  tagline: 'Restoration, not Rupture.',
  favicon: 'img/favicon.ico',

  url: 'https://civitasamericana.org',
  baseUrl: '/',

  organizationName: 'CivitasAmericana',
  projectName: 'civitas-americana',

  onBrokenLinks: 'warn',
  
  staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'papers',
        path: '../papers',
        routeBasePath: 'papers',
        sidebarPath: './sidebarsPapers.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auth',
        path: '../auth/docs',
        routeBasePath: 'auth',
        sidebarPath: './sidebarsAuth.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Civitas Americana',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'declarationSidebar',
          position: 'left',
          label: 'Declaration',
        },
        {
          to: '/papers/intro',
          label: 'Papers',
          position: 'left',
        },
        {
          to: '/verification',
          label: 'Verification',
          position: 'left',
        },
        {
          to: '/take-action',
          label: 'Take Action',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/CivitasAmericana/civitas-americana',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project',
          items: [
            { label: 'The Declaration', to: '/docs/declaration' },
            { label: 'The Papers', to: '/papers/intro' },
            { label: 'Verification', to: '/verification' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Twitter / X', href: 'https://x.com/CivitasUSA' },
            { label: 'GitHub', href: 'https://github.com/CivitasAmericana/civitas-americana' },
            { label: 'Contact', href: 'mailto:CivitasAmericana@pm.me' },
          ],
        },
      ],
      copyright: `<span>Civitas Americana. No Rights Reserved (CC0).</span><span><code style="font-size: 10px; background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px;">PGP: ED32 B2B6 944C A3E8 AB53 A094 7834 CD98 E016 6EED</code></span><span><em>The text speaks for itself.</em></span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
