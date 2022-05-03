const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/bongo-cat/',
  build: {
    outDir: 'docs'
  }
});
