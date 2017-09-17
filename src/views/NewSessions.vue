<template>
  <section class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">
          <div class="tabs">
            <ul>
              <li
                v-for="item in pageDates"
                :key="item"
                @click="pageDate = item"
                :class="{'is-active': pageDate == item}"><a>{{item}}</a></li>
            </ul>
          </div>
          <session-list :sessions="filteredSessions"></session-list>          
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

  // import _ from 'lodash'
  import moment from 'moment/min/moment.min'

  import SessionList from '@/components/SessionList'
  import TagPanel from '@/components/TagPanel'
  import SchedulePanel from '@/components/SchedulePanel'

  export default {
    data () {
      return {
        pageNumber: 0,
        pageSize: 10,
        pageDates: '',
        pageDate: ''
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
      ])
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
