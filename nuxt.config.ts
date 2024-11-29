// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Enable server-side rendering
  ssr: true,

  // Global page transition
  app: {
    head: {
      title: '365 Surveys',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '365 Surveys' },
        { name: 'keywords', content: '365 Surveys, Specialises in transportation data' },
        { name: 'author', content: '365 Surveys' },
        { property: 'og:title', content: '365 Surveys' },
        { property: 'og:description', content: 'Specialises in transportation data' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.365Surveys.co.uk' },
        { property: 'og:image', content: 'https://media.licdn.com/dms/image/C4E0BAQE40p4qe9z3zA/company-logo_200_200/0/1662882352622/fewzed_ltd_logo?e=1730937600&v=beta&t=4VZ8O9-p0DXD5EvtjmbTZvSP1FJhvV011t4FdbrgsHo' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap'
        }
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  // Site maps
  sitemap: {
    hostname: 'https://www.365Surveys.co.uk',
    routes: [
      '/',
    ],
  },

  // Aliases
  alias: {
    '@': resolve(__dirname, '/'),
  },

  // Global CSS
  css: [
    '~/assets/css/main.css',
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "@nuxtjs/sitemap",
    '@vueuse/nuxt',
    "@nuxt/icon"
  ],
  buildModules: [
    'nuxt-gsap-module'
  ],

  // Imports
  imports: {
    dirs: ['store', 'utils'],
  },
})