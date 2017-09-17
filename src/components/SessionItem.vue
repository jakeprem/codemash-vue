<template>
  <div>
    <h2 class="title is-4">
      <span class="icon">
        <i class="fa" :class="{'fa-star': isFilled, 'fa-star-o': !isFilled}"
        @click='toggleInSchedule'
        >
        </i>
      </span>
      <strong>{{ session.Title }}</strong>
    </h2>
    <h3 class="subtitle">{{ speakersDisplayNames(session.Speakers) }}</h3>
    <p>{{ session.Abstract }}</p>
    <h5><strong>{{ session.Category }}</strong></h5>
    <tag-list :tags="session.Tags"></tag-list>
    <div v-show="false">{{ session }}</div>
    <hr>
  </div>
</template>

<script>
import moment from 'moment/min/moment.min'

import TagList from '@/components/TagList'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SessionItem',
  props: ['session'],
  data () {
    return {
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
    formatTime (time) {
      return moment(time).format('h:mm A')
    },
    getDate (time) {
      return moment(time).format('dddd, MMM Do')
    },
    toggleInSchedule () {
      if (!this.mySchedule.map((x) => x.Id).includes(this.session.Id)) {
        this.addToSchedule(this.session)
      } else {
        this.removeFromSchedule(this.session)
      }
    }
  },
  computed: {
    ...mapGetters([
      'mySchedule'
    ]),
    isFilled () {
      return this.mySchedule.filter((x) => x.Id === this.session.Id).length > 0
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
