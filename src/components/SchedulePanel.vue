<template>
  <div class="panel">
    <p class="panel-heading">
      <router-link :to="{name: 'MySchedule'}">My Schedule</router-link>
    </p>
    <div v-for="(sessionsByTime, startTime) in myScheduleByStartTime" :key="startTime">
      <p class="panel-tabs">
        {{ formatTime(startTime) }}
      </p>
      <p class="panel-block" v-for="session in sessionsByTime" :key="session.Id" >
        {{ session.Title }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment/min/moment.min'

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'mySchedule',
      'myScheduleByStartTime'
    ])
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

