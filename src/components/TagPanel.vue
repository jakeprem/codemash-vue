<template>
  <div class="panel">
    <p class="panel-heading" @click="isHidden = !isHidden">
      <a>
        Filter by Tags        
      </a>
      <span class="icon is-small" style=" vertical-align: middle;">
          <i class="fa" :class="{'fa-chevron-right': isHidden, 'fa-chevron-down': !isHidden}"></i>
      </span>
    </p>
    <template v-if="!isHidden">
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
    </template>
    <div class="panel-block">
      <button class="button is-primary is-outlined is-fullwidth" @click="clearSelectedTags">
        Reset Tag Filters
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
      isHidden: false
    }
  },
  props: ['tags'],
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
      // 'tags',
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
