// mobx的公共方法
import {observable, action } from 'mobx';

class SiderBarStore {
    // 监视状态
    @observable state = {
        openKeys: [],
        current: '',
        // 菜单列表
        menuList: []
    };

    @action setStore = (e = {}) => {
        this.state = {
            ...this.state,
            ...e
        }
    }

}

const siderBarStore = new SiderBarStore();
export default siderBarStore;
export {SiderBarStore};
