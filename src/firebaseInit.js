import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBlhb03DowKu0XvQby3qd3eqL358wFxWT4',
  authDomain: 'codemash-vue.firebaseapp.com',
  databaseURL: 'https://codemash-vue.firebaseio.com',
  projectId: 'codemash-vue',
  storageBucket: 'codemash-vue.appspot.com',
  messagingSenderId: '794550805770'
}

export const firebaseApp = firebase.initializeApp(config)

export const firebaseDb = firebaseApp.firestore()
