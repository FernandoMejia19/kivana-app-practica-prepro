import { defineConfig } from 'astro/config';

const GITHUB_USERNAME = 'FernandoMejia19';
const GITHUB_REPOSITORY = 'kivana-app-practica-prepro';

const esPaginaUsuario =
  GITHUB_REPOSITORY.toLowerCase() ===
  `${GITHUB_USERNAME.toLowerCase()}.github.io`;

const esProduccion = process.env.NODE_ENV === 'production';

const site = `https://${GITHUB_USERNAME}.github.io`;

const base =
  esProduccion && !esPaginaUsuario
    ? `/${GITHUB_REPOSITORY}`
    : '/';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});