var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config.js');


config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new ExtractTextPlugin('styles.css')
];

config.module.loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel?optional[]=es7.classProperties'
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style', 'css!sass')
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css')
  }
].concat(config.module.loaders);

module.exports = config;