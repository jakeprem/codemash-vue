<template>
  <div>
    <h2 class="title is-4">
      <strong>{{ session.Title }}</strong>
      <span class="icon">
        <i class="fa" :class="{'fa-star': isFilled, 'fa-star-o': !isFilled}"
        @click='isFilled = !isFilled'
        >
        </i>
      </span>
    </h2>
    <h3 class="subtitle">{{ speakersDisplayNames(session.Speakers) }}</h3>
    <p>{{ session.Abstract }}</p>
    <h5>{{ session.Category }}</h5>
    <tag-list :tags="session.Tags"></tag-list>
    <div v-show="false">{{ session }}</div>
    <hr>
  </div>
</template>

<script>
import moment from 'moment'

import TagList from '@/components/TagList'

export default {
  name: 'SessionItem',
  props: ['session'],
  data () {
    return {
      isFilled: false
    }
  },
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
  .icon {
    color: hsl(171, 100%, 41%);
  }
</style>
