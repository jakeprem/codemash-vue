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
          <session-list :sessions="selectedSessions"></session-list>
        </div>
        <div class="column is-3">
          <tag-panel :tags="tags"></tag-panel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  import _ from 'lodash'
  import moment from 'moment/min/moment.min'

  import SessionList from '@/components/SessionList'
  import TagPanel from '@/components/TagPanel'
  import SchedulePanel from '@/components/SchedulePanel'

  export default {
    data () {
      return {
        page: 0,
        pageSize: 10,
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
        'sessions',
        'tags'
      ]),
      sessionsByDate () {
        return _.groupBy(this.sessions, this.getDate)
      },
      dates () {
        return Object.keys(this.sessionsByDate)
      },
      activeDate () {
        return this.selectedDate || this.dates[0]
      },
      selectedSessions () {
        return this.sessionsByDate[this.activeDate]
      }
    },
    methods: {
      getDate (session) {
        return moment(session.SessionStartTime).format('ddd, MMM Do, YY')
      },
      selectDate (clickedDate) {
        this.selectedDate = clickedDate
        this.page = 0
      }
    },
    created () {
      this.$store.dispatch('getSessions')
    }
  }
</script>

<style>

</style>
