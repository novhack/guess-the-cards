import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import eslint from 'vite-plugin-eslint2';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({ autoImport: true }),
    viteCompression(),
  ],
});
