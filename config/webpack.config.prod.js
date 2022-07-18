/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /webpack-pro/config/webpack.config.prod.js
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.js");
module.exports = merge(webpackBaseConfig, {
  mode: "production",
  devtool: "inline-source-map",
});
