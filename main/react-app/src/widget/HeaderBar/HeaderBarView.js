/**
 * Created by xiaolv on 20/2/3.
 */
// 加载React
import React from 'react';
// 加载Component
import {Component} from 'react';
// 加载当前组件样式
import styles  from './HeaderBarLess.less';
// 路由对象
import {withRouter} from 'react-router-dom';
// 引入antd的组件
import {Menu, Icon, Dropdown, message, Modal} from 'antd';
// 样式管理工具方法，可以给标签动态添加多个className而不报错
import cx from 'classnames';

const {confirm} = Modal;


@withRouter
class HeaderBarView extends Component {

    // 构造函数
    constructor(props, context) {
        super(props, context);
    }

    // 执行退出
    async doLogout(){
        // 注销成功提示
        message.success('注销成功')
    }

    //注销
    showLogoutConfirm() {
        confirm({
            title: '确定要注销吗?',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                this.doLogout()
            },
            onCancel() {
            },
        });
    }

    // 下拉菜单点击事件
    handleClickMenu(e) {
        // 点击那一项
        switch ('' + e.key) {
            case 'PersonalInfo':
                break;
            case 'logout':
                this.showLogoutConfirm()
                break
            case 'forgetPassword':
                break
            default:
                console.log('unknown key')
        }
    }

    getDropDownMenu() {
        return (
            <Menu onClick={ e => this.handleClickMenu(e) }>
                {/* <Menu.Item key="PersonalInfo">个人资料</Menu.Item> */}
                <Menu.Item key="forgetPassword">
                    <a>修改密码</a>
                </Menu.Item>
                <Menu.Item key="logout">
                    <a>注销</a>
                </Menu.Item>
            </Menu>
        )
    }

    renderUserInfo() {
        return (
            <div className={styles.user}>
                <Dropdown
                    getPopupContainer={() => document.getElementById('routerApp_headRight')}
                    overlay={ this.getDropDownMenu() }
                    trigger={['hover']}>
                    <a className="ant-dropdown-link" href="#" style={{display: 'inline-block'}}>
                        <img src={`/assets/imgs/avatar.png`}/>
                        <span style={{width: 120}}>{'超级管理者'}</span>
                    </a>
                </Dropdown>
            </div>
        )
    }

    // 渲染内容
    render() {
        const {collapsed} = this.props;

        return (
            <div>
                {/*整个头部视图的根节点*/}
                <div className={styles.tophead} style={collapsed ? {paddingLeft: '80px'} : {}}>
                    {/* 头部左侧图标 */}
                    <span className={styles.collapsed}>
                        <Icon 
                            className='trigger' 
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={(e) => this.props.toggle(e)}
                        />
                    </span>
                    {/*头部右侧视图*/}
                    <div className={styles.headRight} id="routerApp_headRight">
                        <div className={cx(styles.table, styles.right)}>
                            <div className={styles.row}>
                                <div className={styles.cell}>良品心选运营后台系统</div>
                                <div className={cx(styles.cell, styles.padLeft)}>{ this.renderUserInfo() }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HeaderBarView