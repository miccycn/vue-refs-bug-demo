// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
const PROJECT_NAME = require('../package.json').name;

const config = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: process.env.productionSourceMap,
    useMD5: true,
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
};

if (process.env.NODE_ENV == 'build') {
  config.build.assetsSubDirectory = '';
  config.build.assetsPublicPath = `//dev.js.weibo.cn/m/${PROJECT_NAME}/`;
}
if (process.env.NODE_ENV == 'production') {
  config.build.assetsSubDirectory = '';
  config.build.assetsPublicPath = `//h5.sinaimg.cn/m/${PROJECT_NAME}/`;
}

module.exports = config;
