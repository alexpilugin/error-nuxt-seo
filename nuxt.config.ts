// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true, // default: true
  devtools: { enabled: false },
  modules: ["@nuxtjs/seo"],
  site: {
    url: 'http://localhost:3000',
    name: 'Test deployement to firebase',
    description: 'Testing of deployement to firebase a site with Nuxt SEO',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Test Nuxt SEO with Firebase',
      meta: [
        { name: 'description', content: 'Testing of deployment a site with Nuxt SEO on firebase' },
        {
          name: 'keywords',
          content: 'Nuxt.js, NuxtSEO, JavaScript, web development.',
        },
        {
          name: 'og:title',
          content: 'Testing of deployment a site with Nuxt SEO on firebase ',
        },
        {
          name: 'og:description',
          content: 'Testing of deployment a site with Nuxt SEO on firebase',
        },
        {
          name: 'og:url',
          content: 'http://localhost',
        },
        {
          name: 'og:site_name',
          content: 'Site with NuxtSEO on Firebase',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Testing NuxtSEO' },
      ],
      link: [
        { rel: 'shortcut icon', href: './favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      ],
    },
  },
  nitro: {
    firebase: {
      nodeVersion: '18',
      gen: 2,
    },
    preset: "firebase"
  },
})