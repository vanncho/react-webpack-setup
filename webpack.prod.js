const { merge } = require('webpack-merge');
const devConfig = require('./webpack.config.js');

module.exports = merge(devConfig, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
