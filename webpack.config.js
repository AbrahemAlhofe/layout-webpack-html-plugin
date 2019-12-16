const path = require('path');
const { basename } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LayoutWebpackPlugin = require('./index.js');

module.exports = {
  entry : { index : './src/index.js' },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  module : {
    rules: [
        { test : /\.pug$/, use: ['pug-loader'] },
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
        template : './src/index.pug'
    }),
    new LayoutWebpackPlugin({
        layout : path.resolve(__dirname, './src/layout.pug')
    })
  ]
}
