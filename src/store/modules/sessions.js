import _ from 'lodash'
// import * as firebase from 'firebase'
// import 'firebase/firestore'

import * as types from '../mutation-types'

// import sessionData from '@/data/sessions'
// import sessionData from '@/data/kizmash_sessions'

var ajax = {
  getSessionsData () {
    let promise = new Promise((resolve, reject) => {
      var url = 'https://speakers.codemash.org/api/sessionsdata?type=json'
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject('Ajax failed')
        }
      }
      xhr.send()
    })

    return promise
  }
}

var ls = {
  set (key, value, ttl) {
    let data = {
      value,
      expiresAt: new Date().getTime() + ttl
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  get (key) {
    let rawData = localStorage.getItem(key)
    let data = JSON.parse(rawData)

    if (data !== null) {
      if (data.expiresAt !== null && data.expiresAt < new Date().getTime()) {
        localStorage.removeItem(key)
      } else {
        return data.value
      }
    }
    return null
  }
}

const state = {
  sessions: [],
  selectedTags: [],
  tagAny: true,
  mySchedule: []
}

const getters = {
  sessions: state => state.sessions,
  tags: state => {
    let tagsRaw = state.sessions.reduce(function (x, y) {
      return y.Tags.concat(x)
    }, [])
    return Array.from(new Set(tagsRaw))
  },
  mySchedule: state => state.mySchedule,
  mySessions: state => state.sessions.filter(x => state.mySchedule.includes(x.Id)),
  myScheduleByStartTime: state => {
    let mySessions = state.sessions.filter(x => state.mySchedule.includes(x.Id))

    mySessions.sort(function (x, y) {
      return new Date(x.SessionStartTime) - new Date(y.SessionStartTime)
    })

    return _.groupBy(mySessions, 'SessionStartTime')
  },
  selectedTags: state => state.selectedTags,
  tagAny: state => state.tagAny
}

const actions = {
  getSessions ({ commit }) {
    return new Promise((resolve) => {
      let cachedSessions = ls.get('sessions')

      if (cachedSessions != null) {
        commit(types.SET_SESSIONS, cachedSessions)
        resolve()
      } else {
        commit(types.SET_LOADING, true)

        ajax.getSessionsData().then((data) => {
          let sessionData = JSON.parse(data)
          commit(types.SET_SESSIONS, sessionData)
          ls.set('sessions', sessionData, 3600000)
          commit(types.SET_LOADING, false)
          resolve()
        })
      }
    })
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
  addToSchedule ({ commit }, sessionId) {
    // let db = firebase.firestore()
    // console.log(JSON.stringify(db))
    commit(types.ADD_TO_SCHEDULE, sessionId)
  },
  removeFromSchedule ({ commit }, sessionId) {
    commit(types.REMOVE_FROM_SCHEDULE, sessionId)
  },
  clearSchedule ({commit}) {
    commit(types.CLEAR_SCHEDULE)
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
  [types.ADD_TO_SCHEDULE] (state, sessionId) {
    state.mySchedule.push(sessionId)
  },
  [types.REMOVE_FROM_SCHEDULE] (state, sessionId) {
    let index = state.mySchedule.indexOf(sessionId)
    state.mySchedule.splice(index, 1)
  },
  [types.CLEAR_SCHEDULE] (state) {
    state.mySchedule = []
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
