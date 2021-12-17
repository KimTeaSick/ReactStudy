const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
  name: 'word-chain-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: [".js", ".jsx"] //디렉토리에 확장자를 찾아준다
  },

  entry: {
    app: ['./client.jsx'],
  },//입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', {
          targets: {
            browsers: ['> 1% in KR'], //browserslist 에서 확인 가능
          },
          debug: true,
        }], '@babel/preset-react'], //plugin들의 모음
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel'],
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath:'./dist'
  },//출력
  devServer:{
    devMiddleware: {publicPath:'./dist'},
    static: { directory: path.resolve(__dirname)},
    hot: true,
  },
}