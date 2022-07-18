/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /webpack-pro/config/webpack.config.dev.js
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.js");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api": {
        target: "https://dev-crm.ichint.com",
        changeOrigin: true,
        pathRewrite: {
          "^": "",
        },
      },
    },
  },
});
