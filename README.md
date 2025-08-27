# Taller2ppe - Pagina-Con-Rspack

**Versión:** 1.0.0

## Descripción
Proyecto web que utiliza RSPack como bundler para empaquetado y optimización. Este repositorio contiene la configuración del bundler, archivos estáticos y un ejemplo de despliegue en `dist/`.

## Requisitos
- Node.js >= 16
- npm o yarn
- Tener instalado RSPack localmente (se añade en dependencias del proyecto).

## Instalación
```bash
# Desde la carpeta del proyecto
cd Pagina-Con-Rspack
npm install
```

## Scripts útiles (detectados en package.json)
- `dev`: `rspack serve --mode=development`
- `build`: `rspack build --mode=production`
- `preview`: `npx serve dist`

## Configuración de RSPack detectada
Se encontró el archivo `rspack.config.mjs` en la raíz del proyecto. A continuación se muestra un extracto de las primeras líneas:

```javascript
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@rspack/cli";
import HtmlRspackPlugin from "html-rspack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  mode: process.env.NODE_ENV || "development",
  entry: { main: "./src/index.js" },

  // Debe ser ruta ABSOLUTA; por defecto es <cwd>/dist, aquí lo explicitamos.
  // (Rspack sigue el esquema de Webpack para output.path)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  devtool: "source-map",

  module: {
    rules: [
      // Archivos CSS
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },

      // Archivos SASS/SCSS
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },

      // Imágenes
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 10 * 1024 } },
      },

      // Fuentes
      { test: /\.(woff2?|ttf|otf|eot)$/i, type: "asset/resource" },
    ],
  },

  plugins: [
    new Ht
...(truncated)

```

**Explicación general:**
- `entry`: punto(s) de entrada de la aplicación.
- `output`: carpeta y nombre de los activos generados (por defecto `dist/`).
- `module.rules` / `loaders`: gestión de CSS, imágenes, fuentes, etc.
- `plugins`: generación del `index.html`, minificación y otras optimizaciones.

Para más detalle sobre la estructura de configuración y las opciones disponibles consulte la documentación oficial de RSPack.

## Optimización para producción
Recomendaciones prácticas:

- Usar `@rspack/plugin-minify` o la configuración `output.minify` para minificar JS/CSS en producción.
- Minificar HTML con `html-rspack-plugin` o `rsbuild-plugin-html-minifier-terser`.
- Comprimir/optimizar imágenes con plugins o loaders (por ejemplo, `image-minimizer-webpack-plugin` o plugins que usen `@napi-rs/image`/SVGO).
- Si se requiere ofuscación, puede evaluar `javascript-obfuscator` como paso adicional post-build; tenga en cuenta las implicaciones y compatibilidad.

## Cómo ejecutar
**Desarrollo** (con servidor de desarrollo):

```bash
npm run dev
# o si no existe:
npx rspack serve
```

**Generar build**:

```bash
npm run build
# o si no existe:
npx rspack build
```

Los archivos generados aparecerán en `dist/` por defecto.

## Despliegue
- Para desplegar en plataformas como Vercel o Netlify, indique la carpeta `dist/` como carpeta de salida estática.
- Si hay un `vercel.json`, respete la configuración allí incluida.

## Estructura del proyecto (resumen)
```
Pagina-Con-Rspack/
├─ dist/                # salida de producción
├─ src/                 # código fuente (JS/CSS)
├─ public/              # recursos estáticos
├─ rspack.config.mjs    # configuración del bundler
├─ package.json
└─ README.md
```

## Referencias y recursos
- RSPack — sitio oficial. https://rspack.rs
- Guía de configuración de RSPack. https://v0.rspack.dev/config
- `@rspack/plugin-minify` (npm). https://v0.rspack.dev/config
- `html-rspack-plugin` (GitHub). https://github.com/rspack-contrib/html-rspack-plugin
- `rsbuild-plugin-image-compress` (GitHub). https://github.com/rspack-contrib/rsbuild-plugin-image-compress.git
- Terser (minificador). https://terser.org/docs/api-reference/?utm_source=chatgpt.com
- `javascript-obfuscator` (GitHub). https://github.com/javascript-obfuscator/javascript-obfuscator.git

---

*Este README fue generado automáticamente a partir de la inspección del repositorio. Revise y adapte las secciones de `Scripts` y `rspack.config.mjs` según los requisitos específicos del proyecto.*
