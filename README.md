# Astro: Áurea - Galería de arte

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                | Action                                               |
| :--------------------- | :--------------------------------------------------- |
| `pnpm install`         | Instala las dependencias                             |
| `pnpm dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`           | Hace el build de la página en `./dist/`              |
| `pnpm preview`         | Muestra el preview de la página                      |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check`     |
| `pnpm astro -- --help` | Get help using the Astro CLI                         |

Pasos a seguir para ejecutar el proyecto

1. Ejecuta el comando `pnpm dev` para ejecutar el proyecto en un servidor de desarrollo

Si deseas ver una build del proyecto, sigue los siguientes pasos

1. Ejecuta el comando `pnpm build` para hacer el build, esto creara un build en la ruta `./dist`
2. Ejecuta el comando `pnpm preview` para levantar un servidor local para visualizar el build creado anteriormente

## Decisiones técnicas

Se eligió el framework `Astro` por su versatilidad al momento de desarrollar un sitio web, ya que permite generar un sitio web estático y a la vez, poder hacer uso de librerías comp `React`. Está versatilidad permite agregar reactividad al sitio y su vez mantener un buen rendimiento, además de otorgar una facilidad para el `SEO`.

## Reto que enfrente

Tuve un pequeño reto al momento de agregar utilidades como `sonner` y `React Hook Form` debido a que estos hacen uso de `JavaScrip` para su funcionamiento y `Astro` unicamente genera archivos estáticos como `HTML` y `CSS`, sin embargo leyendo la documentación de `Astro` pude entender que esto se debía a que `Astro` hace uso de directivas como `client:load` para poder mantener las funcionalidades que permiten frameworks frontend. De está manera pude asegurar las funcionalidades reactivas de `React`.

## Uso de IA

Con respecto a la IA, hice uso de ella en cosas como autocompletado de código con `Github Copilot` y `ChatGPT` para definir una estructura de los textos utilizados en la página, así como algunas imágenes.

## 🚀 Estructura del proyecto

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── contact
│   │   ├── faq
│   │   ├── footer
│   │   ├── gallery
│   │   ├── hero
│   │   ├── nav
│   │   ├── services
│   │   ├── testimonial
│   │   └── ui
│   ├── layouts
│   │   ├── Layout.astro
│   │   └── sonner-layout.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── styles
│   │   └── global.css
│   └── pages
│       └── index.astro
└── package.json
```
