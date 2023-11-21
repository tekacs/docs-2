/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'quick-start',
    'why-farm',
    'using-plugins',
    {
      type: 'category',
      label: 'Tutorial',
      collapsed: false,
      items: ['tutorials/overview', 'tutorials/create', 'tutorials/start', 'tutorials/build'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/html',
        'features/css',
        'features/script',
        'features/static',
        'features/lazy-compilation',
        'features/partial-bundling',
        'features/sourcemap',
        'features/tree-shake',
        'features/minification',
        'features/polyfill',
        'features/persistent-cache',
      ],
    },
    'benchmark',
  ],
  configSidebar: [
    'config/farm-config',
    'config/cli'
  ],
  pluginSidebar: [
    {
      type: 'category',
      label: 'Official Plugins',
      items: [
        'plugins/official-plugins/overview',
        {
          type: 'category',
          label: 'Rust Plugins',
          collapsed: false,
          items: [
            'plugins/official-plugins/react',
            'plugins/official-plugins/sass',
          ]
        },
        {
          type:'category',
          label: 'Js Plugins',
          collapsed: false,
          items: [
            'plugins/official-plugins/js-postcss',
            'plugins/official-plugins/js-less',
            'plugins/official-plugins/js-sass',
            'plugins/official-plugins/js-svgr',
            'plugins/official-plugins/js-dts',
          ]
        }
      ]
    },
    'plugins/community-plugins',
    {
      type: 'category',
      label: 'Writing Plugins',
      collapsed: false,
      items: [
        'plugins/writing-plugins/overview',
        'plugins/writing-plugins/rust-plugin',
        'plugins/writing-plugins/js-plugin',
      ]
    },
  ]
};

module.exports = sidebars;
