<template>
  <div>
    <div v-for="(sessionsByTime, startTime) in sessionsByStartTime" :key="startTime">      
      <h2 class="title">{{ formatTime(startTime) }}</h2>
      <session-item
      v-for="session in sessionsByTime"
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
import _ from '@/utils'

export default {
  name: 'SessionList',
  props: ['sessions'],
  components: {
    SessionItem
  },
  computed: {
    sessionsByStartTime () {
      return _.groupBy(this.sessions, 'SessionStartTime')
    }
  },
  methods: {
    formatTime (time) {
      return moment(time).format('h:mm A')
    }
  }
}
</script>

<style>

</style>
