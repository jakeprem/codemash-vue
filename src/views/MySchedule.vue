<template>
  <section class="section main">
    <div class="container">
      <div class="tabs is-medium is-centered">
        <ul>
          <li
            v-for="date in dates"
            :key="date"
            @click="selectDate(date)"
            :class="{'is-active': activeDate == date}"><a>{{formatDate(date)}}</a></li>
        </ul>
      </div>
      <div class="columns">
        <div class="column is-3">
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">
          <session-list :sessions="myScheduleByStartTime[activeDate]"></session-list>
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
      let dates = Object.keys(this.myScheduleByStartTime)

      if (!dates.includes(this.selectedDate)) {
        this.selectedDate = ''
      }
      return dates
    },
    activeDate () {
      return this.selectedDate || this.dates[0]
    }
  },
  methods: {
    selectDate (clickedDate) {
      this.selectedDate = clickedDate
    },
    formatDate (time) {
      // return moment(time).format('dddd MM/DD, h:mm A')
      return moment(time).format('dddd h:mm A')
    }
  }
}
</script>

<style>

</style>
