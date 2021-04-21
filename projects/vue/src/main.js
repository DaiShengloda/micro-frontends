import './public-path'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Store from './store/index'
import App from './App.vue'
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)

let router = null
let instance = null
let store = null

// 微应用挂载初始化
function render(props = {}) {
	const { container } = props

	router = new VueRouter({
		base: window.__POWERED_BY_QIANKUN__ ? '/lp/private/vue/' : '/',
		mode: 'history',
		routes,
	})
	
	store = initStore(props)

  	instance = new Vue({
		router,
		store,
    	render: h => h(App),
  	}).$mount(container ? container.querySelector('#app') : '#app')
}
/**
 * 初始化主微应用通信逻辑
 * 1.主应用状态变更同步到微应用；
 * 2.微应用状态变更同步到主应用；
 */
function initStore(props) {
    const myPlugin = store => {
		let prevState = _.cloneDeep(store.state)
		// 当 store 初始化后调用
		store.subscribe((mutation, state) => {
			// 每次 mutation 之后调用
			let nextState = _.cloneDeep(state)
			if(JSON.stringify(nextState) !== JSON.stringify(prevState)) {
				prevState = nextState
				// 微应用中store变更后，将状态更新到主应用
				props.setGlobalState &&
				props.setGlobalState({...state.store})
			}
		})
	}

	const storeInstance =  new Vuex.Store({
		...Store,
		plugins: [myPlugin]
	})

	// 主应用状态变化后，同步到微应用
	props.onGlobalStateChange &&
    props.onGlobalStateChange(
      	(state, prev) => {
			storeInstance.commit('initStore', state)
			console.log('vue-app onGlobalStateChange', state, prev)
		}, true
    )

	return storeInstance
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}

export async function bootstrap() {}

export async function mount(props) {
	render(props)
}

export async function unmount() {
	instance.$destroy()
	instance.$el.innerHTML = ''
	instance = null
	router = null
	store = null
}