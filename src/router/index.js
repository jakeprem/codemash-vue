import Vue from 'vue'
import Router from 'vue-router'
import Sessions from '@/views/Sessions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sessions(Home)',
      component: Sessions
    },
    {
      path: '/sessions',
      name: 'Sessions',
      component: Sessions
    }
  ]
})
