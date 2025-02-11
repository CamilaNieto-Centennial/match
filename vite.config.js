import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: true,  // Ensure HMR is enabled
    watch: {
      usePolling: true,  // Might be helpful for file changes when using fetch
    },
  },
});
