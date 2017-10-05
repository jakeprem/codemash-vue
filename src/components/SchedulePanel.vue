<template>
  <div class="panel">
    <p class="panel-heading">
      <router-link :to="{name: 'MySchedule'}">My Schedule</router-link>
    </p>
    <div v-for="(sessionsByTime, startTime) in mySessionsByStartTime" :key="startTime">
      <p class="panel-tabs">
        <strong>{{ formatTime(startTime) }}</strong>
      </p>
      <p class="panel-block" v-for="session in sessionsByTime" :key="session.Id" >
        {{ session.Title }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment/min/moment.min'
import _ from 'lodash'

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'mySchedule',
      'myScheduleByStartTime',
      'sessions'
    ]),
    mySessions () {
      return this.sessions.filter(x => this.mySchedule.includes(x.Id))
    },
    mySessionsByStartTime () {
      return _.groupBy(this.mySessions, 'SessionStartTime')
    }
  },
  methods: {
    ...mapActions([
    ]),
    formatTime (time) {
      return moment(time).format('ddd, M/D h:mm A')
    }
  }
}
</script>

