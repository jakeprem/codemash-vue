<template>
  <section class="section main">
    <div class="container">
      <div class="tabs is-medium is-centered">
        <ul>
          <li
            v-for="date in dates"
            :key="date"
            @click="selectDate(date)"
            :class="{'is-active': activeDate == date}"><a>{{date}}</a></li>
        </ul>
      </div>
      <div class="columns">
        <div class="column is-3">
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">
          <session-list :sessions="sessionsByDate[activeDate]"></session-list>
        </div>
        <div class="column is-3">
          <!-- <tag-panel :tags="tags"></tag-panel> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import SessionList from '@/components/SessionList'
import TagPanel from '@/components/TagPanel'
import SchedulePanel from '@/components/SchedulePanel'

import moment from 'moment/min/moment.min'
import _ from 'lodash'

export default {
  data () {
    return {
      selectedDate: ''
    }
  },
  components: {
    SessionList,
    TagPanel,
    SchedulePanel
  },
  computed: {
    ...mapGetters([
      'mySessions',
      'myScheduleByStartTime',
      'tags'
    ]),
    dates () {
      let allDates = Object.keys(this.myScheduleByStartTime)
      let formattedDates = allDates.map(x => {
        return this.formatDate(x)
      })
      let dates = Array.from(new Set(formattedDates))
      // let dates = Object.keys(this.myScheduleByStartTime)

      if (!dates.includes(this.selectedDate)) {
        this.selectedDate = ''
      }
      return dates
    },
    activeDate () {
      return this.selectedDate || this.dates[0]
    },
    sessionsByDate () {
      console.log(this.mySessions)
      console.log(_.groupBy(this.mySessions, this.getDate))
      return _.groupBy(this.mySessions, this.getDate)
    }
  },
  methods: {
    selectDate (clickedDate) {
      this.selectedDate = clickedDate
    },
    formatDate (sessionStartTime) {
      return moment(sessionStartTime).format('ddd, MMM Do, YY')
    },
    getDate (session) {
      return moment(session.SessionStartTime).format('ddd, MMM Do, YY')
    }
  }
}
</script>

<style>

</style>
