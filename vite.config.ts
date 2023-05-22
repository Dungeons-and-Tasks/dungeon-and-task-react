import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from 'path';
import viteSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }],
  },
  server: {
    port: 5000
  }
})
