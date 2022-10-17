/*
 * @Author: yquanmei
 * @Date: 2022-07
 * @LastEditors: yquanmei
 * @LastEditTime: 2022-09
 * @FilePath: /cli-pro/src/pages/search/index.tsx
 * @Description:
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// import React from "react";
import "./index.less";
// import { Button } from "antd";
import { Tabs } from "antd-mobile";
// import { DemoBlock } from "demos";
// import { AppstoreOutline } from "antd-mobile-icons";

export default () => {
  return (
    <Tabs
      activeLineMode="fixed"
      style={{
        "--fixed-active-line-width": "20px",
      }}
    >
      <Tabs.Tab title="超长的tab111" key="1">
        1
      </Tabs.Tab>
      <Tabs.Tab title="超长的tab2" key="2">
        2
      </Tabs.Tab>
      <Tabs.Tab title="超长的tab333" key="3">
        3
      </Tabs.Tab>
      <Tabs.Tab title="超长的tab4444" key="4">
        4
      </Tabs.Tab>
      <Tabs.Tab title="超长的tab55555" key="5">
        5
      </Tabs.Tab>
    </Tabs>
  );
};

// export default () => {
//   return <div>测试一下吧</div>;
// };

// export default () => {
//   return <Button type="primary">测试一下吧</Button>;
// };
