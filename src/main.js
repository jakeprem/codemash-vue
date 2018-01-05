import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAnalytics from 'vue-analytics'

import * as firebase from 'firebase'

Vue.use(VueAnalytics, {
  id: 'UA-74836913-3',
  router
})

let firebaseConfig = {
  apiKey: 'AIzaSyBlhb03DowKu0XvQby3qd3eqL358wFxWT4',
  authDomain: 'codemash-vue.firebaseapp.com',
  databaseURL: 'https://codemash-vue.firebaseio.com',
  projectId: 'codemash-vue',
  storageBucket: 'codemash-vue.appspot.com',
  messagingSenderId: '794550805770'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        store.dispatch('autoSignin', firebaseUser.uid)
      }
    })
  }
})
