import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  
  ssr: {
    external: ['test-dep']
  },
  plugins: [
    VitePluginNode({
      adapter: 'express',
      appPath: './main.ts',
    })
  ]
})