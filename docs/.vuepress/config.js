module.exports = {
  title: "Netlify CMS + VuePress",
  description: "Netlify + VuePress",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    docsDir: "docs/_posts",
    repo: "protonbobby/vuepress-netlify-cms",
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Admin",
        link: "/admin/#/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
  },
};
