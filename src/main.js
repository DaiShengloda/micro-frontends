import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start, setDefaultMountApp, initGlobalState } from 'qiankun'

Vue.config.productionTip = false

Vue.use(ElementUI)

/**
 * step1 初始化应用
 */
new Vue({
    render: h => h(App),
}).$mount('#mainapp-container')

/**
 * step2 注册微应用
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
setDefaultMountApp('/vue3')

/**
 * step4 启动
 */
start()