<template>
  <section class="section main">
    <div class="container">
      
      <div class="columns">
        <div class="column is-9">
          <div class="panel">
            <input type="text" class="input" placeholder="Search" v-model="search">
          </div>
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <table class="table is-bordered is-striped">
              <thead>
                <tr>
                  <th>+</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Title</th>
                  <th>Speaker</th>
                  <th>Session Type</th>
                  <th>Category</th>
                  <th>Room</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="session in visibleSessions">
                  <tr @click="toggleTab(session.Id)">
                    <td>
                      <span class="icon">
                        <i class="fa" :class="{'fa-star': isFilled(session), 'fa-star-o': !isFilled(session)}"
                          @click.stop='toggleInSchedule(session)'
                        >
                        </i>
                      </span>
                    </td>
                    <td>{{formatDate(session.SessionStartTime)}}
                    <td>{{formatTime(session.SessionStartTime)}}</td>
                    <td><strong>{{session.Title}}</strong></td>
                    <td>{{speakersDisplayNames(session.Speakers)}}</td>
                    <th>{{session.SessionType}}</th>
                    <td>{{session.Category}}</td>
                    <td>{{session.Rooms.join(', ')}}</td>
                    <td><tag-list :tags="session.Tags"></tag-list></td>
                  </tr>
                  <tr v-show="expandedTab == session.Id">
                    <td :colspan="colspan">{{session.Abstract}}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
        <div class="column is-3">
          <tag-panel :tags="tags" :hidden="true"></tag-panel>
          <schedule-panel></schedule-panel>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TagList from '@/components/TagList'
import TagPanel from '@/components/TagPanel'
import SchedulePanel from '@/components/SchedulePanel'

import _ from 'lodash'
import Fuse from 'fuse.js'
import moment from 'moment/min/moment.min'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'SessionsTable',
  directives: {infiniteScroll},
  data () {
    return {
      page: 0,
      pageSize: 25,
      stepSize: 25,
      expandedTab: '',
      search: '',
      colspan: 9
    }
  },
  computed: {
    ...mapGetters([
      'sessions',
      'mySchedule',
      'tags',
      'selectedTags',
      'tagAny'
    ]),
    filteredSessions () {
      let options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          'Title',
          'Abstract',
          'Category',
          'Tags',
          'SessionType'
        ]
      }
      var fuse = new Fuse(this.sessions, options)

      var results = this.search ? fuse.search(this.search) : this.sessions

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
    visibleSessions () {
      if (this.filteredSessions && this.filteredSessions.length) {
        return this.filteredSessions.slice(0, this.pageSize)
      } else {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'addToSchedule',
      'removeFromSchedule'
    ]),
    speakersDisplayNames (speakers) {
      let speakersNames = speakers.map(function (speaker) {
        return `${speaker.FirstName || ''} ${speaker.LastName}`
      })
      return speakersNames.join(', ')
    },
    toggleInSchedule (session) {
      if (!this.mySchedule.includes(session.Id)) {
        this.addToSchedule(session.Id)
      } else {
        this.removeFromSchedule(session.Id)
      }
    },
    isFilled (session) {
      return this.mySchedule.filter((x) => x === session.Id).length > 0
    },
    toggleTab (id) {
      this.expandedTab = this.expandedTab === id ? '' : id
    },
    loadMore () {
      this.pageSize += this.stepSize
    },
    formatTime (time) {
      return moment(time).format('h:mm A')
    },
    formatDate (date) {
      return moment(date).format('ddd, MMM Do')
    }
  },
  components: {
    TagList,
    TagPanel,
    SchedulePanel
  },
  created () {
    if (this.sessions.length === 0) {
      this.$store.dispatch('getSessions')
    }
  }
}
</script>

<style scoped>
  tr { cursor: pointer; }

  .icon {
    color: hsl(171, 100%, 41%);
  }
</style>
