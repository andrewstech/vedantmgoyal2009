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
  docs: [
    "about-me",
    {
      type: 'category',
      label: '🤖 WinGet Automation',
      collapsed: false,
      items: [
        'wpa-intro',
        'wpa-add-a-package',
        'wpa-working',
      ],
    },
    {
      type: 'category',
      label: '🛫 WinGet Releaser',
      collapsed: false,
      items: [
        'wr-intro',
        'wr-config',
        'wr-multipackage',
      ],
    },
    "contributors"
  ]
};

module.exports = sidebars;
