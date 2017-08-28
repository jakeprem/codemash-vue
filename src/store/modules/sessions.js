import _ from 'lodash'

import * as types from '../mutation-types'

import sessionData from '@/data/sessions'

const state = {
  sessions: []
}

const getters = {
  sessions: state => state.sessions,
  sessionsByStartTime: state => _.groupBy(state.sessions, 'SessionStartTime'),
  tags: state => {
    let tagsRaw = state.sessions.reduce(function (x, y) {
      return y.Tags.concat(x)
    }, [])
    return Array.from(new Set(tagsRaw))
  }
}

const actions = {
  // getPosts ({ commit }, limit = 5) {
  //   return httpGet(`${apiURL}/sessions?page_size=${limit}`)
  //     .then(({ sessions, pagination }) => {
  //       commit(types.SET_SESSIONS, sessions)
  //       commit(types.EXAMPLE_CONST, {...pagination, increment: 5})
  //     })
  // }
  getSessions ({ commit }) {
    commit(types.SET_SESSIONS, sessionData)
  }
}

const mutations = {
  [types.SET_SESSIONS] (state, sessions) {
    state.sessions = sessions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
