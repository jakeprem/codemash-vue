import _ from 'lodash'

import * as types from '../mutation-types'

import sessionData from '@/data/sessions'

const state = {
  sessions: [],
  selectedTags: []
}

const getters = {
  sessions: state => state.sessions,
  sessionsByStartTime: state => _.groupBy(state.sessions, 'SessionStartTime'),
  tags: state => {
    let tagsRaw = state.sessions.reduce(function (x, y) {
      return y.Tags.concat(x)
    }, [])
    return Array.from(new Set(tagsRaw))
  },
  selectedTags: state => state.selectedTags
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
  },
  selectTag ({ commit }, selectedTag) {
    commit(types.SELECT_TAG, selectedTag)
  },
  unselectTag ({ commit }, unselectedTag) {
    commit(types.UNSELECT_TAG, unselectedTag)
  },
  clearSelectedTags ({ commit }) {
    commit(types.CLEAR_SELECTED_TAGS)
  }
}

const mutations = {
  [types.SET_SESSIONS] (state, sessions) {
    state.sessions = sessions
  },
  [types.SELECT_TAG] (state, selectedTag) {
    state.selectedTags.push(selectedTag)
  },
  [types.UNSELECT_TAG] (state, unselectedTag) {
    var tagIndex = state.selectedTags.indexOf(unselectedTag)
    if (tagIndex !== -1) {
      state.selectedTags.splice(tagIndex, 1)
    }
  },
  [types.CLEAR_SELECTED_TAGS] (state) {
    state.selectedTags = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
