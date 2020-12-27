module.exports = {
  title: 'Mathology Docs',
  tagline: 'Find setup guides, tips and much more.',
  url: 'https://docs.mathology.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mathology',
  projectName: 'mathology-docs',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Mathology Docs',
      logo: {
        alt: 'Mathology Docs',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.mathology.org',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'mailto:hello@mathology.org',
          label: 'Contact',
          position: 'right',
        },
        {
          href: 'https://github.com/mathology-lms',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Mathology',
          items: [
            {
              label: 'Website',
              href: 'https://www.mathology.org',
            },
            {
              label: 'Contact',
              href: 'mailto:hello@mathology.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mathology-lms',
            },
          ],
        },
        {
          title: 'Open Source',
          items: [
            {
              label: 'Mathology Server',
              href: 'https://github.com/mathology-lms/mathology-server',
            },
            {
              label: 'Mathology App',
              href: 'https://github.com/mathology-lms/mathology-app',
            },
            {
              label: 'Mathology Docs',
              href: 'https://github.com/mathology-lms/mathology-docs',
            },
          ],
        },
        {
          title: 'App',
          items: [
            {
              label: 'Web',
              href: '/',
            },
            {
              label: 'iOS',
              href: '/',
            },
            {
              label: 'Android',
              href: '/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: '/',
            },
            {
              label: 'Terms',
              href: '/',
            },
            {
              label: 'Imprint',
              href: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mathology`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mathology-lms/mathology-docs/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
