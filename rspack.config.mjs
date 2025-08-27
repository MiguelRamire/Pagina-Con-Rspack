// Importa utilidades de Node.js para manejar rutas y URLs
import path from "node:path";
import { fileURLToPath } from "node:url";

// Importa el método para definir la configuración de Rspack
import { defineConfig } from "@rspack/cli";

// Plugin que genera un HTML base e inyecta automáticamente los bundles JS/CSS
import HtmlRspackPlugin from "html-rspack-plugin";

// Obtiene el directorio actual del archivo de configuración (equivalente a __dirname en CommonJS)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Exporta la configuración principal de Rspack
export default defineConfig({
  // Modo: puede ser "development" o "production", se toma de la variable de entorno NODE_ENV
  mode: process.env.NODE_ENV || "development",

  // Punto de entrada principal de la aplicación
  entry: { main: "./src/index.js" },

  // Configuración de salida de los bundles
  output: {
    // Carpeta de salida (ruta absoluta obligatoria)
    path: path.resolve(__dirname, "dist"),

    // Nombre de los archivos resultantes; incluye hash para cache busting
    filename: "[name].[contenthash].js",

    // Limpia automáticamente la carpeta "dist" antes de cada build
    clean: true,

    // Estructura de nombres para los recursos estáticos (imágenes, fuentes, etc.)
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  // Genera un source map para facilitar la depuración en desarrollo
  devtool: "source-map",

  // Reglas de manejo de distintos tipos de archivos
  module: {
    rules: [
      // Estilos CSS
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },

      // Estilos SASS/SCSS
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },

      // Archivos de imagen
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset", // Puede exportar como base64 o archivo según tamaño
        parser: { dataUrlCondition: { maxSize: 10 * 1024 } }, // Si es menor a 10kb se convierte en base64
      },

      // Archivos de fuentes
      { test: /\.(woff2?|ttf|otf|eot)$/i, type: "asset/resource" },
    ],
  },

  // Plugins adicionales
  plugins: [
    new HtmlRspackPlugin({
      template: "./public/index.html", // Usa este archivo como plantilla
      inject: "body", // Inyecta los scripts al final del <body>
    }),
  ],

  // Configuración del servidor de desarrollo
  devServer: {
    static: { directory: path.resolve(__dirname, "public") }, // Carpeta de archivos estáticos
    port: 5173,   // Puerto en el que corre el servidor
    open: true,   // Abre automáticamente el navegador
    hot: true,    // Habilita Hot Module Replacement (actualización en caliente)
  },
});