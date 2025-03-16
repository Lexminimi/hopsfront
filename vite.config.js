import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
<<<<<<< HEAD
=======
  base: '/',
>>>>>>> parent of 3fd60f2 (ai corrected 2)
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
<<<<<<< HEAD
        icons: [
          {
            src: 'img/pwa-192x192.png',
=======
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/icon-192x192.png',
>>>>>>> parent of 3fd60f2 (ai corrected 2)
            sizes: '192x192',
            type: 'image/png'
          },
          {
<<<<<<< HEAD
            src: 'pwa-512x512.png',
=======
            src: '/img/icons/icon-512x512.png',
>>>>>>> parent of 3fd60f2 (ai corrected 2)
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})
