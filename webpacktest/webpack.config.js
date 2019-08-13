const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './src/script/index.js',
  output: {
    filename: './index.html',
    path: path.resolve(__dirname, 'dist')
  }
}