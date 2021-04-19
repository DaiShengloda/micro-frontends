import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter, NavLink} from 'react-router-dom';
import { filter } from 'lodash';
import {Layout, Menu, Icon} from 'antd';
import styles from './SiderBarLess.less';

const {Sider} = Layout;
const {SubMenu} = Menu;


// 存储整棵菜单树的数据
let storeMenuList = [];
// 存放一级菜单的key值
let rootSubmenuKeys = [];
//存放所有层级菜单的键值对，url -> item
let menuMap = {}

// 递归渲染菜单项
const renderMenuItem = (menuArray) => {
  // 遍历菜单列表
  return menuArray.map(item => {
    const iconStyle = ()=>{
      if(!item.icon){
        return null
      }
      return item.icon.indexOf('icon')>-1 ? <i className={`iconfont ${item.icon}`} /> : <Icon type={item.icon} />
    }
    if (item.children) {
      return (
        <SubMenu key={item.key} title={<span>{iconStyle()}<span>{item.name}</span></span>}>
          {renderMenuItem(item.children)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key}>
        <NavLink to={item.url ? item.url : '#'}>
          {iconStyle()}
          <span>{item.name}</span>
        </NavLink>
      </Menu.Item>
    )
  })
}

const treeToMap = (tree, map = {}, parent) => {
  tree.map(item => {
    if (item.children) {
      item.parent = parent
      treeToMap(item.children, map, item)
    } else {
      item.parent = parent
      if (item.url) {
        if (item.url.startsWith('/')) {
          map[item.url] = item
        } else {
          map['/' + item.url] = item
        }
      }
    }
  })
}

@withRouter
class SiderBarView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <BarView {...this.props} pathname={this.props.location.pathname}/>
      </div>
    )
  }
}

@inject('AppStore')
@inject('SiderBarStore')
@observer
class BarView extends Component {
  constructor(props) {
    super(props);
    this.stores = this.props.AppStore;
    this.siderBarStore = this.props.SiderBarStore
  }

  componentDidMount() {
    this.getMenuList();
  }

  /**
   * 菜单点击处理
   * @param  {Object} e 事件源对象
   * @return {empty}   无
   */
  handleClick = (e) => {
      this.siderBarStore.setStore({
          current: e.key
      })
  };

  handleOpen = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.siderBarStore.state.openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      //二级菜单也只能打开一个
      let arr = filter(openKeys, item => rootSubmenuKeys.indexOf(item) > -1);
      if(latestOpenKey) {
        arr.push(latestOpenKey);
      }
      this.siderBarStore.setStore({ openKeys: arr });
    } else {
        this.siderBarStore.setStore({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  // 设置一级菜单目录的keys
  setRootKeys() {
    if (0 === this.siderBarStore.state.menuList.length) {
      return false;
    }
    this.siderBarStore.state.menuList.map((m, i) => {
      rootSubmenuKeys.push(m.key);
    })
  }

  // 查询菜单
  async getMenuList() {
    let self = this;
    let menuList = this.stores.state.menuList

    // 设置一级菜单的keys
    treeToMap(menuList, menuMap)
    let currentMenu = menuMap[this.props.pathname]|| {}
    let current = currentMenu.key
    let openKeys = []
    while (currentMenu.parent) {
      openKeys.push(currentMenu.parent.key)
      currentMenu = currentMenu.parent
    }
    self.siderBarStore.setStore({
        menuList, current, openKeys
    })
    self.setState({
      menuMap,
    }, () => {
      self.setRootKeys();
      storeMenuList = menuList;
    })
  }

  // 对菜单进行搜索筛选
  filterMenu = (value) => {
    let filterArr = storeMenuList.filter(item => {
      let str = JSON.stringify(item);
      if (str.indexOf(value) >= 0) {
        return true
      } else {
        return false
      }
    })
      this.siderBarStore.setStore({
          menuList: filterArr
      })
  }

  render() {
    const {current,openKeys} = this.siderBarStore.state;
    const {collapsed} = this.props
    let openProps = collapsed ? {} : {
      openKeys: openKeys,
      onOpenChange: this.handleOpen
    };
    // inlineIndent 菜单层级左侧空格大小，单位为px，空格量=左侧空格大小*层级level
    return (
      <Sider
        className={styles.sider}
        trigger={null}
        collapsible
        theme='light'
        collapsed={collapsed}
        width={220}
      >
        <div className={styles.logo}>
          <img src={collapsed ? `/assets/imgs/logo_col.png` : `/assets/imgs/logo.png`} alt="logo" />
        </div>
        <div className={styles.menuWrap}>
          <div className={styles.menuCont}>
            {/*自定义滚动条组件*/}
            {/* <Scrollbars
              ref={(e) => { this.scrollbar = e }}
              renderTrackVertical={props => <div {...props} className={styles.trackVertical} />}
              renderThumbVertical={props => <div {...props} className={styles.thumbVertical} />}
            > */}
              {/* 左侧菜单列表 */}
              <Menu
                mode="inline"
                onClick={this.handleClick}
                selectedKeys={[current]}
                inlineIndent={24}
                collapsed={collapsed}
                {...openProps}
              >
                {0 !== this.siderBarStore.state.menuList.length && renderMenuItem(this.siderBarStore.state.menuList)}
              </Menu>
            {/* </Scrollbars> */}

          </div>
        </div>
      </Sider>
    )
  }
}

export default SiderBarView;
