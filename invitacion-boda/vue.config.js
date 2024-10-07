const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: '../public' // Cambia esto para que la salida vaya directamente a la carpeta raíz `public`
})
