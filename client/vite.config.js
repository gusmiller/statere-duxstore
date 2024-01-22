/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: vite.config.js
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
     plugins: [react()],
     server: {
          port: 3000,
          open: true,
          proxy: {
               '/graphql': {
                    target: 'http://localhost:3001',
                    secure: false,
                    changeOrigin: true
               }
          }
     },
     test: {
          globals: true,
          environment: 'happy-dom'
     }
})
