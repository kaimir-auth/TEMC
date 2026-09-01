import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        products: 'products-services.html',
        history: 'history.html',
        recognition: 'recognition.html',
        gallery: 'gallery.html',
      },
    },
  },
})
