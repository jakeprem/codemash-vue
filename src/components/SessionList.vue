<template>
  <div>
    <h1 v-if="sessions.length == 0">No sessions to show</h1>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
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
  </div>
</template>

<script>
import SessionItem from '@/components/SessionItem'

import moment from 'moment/min/moment.min'
import _ from 'lodash'

import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'SessionList',
  directives: {infiniteScroll},
  props: ['sessions'],
  components: {
    SessionItem
  },
  data () {
    return {
      stepSize: 10,
      pageSize: 10
    }
  },
  methods: {
    formatTime (time) {
      return moment(time).format('h:mm A')
    },
    getDate (session) {
      return moment(session.SessionStartTime).format('ddd, MMM Do, YY')
    },
    loadMore () {
      this.pageSize += this.stepSize
    }
  },
  computed: {
    visibleSessions () {
      return this.sessions.slice(0, this.pageSize)
    },
    sessionsByStartTime () {
      return _.groupBy(this.visibleSessions, 'SessionStartTime')
    }
  },
  watch: {
    sessions () {
      this.pageSize = this.stepSize
    }
  }
}
</script>

<style>

</style>
