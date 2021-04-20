// mobx的公共方法
import React from 'react'
import { observable } from 'mobx';
import {PictureOutlined, HomeOutlined} from '@ant-design/icons';

class AppStore {
  // 监视状态
  @observable state = { 
    menuList: [
      {
        icon: () => {
          return <HomeOutlined />
        },
        key: "1261285814095218691",
        name: "首页",
        parentId: "1261115795835095166",
        sortNo: 1,
        url: "/private/home",
      },
      {
        icon: () => {
          return <PictureOutlined />
        },
        key: "1261285860548184147",
        name: "react应用",
        parentId: "1261115795835095166",
        sortNo: 2,
        url: "/private/react17",
        children: [
          {
            icon: "",
            key: "1261933093283072063",
            name: "系统设置",
            parentId: "1261285860548184147",
            sortNo: 1,
            url: "/private/react17/setting/index",
          },
          {
            icon: "",
            key: "1261933114195871763",
            name: "素材转化分析",
            parentId: "1261285860548184147",
            sortNo: 2,
            url: "/statistics/sourceMaterial/index",
          }
        ]
      }
    ],
  }
}

const appStore = new AppStore();
export default appStore;
export { AppStore };
