import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { mainApp, MainApp } from './store/mainApp'
import { MainStoreModel } from './model/mainApp'

// 微应用挂载初始化
function render(props: any) {
    const { container } = props;
    ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

/**
 * 初始化主微应用通信逻辑
 * 1.主应用状态变更同步到微应用；
 * 2.微应用状态变更同步到主应用；
 */
function initStore(props: any) {
    // 将setGlobalState方法绑定到类MainApp静态属性上
    MainApp.setGlobalState = props.setGlobalState ? props.setGlobalState : null
    
    // 主应用状态变更同步到微应用
	props.onGlobalStateChange &&
    props.onGlobalStateChange(
        (state: MainStoreModel, prev: MainStoreModel) => {
            mainApp.initStore(state)
            console.log('react-app onGlobalStateChange', state, prev)
        }, true
    )
}

// 单独启动
if (!(window as any).__POWERED_BY_QIANKUN__) {
    render({});
}

// 修改、导出微应用钩子
export async function bootstrap() {}

export async function mount(props: any) {
    render(props)
    initStore(props)
}

export async function unmount(props: any) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
