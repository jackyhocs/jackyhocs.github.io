const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(PNG|png|jpg|gif)$/, loader: 'file-loader'},
      { test:  /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  /*
  resolve: {
    extensions: [ '*', '.js', '.jsx','.png' ]
  },
  */
  plugins: [HtmlWebpackPluginConfig]
}
