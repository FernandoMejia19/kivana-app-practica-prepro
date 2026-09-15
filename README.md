# Kivana

Sitio web público de **Kivana**, orientado a la presentación del producto, sus funcionalidades y la experiencia de gamificación de hábitos cotidianos **Kidos**.

> La vida familiar, más organizada y divertida.

---

## Tecnologías principales

- **Astro** (`^4.16.0`): Framework web orientado a sitios rápidos y de alto rendimiento.
- **TypeScript** (`^5.6.0`): Tipado estático para mejorar la mantenibilidad y calidad del código.
- **HTML5 semántico**: Estructura accesible y optimizada para SEO.
- **CSS moderno**: Variables CSS, Flexbox, CSS Grid y estilos organizados de forma modular.

---

## Requisitos

Para ejecutar el proyecto localmente se requiere:

- **Node.js**: Versión 18.x o superior. Se recomienda utilizar una versión LTS.
- **npm**: Versión compatible con la versión instalada de Node.js.

> Astro se instala automáticamente como dependencia local mediante `package.json`. No es necesario realizar una instalación global.

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd kivana-web-practicas
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible por defecto en:

```text
http://localhost:4321
```

### 4. Generar el build de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

### 5. Previsualizar el build de producción

```bash
npm run preview
```

---

## Comandos disponibles

| Comando           | Descripción                                                  |
| :---------------- | :----------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga en tiempo real. |
| `npm start`       | Alias para iniciar el servidor de desarrollo.                |
| `npm run build`   | Genera el build optimizado para producción en `dist/`.       |
| `npm run preview` | Previsualiza localmente el build generado.                   |
| `npm run astro`   | Ejecuta el CLI local de Astro.                               |

---

## Estructura del proyecto

```text
.
├── src/
│   ├── assets/              # Ilustraciones, imágenes WebP/PNG y recursos SVG
│   ├── componentes/         # Componentes reutilizables
│   │   ├── comunes/         # Encabezado, pie de página, botones, etc.
│   │   └── ui/              # Componentes específicos de interfaz
│   ├── datos/               # Datos estáticos en TypeScript
│   ├── estilos/             # Estilos globales y variables CSS
│   ├── plantillas/          # Layouts y estructuras base del sitio
│   └── pages/               # Páginas y rutas públicas
│       ├── index.astro               # Página de inicio
│       ├── funcionalidades.astro     # Funcionalidades de Kivana
│       ├── kidos.astro               # Experiencia Kidos
│       ├── nosotros.astro            # Historia, propósito y valores
│       ├── faq.astro                 # Preguntas frecuentes
│       ├── contacto.astro            # Formulario e información de contacto
│       ├── privacy.astro             # Política de privacidad
│       ├── terms.astro               # Términos y condiciones
│       └── delete-account.astro      # Eliminación de cuenta
│
├── public/
│   ├── fonts/               # Fuentes tipográficas locales
│   ├── favicon.svg          # Icono del sitio
│   ├── robots.txt           # Directivas para motores de búsqueda
│   └── sitemap.xml          # Mapa del sitio
│
├── astro.config.mjs         # Configuración de Astro
├── tsconfig.json            # Configuración de TypeScript y alias
└── package.json             # Dependencias y scripts del proyecto
```

---

## Configuración

### Variables de entorno

El proyecto actualmente **no requiere un archivo `.env`** ni variables de entorno para ejecutarse localmente.

### Formulario de contacto

El formulario ubicado en `/contacto` utiliza **Formspree** para gestionar los envíos realizados por los usuarios.

El endpoint del formulario se configura mediante el identificador proporcionado por Formspree.

> No se deben almacenar credenciales, claves privadas, tokens ni información sensible directamente en el código fuente.

### Alias de importación

Los alias utilizados por el proyecto se encuentran configurados en `tsconfig.json`:

```text
@componentes/*
@plantillas/*
@datos/*
@estilos/*
@assets/*
```

---

## Desarrollo y mantenimiento

Para mantener una estructura consistente:

* Los componentes reutilizables deben mantenerse dentro de `src/componentes/`.
* Los datos estáticos deben centralizarse en `src/datos/`.
* Los estilos globales y variables de diseño deben mantenerse en `src/estilos/`.
* Los recursos gráficos deben optimizarse antes de incorporarse al proyecto.
* Se debe mantener la identidad visual y la paleta de colores definida para Kivana.
* Los cambios de contenido deben respetar la estructura y jerarquía existente del sitio.
* Se deben mantener buenas prácticas de HTML semántico, accesibilidad y SEO.
* No se deben incluir credenciales, tokens o información sensible en el repositorio.


---

## Deploy en GitHub Pages

El proyecto cuenta con integración continua configurada mediante **GitHub Actions** para desplegarse automáticamente en GitHub Pages.

### 1. Configuración de variables
En `astro.config.mjs`, actualiza únicamente estos dos valores con los de tu cuenta y repositorio:

```javascript
const GITHUB_USERNAME = "FernandoMejia19";
const GITHUB_REPOSITORY = "kivana-app-practica-prepro";
```

### 2. Primer Push a GitHub
Sube tus cambios a la rama principal `main`:

```bash
git add .
git commit -m "chore: configure GitHub Pages deployment"
git push origin main
```

### 3. Configuración en GitHub
1. Dirígete a tu repositorio en GitHub.
2. Ve a **Settings** → **Pages**.
3. En **Build and deployment** → **Source**, selecciona **GitHub Actions**.

### 4. Publicación y URL
- GitHub Actions ejecutará automáticamente el workflow `.github/workflows/deploy.yml`.
- Al finalizar, el sitio se publicará en: `https://<GITHUB_USERNAME>.github.io/<GITHUB_REPOSITORY>/`
- Cada nuevo `git push origin main` actualizará automáticamente el sitio en vivo.

---

## Estado del proyecto

Proyecto desarrollado durante las **prácticas preprofesionales** como parte del desarrollo del sitio web público de Kivana.

Este repositorio corresponde al entorno de desarrollo utilizado durante las prácticas y podrá ser trasladado posteriormente al repositorio oficial de la organización según el proceso definido para el proyecto.
