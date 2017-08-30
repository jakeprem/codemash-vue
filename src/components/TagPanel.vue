<template>
  <div class="panel">
    <p class="panel-heading">
      Filter by Tags
    </p>
    <p class="panel-tabs">
    <a @click="setTagAnyFalse" :class="{'is-active': !tagAny}">All</a>
      <a @click="setTagAnyTrue" :class="{'is-active': tagAny}">Any</a>
    </p>
    <a class="panel-block"
      v-for="tag in tags" :key="tag" 
      :class="{'is-active': selectedTags.includes(tag)}" 
      @click="toggleTag(tag)"
    >
      <span class="panel-icon">
        <i class="fa fa-tag"></i>
      </span>
      {{ tag }}
    </a>
    <div class="panel-block">
      <button class="button is-primary is-outlined is-fullwidth" @click="clearSelectedTags">
        Reset All Filters
      </button>
    </div>
    <div class="panel-block" v-show="selectedTags.length > 0">
      <tag-list :tags="selectedTags"></tag-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TagList from '@/components/TagList'

export default {
  name: 'TagPanel',
  data () {
    return {
    }
  },
  // props: ['tags'],
  methods: {
    ...mapActions([
      'selectTag',
      'unselectTag',
      'clearSelectedTags',
      'setTagAnyTrue',
      'setTagAnyFalse'
    ]),
    toggleTag (tag) {
      var tagIndex = this.selectedTags.indexOf(tag)
      if (tagIndex !== -1) {
        this.unselectTag(tag)
      } else {
        this.selectTag(tag)
      }
    }
  },
  computed: {
    ...mapGetters([
      'tags',
      'selectedTags',
      'tagAny'
    ])
  },
  components: {
    TagList
  }
}
</script>

<style>
  .panel-block.is-active .panel-icon {
    color: #00d1b2;
  }
</style>
