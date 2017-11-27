const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'whatwg-fetch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      { test: /\.js?$/,
        loader: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src', 'styles') 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}