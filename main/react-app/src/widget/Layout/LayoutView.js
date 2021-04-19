import React, { Component } from 'react';
 // 路由对象
 import { withRouter } from 'react-router-dom';
 import { Layout } from 'antd';
 import { getRouter } from 'router';//webpack中启用了别名，对应路径是：src/router
 import SiderBar from 'widget/SiderBar/SiderBarView';
 import HeaderBar from 'widget/HeaderBar/HeaderBarView';
 import styles from './LayoutLess.less';
 const { Content } = Layout;
 
 @withRouter
 class LayoutView extends Component {
 
     constructor(props){
         super(props);
 
         this.state = {
             // false展开，true折叠
             collapsed: false
         }
     }
 
     componentDidMount() {
         this.props.history.listen((route) => {
             //cancel未完成的请求
             const { cancelRequest = new Map() } = window
             cancelRequest.forEach((value, key) => {
                 if (value.pathname !== window.location.hash) {
                     value.cancel('cancle request')
                     cancelRequest.delete(key)
                 }
             });
         })
     }
 
     // 菜单折叠、展开切换
     toggle(){
         this.setState({
             collapsed: !this.state.collapsed
         })
     }
 
     render() {
         const collapsed = this.state.collapsed;
         return (
             <Layout className={styles.layoutBack}>
                 <SiderBar collapsed={collapsed?1:0}/>
                 <Layout style={{'paddingLeft': collapsed?'80px':'220px',minHeight:'100vh'}}>
                     <HeaderBar collapsed={collapsed?1:0} toggle={e => this.toggle()}/>
                     <Content>
                         <div style={{height: 'calc(100% - 64px)'}} className={styles.routerCss} id="subapp-container">
                             {getRouter}
                         </div>
                     </Content>
                 </Layout>
             </Layout>
         )
     }
 }
 
 export default LayoutView;