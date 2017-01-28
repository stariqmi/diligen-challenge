// https://gist.github.com/stariqmi/c8c0946816b0ba5acc36ed2c13f8800e

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './public/js/main.js'
  },
  output: {
    path: __dirname + '/public/js/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  watch: true
};
