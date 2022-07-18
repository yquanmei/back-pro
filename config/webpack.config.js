/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /webpack-pro/config/webpack.config.js
 * @Description: 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'good',
    })
  ],
  output: {
    filename: '[name].bundle.js],
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
}