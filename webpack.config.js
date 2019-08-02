var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
   'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'react-input-range', 'redux-form', 'redux-thunk'

]

module.exports = {
  entry: {   
      bundle: './src/index.js',
      vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [ 'style-loader', 'css-loader' ],
        test:/\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};


// webpack dev server instaliras da osluskuje promene i on je vezan samo za front nema veze sa backendom.
// "scripts": {
//   "clean": "rimraf dist",
//   "build": " npm run clean && webpack",
//   "serve":"webpack-dev-server"
// },

// ubaci u package.json serve komandu da pokrenes Server