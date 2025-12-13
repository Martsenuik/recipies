
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const repoName = 'recipies';

export default defineConfig({
  plugins: [react()],

  base: `/${recipies}/`,
});