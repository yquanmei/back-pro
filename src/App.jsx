/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-07
 * @FilePath: /cli-pro/src/App.jsx
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import React from 'react';
import { Routes,Route,Navigate, BrowserRouter } from "react-router-dom";
import routesConfig from "./routes";
// import Component from '@/pages/search'

const renderRouters = (routerItems) => {
  if (!routerItems?.length) return null;
  return routerItems.map((routeUnit) => {
    const {
      path,
      children,
      Component,
      redirect,
      exact = false, // 是否精准匹配，默认不精确
    } = routeUnit;
    const element =(
<Component />
    )
    
    return children && children.length ?(
      <Route path={path} key={path} element={element} exact={exact}>
        {renderRouters(children)}
        {
          redirect ? (
            <Route
              path={path}
              element={<Navigate to={redirect} exact={exact} replace />}
            />
          ):null
        }
      </Route>
    ) :(
                <Route path={path} key={path} element={element} exact={exact} />
            )
  });
};
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>{renderRouters(routesConfig)}</Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
