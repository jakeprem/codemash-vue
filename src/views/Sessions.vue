<template>
  <section class="section main">
    <div class="container">
      <div class="columns has-text-centered">
        <div class="column">
            <p class="title">
              <span class="icon is-medium">
                <i
                  @click="pageNumber--"
                  v-show="canPageBackward"
                  class="fa fa-chevron-left"
                  aria-hidden="true">
                </i>
              </span>              
              {{ this.pageDate }}
              <span class="icon is-medium">
                <i
                  @click="pageNumber++"
                  v-show="canPageForward"
                  class="fa fa-chevron-right"
                  aria-hidden="true">
                </i>
              </span>
            </p>
          
        </div>
        <div class="is-4"></div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">         
          <session-list :sessions="pagedSessions"></session-list>
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
      pageNumber: 0,
      pageSize: 10,
      pageDates: ''
    }
  },
  components: {
    SessionList,
    TagPanel,
    SchedulePanel
  },
  computed: {
    ...mapGetters([
      'filteredSessions',
      'tags'
    ]),
    pagedSessions () {
      // let pagedSessionData = this.filteredSessions.slice(this.pageNumber * this.pageSize, (this.pageNumber + 1) * this.pageSize)
      let groupedSessions = _.groupBy(this.filteredSessions, this.getDate)
      let pagedSessions = groupedSessions[Object.keys(groupedSessions)[this.pageNumber]]
      this.pageDates = Object.keys(groupedSessions)
      return _.groupBy(pagedSessions, 'SessionStartTime')
    },
    pageDate () {
      return this.pageDates[this.pageNumber]
    },
    canPageForward () {
      return this.pageNumber < (this.pageDates.length - 1)
    },
    canPageBackward () {
      return this.pageNumber > 0
    }
  },
  methods: {
    getDate (session) {
      return moment(session.SessionStartTime).format('ddd, MMM Do, YY')
    }
  },
  created () {
    this.$store.dispatch('getSessions')
  }
}
</script>

<style>

</style>
