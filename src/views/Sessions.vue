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
          <tag-panel :tags="startTimes" />
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
        'tags',
        'selectedTags',
        'tagAny'
      ]),
      sessionsByDate () {
        return _.groupBy(this.filteredSessions, this.getDate)
      },
      dates () {
        let dates = Object.keys(this.sessionsByDate)

        if (!dates.includes(this.selectedDate)) {
          this.selectedDate = ''
        }
        return dates
      },
      activeDate () {
        return this.selectedDate || this.dates[0]
      },
      selectedSessions () {
        return this.sessionsByDate[this.activeDate]
      },
      filteredSessions () {
        var filteredSessionsData = []
        if (this.selectedTags.length > 0) {
          if (this.tagAny) {
            filteredSessionsData = this.sessions.filter((x) =>
              _.intersection(this.selectedTags, x.Tags).length > 0)
          } else {
            filteredSessionsData = this.sessions.filter((x) =>
              _.intersection(this.selectedTags, x.Tags).length === this.selectedTags.length)
          }
        } else {
          filteredSessionsData = this.sessions
        }
        return filteredSessionsData
      },
      startTimes () {
        let startTimes = this.sessions.map(x => this.formatTime(x.SessionStartTime))
        return _.uniq(startTimes)
      }
    },
    methods: {
      getDate (session) {
        return moment(session.SessionStartTime).format('ddd, MMM Do, YY')
      },
      formatTime (time) {
        return moment(time).format('h:mm A')
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
