/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /cli-pro/src/routes/index.js
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from "react";
import Search from "@/pages/search";
const routesConfig = [
  {
    path: "/",
    name: "首页",
    exact: true,
    Component: () => <Search />,
  },
];

export default routesConfig;
