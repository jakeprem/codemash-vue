import Vue from 'vue'
import Vuex from 'vuex'

import sessions from '@/data/sessions'

Vue.use(Vuex)

const state = {
  sessions
}

export default new Vuex.Store({
  state
})
