import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'widget/App/AppView';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start, setDefaultMountApp, initGlobalState } from 'qiankun';
import { Provider } from 'mobx-react';
import * as stores from 'store/Stores';
import { ConfigProvider } from 'antd';

/**
 * step1 初始化应用
 */
ReactDOM.render(
  <ConfigProvider>
    <Provider {...stores}>
      <App/>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

/**
 * step2 注册微应用
 */
 registerMicroApps(
  [
    {
      name: 'vue-app',
      entry: '//localhost:8101',
      container: '#subapp-container',
      activeRule: ['/lp/private/vue'],
    },
    {
      name: 'react-app',
      entry: '//localhost:8102',
      container: '#subapp-container',
      activeRule: ['/lp/private/react17'],
    },
  ],
  {
    beforeMount: [],
    afterUnmount: []
  }
)

const { onGlobalStateChange } = initGlobalState({iptValue: ''})
onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main-app onGlobalStateChange', state, prev)
})  

/**
* step3 设置默认进入微应用
*/
// setDefaultMountApp('/private/vue')

/**
* step4 启动
*/
start()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
