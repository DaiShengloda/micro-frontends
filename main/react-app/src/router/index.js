import React from 'react';
import { Route } from 'react-router';
import {createBundle} from 'widget/Common';

// // 页面找不到组件
// import NotFound from 'bundle-loader?lazy&name=NotFoundView!widget/NotFound/NotFoundView';
// // 默认首页
// import Home from 'bundle-loader?lazy&name=homeView!pages/Home/HomeView';
// // 设置页面
// import Setting from 'bundle-loader?lazy&name=settingView!pages/Setting/SettingView';
// 默认首页
import Home from 'pages/Home/HomeView';

const routerList = [
    {path: '/private/home', type: 'main', component: () =>  Home},
    // {path: '/private/react17/goods/list/index', type: 'micro'},
    // {path: '/private/vue/guide/customer/list', type: 'micro'},
]

const getRouter = () => {
    return (
        <>
            {
                routerList.map((route, idx) => {
                    if (route.type === 'main') {
                        return <Route key={'route_' + idx} path={route.path} component={route.component()} />
                    } else {
                        return <Route key={'route_' + idx} path={route.path} />
                    }
                })
            }
        </>
    )
}

export {getRouter}
