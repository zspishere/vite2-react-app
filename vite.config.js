import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: join(__dirname, 'dist'),
    sourcemap: true,
    minify: false,
    rollupOptions: {
      plugins: [],
    },
  },
  esbuild: {
    jsxFragment: 'Fragment',
  },
})
