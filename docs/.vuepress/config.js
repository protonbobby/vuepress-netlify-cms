module.exports = {
  title: "Netlify CMS + VuePress",
  description: "Netlify + VuePress",
  themeConfig: {
    docsDir: "docs",
    repo: "protonbobby/vuepress-netlify-cms",
    sidebar: ["/", "/welcome", "/test"],
    nav: [
      {
        text: "Admin",
        link: "/admin/#/",
      },
    ],
  },
};
