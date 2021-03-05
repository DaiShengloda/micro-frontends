import { observable, computed, action, reaction } from 'mobx'
import _ from 'lodash'
import { MainStoreModel } from '../model/mainApp'

class MainApp {
	static setGlobalState: Function

	@observable preStore: MainStoreModel = {iptValue: ''}
	@observable store: MainStoreModel = {iptValue: ''}

	constructor() {}

	@computed get iptValue() {
		return this.store.iptValue
	}

	@action
	initStore(data: MainStoreModel) {
		this.store = data
	}

	@action
	setStore(data: any) {
		const prev = _.cloneDeep(this.store)
		this.store = {
			...prev,
			...data
		}
	}

	appReaction = reaction(
		() => this.store,
		store => {
			const nextState = _.cloneDeep(store)
			const prevState = _.cloneDeep(this.preStore)

			if(JSON.stringify(nextState) !== JSON.stringify(prevState)) {
				MainApp.setGlobalState&&MainApp.setGlobalState(nextState)
				this.preStore = nextState
			}
		}
	)
}

const mainApp = new MainApp()
 
export { 
	mainApp, 
	MainApp 
}