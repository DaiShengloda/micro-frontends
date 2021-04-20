import React from 'react';
import { Route } from 'react-router';
import {createBundle} from 'widget/Common';

// // 页面找不到组件
// import NotFound from 'bundle-loader?lazy&name=NotFoundView!widget/NotFound/NotFoundView';
// // 默认首页
// import Home from 'bundle-loader?lazy&name=homeView!pages/Home/HomeView';
// // 设置页面
// import Setting from 'bundle-loader?lazy&name=settingView!pages/Setting/SettingView';

// 页面找不到组件
import NotFound from 'widget/NotFound/NotFoundView';
// 默认首页
import Home from 'pages/Home/HomeView';
// 设置页面
import Setting from 'pages/Setting/SettingView';

const routerList = [
    {
        path: '/private/home',
        // // 直接渲染内容，用render
        // render: () => {
        //   return <h3>默认首页</h3>
        // }
        // 懒加载组件，用component，且组件使用createBundle包裹
        component: () => {
            return Home
        }
    },
    {path: '/private/react17/setting/index',component: () => { return Setting }},
]

const getRouter = () => {
    return (
        <>
            {
                routerList.map((route, idx) => {
                    if (route.render) {//直接渲染内容
                        return <Route key={'route_' + idx} path={route.path} exact component={route.render}/>
                    } else {//懒加载组件
                        return <Route key={'route_' + idx} path={route.path} component={route.component()}/>
                    }
                })
            }
            <Route component={NotFound}/>
        </>
    )
}

export {getRouter}
