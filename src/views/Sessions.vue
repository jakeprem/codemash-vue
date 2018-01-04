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
          <!-- This should be removed once persistence is added -JBP 10/4/17 -->
          Persistence should be added soon. (Posted 1/4/2018)
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">
          <session-list :sessions="selectedSessions"></session-list>
        </div>
        <div class="column is-3">
          <div class="panel">
            <!-- <input type="text" class="input" placeholder="Search" v-model="search"> -->
            Search is currently disabled on this page.
          </div>
          <tag-panel :tags="tags"></tag-panel>
          <!-- <tag-panel :tags="startTimes" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  import _ from 'lodash'
  import moment from 'moment/min/moment.min'
  // import Fuse from 'fuse.js'

  import SessionList from '@/components/SessionList'
  import TagPanel from '@/components/TagPanel'
  import SchedulePanel from '@/components/SchedulePanel'

  export default {
    data () {
      return {
        page: 0,
        pageSize: 10,
        selectedDate: '',
        search: ''
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
        // TODO Renable search: Search needs to be run against each individual day so that sorting by search relevance will still
        // work correctly.
        // let options = {
        //   shouldSort: true,
        //   threshold: 0.6,
        //   location: 0,
        //   distance: 100,
        //   maxPatternLength: 32,
        //   minMatchCharLength: 1,
        //   keys: [
        //     'Title',
        //     'Abstract',
        //     'Category',
        //     'Tags',
        //     'SessionType'
        //   ]
        // }
        // var fuse = new Fuse(this.sessions, options)
        // var results = fuse.search(this.search)
        // if (this.search === '') {
        //   results = this.sessions
        // }
        var results = this.sessions

        var filteredSessionsData = []
        if (this.selectedTags.length > 0) {
          if (this.tagAny) {
            filteredSessionsData = results.filter((x) =>
              _.intersection(this.selectedTags, x.Tags).length > 0)
          } else {
            filteredSessionsData = results.filter((x) =>
              _.intersection(this.selectedTags, x.Tags).length === this.selectedTags.length)
          }
        } else {
          filteredSessionsData = results
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
      if (this.sessions.length === 0) {
        this.$store.dispatch('getSessions')
      }
    }
  }
</script>

<style>

</style>
