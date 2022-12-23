import { 
  sidebarDesign,
  sidebarIntegrations,
  sidebarCalculators,
  sidebarBlog,
  sidebarGenericsModules, 
  sidebarLocalsModules, 
} from "./sidebars"

module.exports = {
  lang: "es-CL",
  title: "Buk",
  description: "Documentación y UI Kit web del equipo Marketing Corporativo de Buk, software para Recursos Humanos",
  cleanUrls: 'without-subfolders',

  themeConfig: {
    siteTitle: "Docs & UI Kit",
    nav: [
      { text: 'Diseño', link: '/design/colors', activeMatch: '/design/' },
      { text: 'Integraciones', link: '/integrations/buk-numbers', activeMatch: '/integrations/' },
      { text: 'Calculadoras', link: '/calculators/calc-remu-cl', activeMatch: '/calculators/' },
      { text: 'Blog', link: '/blog/banner-list', activeMatch: '/blog/' },
      { 
        text: 'Módulos', 
        items: [
          { text: 'Genéricos', link: '/modules/generics/introduction', activeMatch: '/modules/generics' },
          // { text: 'Globales', link: '/modules/generics/introduction' },
          { text: 'Locales', link: '/modules/locals/introduction', activeMatch: '/modules/locals' },
        ] 
      },
      

    ],
    sidebar: {
      'design/': sidebarDesign(),
      'integrations/': sidebarIntegrations(),
      'calculators/': sidebarCalculators(),
      'blog/': sidebarBlog(),
      'modules/generics': sidebarGenericsModules(),
      'modules/locals': sidebarLocalsModules(),
    },
    footer: {
      message: "Hecho con ❤ por el equipo Front Mkt Corp",
      copyright: "© 2022-presente",
    }
  },

}