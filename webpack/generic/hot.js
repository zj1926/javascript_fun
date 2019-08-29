'use strict';
const webpack = require('webpack');

const webpackConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js'],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  //entry: './client/modules/site/index.jsx',
  output: {
    //filename: 'bundle.js',
    //publicPath: '/site',
  },
  devServer: {
    contentBase: './public', // set "public" path, relative to root
    noInfo: true,
    hot: true,
    inline: true,
    port: '3000',
    host: '127.0.0.1',
    historyApiFallback: {
      //index: "site/" // set "index" path, relative to contentBase, have to end with /
    },
  },
};

module.exports = webpackConfig;
