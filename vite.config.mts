import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import eslint from 'vite-plugin-eslint2';
import viteCompression from 'vite-plugin-compression2';
import { robots } from 'vite-plugin-robots';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({ autoImport: true }),
    viteCompression(),
    robots(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'group-user': [
            './src/views/GameView.vue',
            './src/views/LeaderboardView.vue',
            './src/views/StartView.vue',
          ]
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  server: {
    proxy: {
      '/randomword': {
        target: 'https://api.api-ninjas.com/',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  envPrefix: "CARDS_",
});
