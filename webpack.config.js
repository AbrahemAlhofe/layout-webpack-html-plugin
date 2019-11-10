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
  plugins : [
    new HtmlWebpackPlugin({
        template : './src/index.html'
    }),
    new LayoutWebpackPlugin({
        layout : './src/layout.html'
    })
  ]
}
