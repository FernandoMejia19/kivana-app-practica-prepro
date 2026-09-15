import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kivana.app',
  compressHTML: true,
  devToolbar:{
    enabled:true
  }
});
