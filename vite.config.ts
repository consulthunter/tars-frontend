import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import Icons from 'unplugin-icons/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), Icons({
    compiler: 'vue3',})],
  server: {
    host: 'localhost',  // Make Vite listen on all interfaces
    port: 5173,       // Your frontend port
  },
})
