<template>
  <div>
    <div v-for="(sessionsList, startTime) in sessionsByStartTime" :key="startTime">
      <h2 class="title">{{ formatTime(startTime) }}</h2>
      <session-item
      v-for="session in sessionsList"
      :key="session.id"
      :session="session"
      >
      </session-item>
    </div>
  </div>
</template>

<script>
import SessionItem from '@/components/SessionItem'

import moment from 'moment/min/moment.min'
import _ from 'lodash'

export default {
  name: 'SessionList',
  props: ['sessions'],
  components: {
    SessionItem
  },
  methods: {
    formatTime (time) {
      return moment(time).format('h:mm A')
    },
    getDate (session) {
      return moment(session.SessionStartTime).format('ddd, MMM Do, YY')
    }
  },
  computed: {
    sessionsByStartTime () {
      return _.groupBy(this.sessions, 'SessionStartTime')
    }
  }
}
</script>

<style>

</style>
