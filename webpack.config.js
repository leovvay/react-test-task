const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  env = env||{}

  return {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: "all.js"
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 9000,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        WP_CONF_BASE_NAME: JSON.stringify(env.basename || ''),
        WP_CONF_HISTORY_METHOD: JSON.stringify(env.history || 'hash'),
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: false,
      })
    ]
}}
