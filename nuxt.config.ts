import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  head: {
    title: 'front-caencamp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  publicRuntimeConfig: {},
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  css: [],
  plugins: ['~/plugins/services', '~/plugins/composition-api'],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  axios: {
    baseURL: process.env.BASE_URL,
    prefix: '/api',
    proxy: true,
  },
  proxy: {
    '/api/': process.env.BASE_URL,
  },
  content: {},
  build: {},
}

export default config
