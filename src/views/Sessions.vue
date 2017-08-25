<template>
  <section class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <schedule-panel></schedule-panel>
        </div>
        <div class="column is-6">
          <session-list :sessions="sessions"></session-list>
        </div>
        <div class="column is-3">
          <tag-panel :tags="tags"></tag-panel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sessions from '@/data/sessions'

import SessionList from '@/components/SessionList'
import TagPanel from '@/components/TagPanel'
import SchedulePanel from '@/components/SchedulePanel'

export default {
  data () {
    return {
      sessions
    }
  },
  components: {
    SessionList,
    TagPanel,
    SchedulePanel
  },
  computed: {
    tags () {
      let tagsRaw = sessions.reduce(function (x, y) {
        return y.Tags.concat(x)
      }, [])
      return Array.from(new Set(tagsRaw))
    }
  },
  created () {
    window.sessions = this.sessions
  }
}
</script>

<style>

</style>
