import _ from 'lodash'

import * as types from '../mutation-types'

import sessionData from '@/data/sessions'

const state = {
  sessions: [],
  selectedTags: [],
  tagAny: true,
  mySchedule: []
}

const getters = {
  sessions: state => state.sessions,
  filteredSessions (state) {
    var filteredSessionsData = []
    if (state.selectedTags.length > 0) {
      if (state.tagAny) {
        filteredSessionsData = state.sessions.filter((x) =>
          _.intersection(state.selectedTags, x.Tags).length > 0)
      } else {
        filteredSessionsData = state.sessions.filter((x) =>
          _.intersection(state.selectedTags, x.Tags).length === state.selectedTags.length)
      }
    } else {
      filteredSessionsData = state.sessions
    }
    return filteredSessionsData
  },
  tags: state => {
    let tagsRaw = state.sessions.reduce(function (x, y) {
      return y.Tags.concat(x)
    }, [])
    return Array.from(new Set(tagsRaw))
  },
  mySchedule: state => state.mySchedule,
  myScheduleByStartTime: state => _.groupBy(state.mySchedule, 'SessionStartTime'),
  selectedTags: state => state.selectedTags,
  tagAny: state => state.tagAny
}

const actions = {
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
  },
  addToSchedule ({ commit }, session) {
    commit(types.ADD_TO_SCHEDULE, session)
  },
  removeFromSchedule ({ commit }, session) {
    commit(types.REMOVE_FROM_SCHEDULE, session)
  },
  setTagAnyFalse ({ commit }) {
    commit(types.SET_TAG_ANY_FALSE)
  },
  setTagAnyTrue ({ commit }) {
    commit(types.SET_TAG_ANY_TRUE)
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
  },
  [types.ADD_TO_SCHEDULE] (state, session) {
    state.mySchedule.push(session)
    state.mySchedule.sort(function (x, y) {
      return new Date(x.SessionStartTime) - new Date(y.SessionStartTime)
    })
  },
  [types.REMOVE_FROM_SCHEDULE] (state, session) {
    let index = state.mySchedule.map((x) => x.Id).indexOf(session.Id)
    state.mySchedule.splice(index, 1)
  },
  [types.SET_TAG_ANY_FALSE] (state) {
    state.tagAny = false
  },
  [types.SET_TAG_ANY_TRUE] (state) {
    state.tagAny = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
