// mobx的公共方法
import React from 'react'
import { observable } from 'mobx';
import {PictureOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';

class AppStore {
  // 监视状态
  @observable state = { 
    menuList: [
      {
        icon: () => <HomeOutlined />,
        name: "首页",
        url: "/private/home",
        key: '1'
      },
      {
        icon: () => <PictureOutlined />,
        name: "商品",
        url: "/private/react17/goods",
        key: '2',
        children: [
          {
            icon: "",
            name: "商品列表",
            url: "/private/react17/goods/list/index",
            key: '2-1',
          },
          {
            icon: "",
            name: "商品标签",
            url: "/private/react17/goods/label/index",
            key: '2-2',
          },
        ]
      },
      {
        icon: () => <UserOutlined />,
        name: "导购管理",
        url: "/private/vue/guide",
        key: '3',
        children: [
          {
            icon: "",
            name: "会员列表",
            url: "/private/vue/guide/customer/list",
            key: '3-1',
          },
          {
            icon: "",
            name: "粉丝列表",
            url: "/private/vue/guide/fan/list",
            key: '3-2',
          },
        ]
      }
    ]
  }
}

const appStore = new AppStore();
export default appStore;
export { AppStore };
