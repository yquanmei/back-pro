/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /cli-pro/config/webpack.config.js
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProd = process.env.NODE_ENV === "prod";

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // 只做语言转换，而不做类型检查
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                // "@babel/plugin-syntax-jsx",
                "@babel/plugin-transform-react-jsx",
              ],
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          {
            loader: "thread-loader",
            options: {
              workerParallelJobs: 2,
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          // 生产环境下直接分离打包css
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: isProd
                  ? "[hash:base64]"
                  : "[path][name]__[local]",
              },
            },
          },
          "postcss-loader",
          "less-loader",
          {
            loader: "thread-loader",
            options: {
              workerParallelJobs: 2,
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        include: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
};
