import React from 'react'
import { Tabs } from 'antd-mobile'
// import { DemoBlock } from 'demos'
// import { AppstoreOutline } from 'antd-mobile-icons'

export default () => {
  return  <Tabs
  activeLineMode='fixed'
  style={{
    '--fixed-active-line-width': '20px',
  }}
>
  <Tabs.Tab title='超长的tab111' key='1'>
    1
  </Tabs.Tab>
  <Tabs.Tab title='超长的tab2' key='2'>
    2
  </Tabs.Tab>
  <Tabs.Tab title='超长的tab333' key='3'>
    3
  </Tabs.Tab>
  <Tabs.Tab title='超长的tab4444' key='4'>
    4
  </Tabs.Tab>
  <Tabs.Tab title='超长的tab55555' key='5'>
    5
  </Tabs.Tab>
</Tabs>
}