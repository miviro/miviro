// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'static/js', // Output directory
    rollupOptions: {
      input: 'assets/js/main.js', // Entry point
      output: {
        entryFileNames: 'main.js', // Consistent file name
        chunkFileNames: '[name].js', // Optional: for code-split chunks
        assetFileNames: '[name].[ext]' // Optional: for assets like CSS
      }
    },
    // Optional: Disable filename hashing
    // Uncomment the following lines if you want to remove hash from filenames
    // rollupOptions: {
    //   output: {
    //     entryFileNames: 'main.js',
    //     chunkFileNames: '[name].js',
    //     assetFileNames: '[name].[ext]'
    //   }
    // }
  }
})
