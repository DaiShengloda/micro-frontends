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

    // 打开并切换到某个子菜单 
    @action changeOpenCurrent(path){
        const {menuList} = this.state
        let childMenu;
        for(let i=0; i<menuList.length;i++){
            if(!menuList[i].children){
                continue;
            }
            childMenu = menuList[i].children.find(item=> item.url === path)
            if(childMenu){
                break;
            }
        }
        if(childMenu){
            this.state.openKeys = [childMenu.parentId]
            this.state.current = childMenu.key
        }
    }

}

const siderBarStore = new SiderBarStore();
export default siderBarStore;
export {SiderBarStore};
