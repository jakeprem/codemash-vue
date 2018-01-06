import * as firebase from 'firebase'
import {firebaseApp} from '@/firebaseInit'

import * as types from './mutation-types'

export default {
  loginUser ({commit}, payload) {
    commit(types.SET_LOADING, true)

    let provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({prompt: 'select_account'})
    firebaseApp.auth().signInWithPopup(provider)
      .then(result => {
        let user = result.user

        commit(types.SET_USER, user.uid)
        commit(types.SET_LOADING, false)
      })
      .catch(error => {
        let errorMessage = error.message

        commit(types.SET_ERROR, errorMessage)
        commit(types.SET_LOADING, false)
      })
  },
  logoutUser ({commit}) {
    firebaseApp.auth().signOut()
    commit(types.SET_USER, null)
    commit(types.CLEAR_SCHEDULE)
  },
  autoSignin ({commit}, payload) {
    commit(types.SET_USER, payload)
  }
}
