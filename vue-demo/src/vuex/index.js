import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const logger = debug && createLogger({collapsed: false})

const store = new Vuex.Store({
	state: {

	},
	actions,
	getters,
	mutations,
	modules: {
	},
	strict: debug,
	plugins: debug ? [logger] : []
})

export default store
