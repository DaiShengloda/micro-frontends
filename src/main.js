import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

Vue.config.productionTip = false

Vue.use(ElementUI)

/**
 * step1 初始化应用
 */
new Vue({
    render: h => h(App),
}).$mount('#mainapp-container')

/**
 * step2 注册子应用
 */
registerMicroApps(
    [
		{
			name: 'vue-app',
			entry: '//localhost:8101',
			container: '#subapp-container',
			activeRule: '/vue3',
		},
		{
			name: 'react-app',
			entry: '//localhost:8102',
			container: '#subapp-container',
			activeRule: '/react17',
		},
	],
    {
		beforeMount: [
			app => {
			console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
			},
		],
		afterUnmount: [
			app => {
			console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
			},
		]
    }
)

/**
 * step3 设置默认进入子应用
 */
setDefaultMountApp('/vue3')

/**
 * step4 启动
 */
start()