import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAnalytics from 'vue-analytics'

// import * as firebase from 'firebase'
// import 'firebase/firestore'
import {firebaseApp} from '@/firebaseInit'

Vue.use(VueAnalytics, {
  id: 'UA-74836913-3',
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    if (store.getters.sessions.length === 0) {
      store.dispatch('getSessions')
    }
    firebaseApp.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        store.dispatch('autoSignin', firebaseUser.uid)
        store.dispatch('getSchedule')
      }
    })
  }
})
