'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')
const ifProduction = (func) => process.env.NODE_ENV === 'production' ? func : () => {}

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'scripts/[hash].js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(pdf|doc)$/, loader: 'file-loader?limit=30000&name=documents/[name].[ext]' },
      { test: /\.(woff|woff2|svg|ttf|eot)$/, loader: 'file-loader?limit=30000&name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RestCMS Wall Of Fame',
      inject: false,
      mobile: true,
      template: require('html-webpack-template'),
      appMountId: 'app',
      baseHref: '/',
      links: [
        'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://fonts.googleapis.com/css?family=Cookie|Roboto',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      ]
    }),
    ifProduction(new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })),
    ifProduction(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }))
  ]
}
