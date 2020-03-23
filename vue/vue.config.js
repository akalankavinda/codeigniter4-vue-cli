
const path = require("path");

module.exports = {
    chainWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
          config.plugin('html').tap((opts) => {
              opts[0].filename = 'index.html';
              return opts;
          });
      }
   },
    publicPath: '',
    outputDir: path.resolve(__dirname, "../public/spa"),
    assetsDir: "assets"
  }