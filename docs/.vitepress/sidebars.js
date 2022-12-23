function sidebarDesign () {
  return [
    {
      text: 'Diseño UI',
      collapsible: true,
      items: [
        { text: 'Colores', link: '/design/colors' },
        { text: 'Fuentes', link: '/design/fonts' },
        { text: 'Sombras', link: '/design/shadows' },
      ]
    },
  ]
}

function sidebarIntegrations () {
  return [
    {
      text: 'Módulos con Integraciones',
      items: [
        { text: 'Buk Numbers', link: '/integrations/buk-numbers' },
        { text: 'Descargables', link: '/integrations/downloadable-resources' },
      ]
    },
    // {
    //   text: 'Recursos',
    //   collapsible: true,
    //   items: [
    //     { text: 'Descargables', link: '/integrations/downloadable-resources' },
    //   ]
    // }
  ]
}

function sidebarCalculators() {
  return [
    {
      text: 'Chile',
      collapsible: true,
      items: [
        { text: 'Sueldo liquido', link: '/calculators/calc-remu-cl' },
      ]
    },
    {
      text: 'México',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Sueldo Neto', link: '/calculators/calc-remu-mx' },
      ]
    },
    {
      text: 'Soluciones',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Calculadora de Beneficios', link: '/calculators/calc-perks' },
      ]
    },
  ]
}

function sidebarBlog () {
  return [
    {
      text: 'Blog List',
      collapsible: true,
      items: [
        { text: 'Banner', link: '/blog/banner-list' },
        { text: 'Paginación', link: '/blog/pagination' },
      ]
    },
    {
      text: 'Blog Post',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Artículo Relacionado', link: '/blog/relative-article' },
        // { text: 'Paginación', link: '/blog/pagination' },
      ]
    },
  ]
}

function sidebarGenericsModules() {
  return [
    {
      text: 'Introducción',
      collapsible: true,
      items: [
        { text: 'Aspectos Generales', link: '/modules/generics/introduction' },

      ]
    },
    {
      text: 'Banners',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Static Solido', link: '/modules/generics/banners/static-solid' },
        { text: 'Static Curva', link: '/modules/generics/banners/static-curva' },
        { text: 'Static Formulario', link: '/modules/generics/banners/static-form' },

      ]
    },
    {
      text: 'Clientes Partners',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Carrusel', link: '/modules/generics/clients-partners/carousel' },
        { text: 'Box', link: '/modules/generics/clients-partners/box' },

      ]
    },

  ]
}

function sidebarLocalsModules() {
  return [
    {
      text: 'Introducción',
      collapsible: true,
      items: [
        { text: 'Aspectos Generales', link: '/modules/locals/introduction' },

      ]
    },
    {
      text: 'App',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Features Download', link: '/modules/locals/' },
      ]
    },
    {
      text: 'Blog',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Banner Blog - List', link: '/modules/locals/' },
        { text: 'Pagination - List', link: '/modules/locals/' },
        { text: 'Artículo Relacionado - Post', link: '/modules/locals/' },
        { text: 'Banner Blog - Post', link: '/modules/locals/' },
        { text: 'Compartir - Post', link: '/modules/locals/' },
      ]
    },
    {
      text: 'Sidebar Blog',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Agenda Llamada CTA', link: '/modules/locals/' },
        { text: 'Bóton Buscar', link: '/modules/locals/' },
        { text: 'Categorías', link: '/modules/locals/' },
        { text: 'Newsletter', link: '/modules/locals/' },
        { text: 'Siguenos', link: '/modules/locals/' },
      ]
    },
    {
      text: 'Buk Numbers',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Gráficos Chile', link: '/modules/locals/' },
      ]
    },
    {
      text: 'Calculadoras',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Remuneraciones CL', link: '/modules/locals/' },
        { text: 'Remuneraciones MX', link: '/modules/locals/' },
      ]
    },
    {
      text: 'Clientes',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Banner Video Curva', link: '/modules/locals/' },
        { text: 'Caracteristicas', link: '/modules/locals/' },
        { text: 'Casos de Éxito', link: '/modules/locals/' },
        { text: 'Tab Desplegable', link: '/modules/locals/' },
        { text: 'Testimonio', link: '/modules/locals/' },
      ]
    },


  ]
}

export { 
  sidebarDesign,
  sidebarIntegrations,
  sidebarCalculators,
  sidebarBlog,
  sidebarLocalsModules, 
  sidebarGenericsModules
}