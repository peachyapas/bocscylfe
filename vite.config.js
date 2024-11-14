import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import path from 'path';

import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    root: './client',
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:3000/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
  }
})
