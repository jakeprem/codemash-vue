<template>
  <section class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">
          <session-list :sessions="mySchedule"></session-list>
        </div>
        <div class="column is-3">
          <!-- <tag-panel :tags="tags"></tag-panel> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import SessionList from '@/components/SessionList'
import TagPanel from '@/components/TagPanel'
import SchedulePanel from '@/components/SchedulePanel'

export default {
  data () {
    return {
    }
  },
  components: {
    SessionList,
    TagPanel,
    SchedulePanel
  },
  computed: {
    ...mapGetters([
      'mySchedule',
      'tags'
    ])
  }
}
</script>

<style>

</style>
