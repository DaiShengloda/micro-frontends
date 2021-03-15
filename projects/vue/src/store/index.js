const state = {
    store: {}
}

const getters = {
    iptValue: state => state.store.iptValue
}

const mutations = {
    initStore(state, data) {
        state.store = data
    },
    setStore(state, data) {
        state.store = {
            ...state.store,
            ...data
        }
    }
}

const actions = {}

export default {
    actions,
	getters,
	state,
	mutations,
	modules: {},
	strict: false,
	plugins: [],
}
