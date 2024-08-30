import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// @ts-ignore
// import generalAssets from './plugins/general_assets.js'

export default defineConfig({
  plugins: [  
  // generalAssets(),
  libInjectCss(),
  dts({ include: ['src'] })],
  server: {
    proxy: { "/api": "http://localhost:6060/" },
    open: true,
    port: 7000
  },
  build: {
    target: 'modules',
    modulePreload: {
      polyfill: false,
    },
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'PalmyraTsUtils',
      fileName: 'palmyra-ts-utils',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'axios',
        'chart.js',
        'chartjs-plugin-datalabels',
        'd3',
        'dayjs',
        '@palmyralabs/palmyra-wire',
        '@palmyralabs/rt-forms',
        '@palmyralabs/ts-predicates',
        'jspdf',
        'react',
        'html2canvas',
        'react-dom',
        'react-icons',
        'react-router-dom',
        'react/jsx-runtime',
        'react-chartjs-2',        
        '@emotion/react',
        '@emotion/styled',
        '@mui/x-date-pickers',
        '@mui/material',
        '@mui/icons-material',
        '@mui/styled-engine',
        '@mui/x-tree-view',
        '@tanstack', 
        '@tanstack/react-table',
        '@tanstack/core-table'
      ],
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}').map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        // format: 'iife',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js'
      }
    }
  }
})
