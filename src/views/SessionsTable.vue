<template>
  <section class="section main">
    <div class="container">
      <div class="panel">
        <input type="text" class="input" placeholder="Search" v-model="search">
      </div>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <table class="table is-bordered is-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Speaker</th>
              <th>Session Type</th>
              <th>Category</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="session in visibleSessions">
              <tr @click="toggleTab(session.Id)">
                <td><strong>{{session.Title}}</strong></td>
                <td>{{speakersDisplayNames(session.Speakers)}}</td>
                <th>{{session.SessionType}}</th>
                <td>{{session.Category}}</td>
                <td><tag-list :tags="session.Tags"></tag-list></td>
              </tr>
              <tr v-show="expandedTab == session.Id">
                <td colspan="5">{{session.Abstract}}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import TagList from '@/components/TagList'

// import _ from 'lodash'
// import moment from 'moment/min/moment.min'
import Fuse from 'fuse.js'
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
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'sessions',
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
      if (this.search) {
        return fuse.search(this.search)
      } else {
        return this.sessions
      }
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
    speakersDisplayNames (speakers) {
      let speakersNames = speakers.map(function (speaker) {
        return `${speaker.FirstName || ''} ${speaker.LastName}`
      })
      return speakersNames.join(', ')
    },
    toggleTab (id) {
      this.expandedTab = this.expandedTab === id ? '' : id
    },
    loadMore () {
      this.pageSize += this.stepSize
    }
  },
  components: {
    TagList
  },
  created () {
    this.$store.dispatch('getSessions')
  }
}
</script>

<style scoped>
  tr { cursor: pointer; }
</style>
