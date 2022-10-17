/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /cli-pro/config/webpack.prod.js
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const webpackBaseConfig = require("./webpack.config.js");
const { merge } = require("webpack-merge");
module.exports = merge(webpackBaseConfig, {
  mode: "production",
});
