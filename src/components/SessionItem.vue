<template>
  <div>
    <h2 class="title is-4"><strong>{{ session.Title }}</strong></h2>
    <h3 class="subtitle">{{ speakersDisplayNames(session.Speakers) }}</h3>
    <!-- <img v-for="speaker in session.Speakers" 
        :key="speaker.Id"
        v-if="speaker.GravatarUrl"
        :src="speaker.GravatarUrl" 
    /> -->
    <!-- <h4>{{ formatTime(session.SessionStartTime) }} - {{ formatTime(session.SessionEndTime) }}</h4> -->
    <!-- <h4 class="">{{ getDate(session.SessionStartTime) }}</h4> -->
    <p>{{ session.Abstract }}</p>
    <h5>{{ session.Category }}</h5>
    <tag-list :tags="session.Tags"></tag-list>
    <div v-show="false">{{ session }}</div>
    <hr>
  </div>
</template>

<script>
import moment from 'moment/min/moment.min'

import TagList from '@/components/TagList'

export default {
  name: 'SessionItem',
  props: ['session'],
  methods: {
    speakersDisplayNames (speakers) {
      let speakersNames = speakers.map(function (speaker) {
        return `${speaker.FirstName || ''} ${speaker.LastName}`
      })
      return speakersNames.join(', ')
    },
    formatTime (time) {
      return moment(time).format('h:mm A')
    },
    getDate (time) {
      return moment(time).format('dddd, MMM Do')
    }
  },
  components: {
    TagList
  }
}
</script>

<style>

</style>
