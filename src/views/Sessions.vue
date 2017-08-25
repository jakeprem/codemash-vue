<template>
  <section class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="panel">
            <p class="panel-heading">
              My Schedule
            </p>
            <p class="panel-tabs">
              Tue, Jan 6: 8:00 AM
            </p>
            <div class="panel-block is-active">
              <ul>
                <li>Other</li>
              </ul>
            </div>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fa fa-tag"></i>
              </span>
              Hardware
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fa fa-tag"></i>
              </span>
              .NET
            </a>
          </div>

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

export default {
  data () {
    return {
      sessions
    }
  },
  components: {
    SessionList,
    TagPanel
  },
  computed: {
    tags () {
      let tagsRaw = sessions.reduce(function (x, y) {
        return y.Tags.concat(x)
      }, [])
      return Array.from(new Set(tagsRaw))
    }
  }
}
</script>

<style>

</style>
