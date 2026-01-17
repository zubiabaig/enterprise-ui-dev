import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $components: path.resolve(__dirname, '../../components'),
    },
  },
  test: {
    globals: true,
    setupFiles: './test/utilities.ts',
    exclude: [...defaultExclude, '**/*.svelte**'],
  },
});
