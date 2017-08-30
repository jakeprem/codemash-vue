import Vue from 'vue'
import Router from 'vue-router'
import Sessions from '@/views/Sessions'
import MySchedule from '@/views/MySchedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sessions',
      component: Sessions
    },
    // {
    //   path: '/sessions',
    //   name: 'Sessions',
    //   component: Sessions
    // },
    {
      path: '/myschedule',
      name: 'MySchedule',
      component: MySchedule
    }
  ]
})
