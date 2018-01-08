import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import sessions from './modules/sessions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  exampleState: false,
  user: null,
  error: null,
  loading: false
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: [
    sessions
  ],
  strict: debug
})
