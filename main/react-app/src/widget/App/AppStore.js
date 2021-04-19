// mobx的公共方法
import { observable } from 'mobx';
class AppStore {
  // 监视状态
  @observable state = { 
    menuList: [
      {
        icon: "home",
        key: "1261285814095218691",
        name: "首页",
        parentId: "1261115795835095166",
        sortNo: 1,
        url: "/",
      },
      {
        icon: "bar-chart",
        key: "1261285860548184147",
        name: "数据统计",
        parentId: "1261115795835095166",
        sortNo: 2,
        url: "/statistics",
        children: [
          {
            icon: "",
            key: "1261933093283072063",
            name: "导购业绩统计",
            parentId: "1261285860548184147",
            sortNo: 1,
            url: "/statistics/shopAchievement/index",
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
