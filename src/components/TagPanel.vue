<template>
  <div class="panel">
    <p class="panel-heading">
      Filter by Tags
    </p>
    <a class="panel-block"
      v-for="tag in tags" :key="tag" 
      :class="{'is-active': selectedTags.includes(tag)}" 
      @click="selectTag(tag)"
    >
      <span class="panel-icon">
        <i class="fa fa-tag"></i>
      </span>
      {{ tag }}
    </a>
    <div class="panel-block">
      <button class="button is-primary is-outlined is-fullwidth" @click="selectedTags = []">
        Reset All Filters
      </button>
    </div>
    <div class="panel-block" v-show="selectedTags.length > 0">
      <tag-list :tags="selectedTags"></tag-list>
    </div>
  </div>
</template>

<script>
import TagList from '@/components/TagList'

export default {
  name: 'TagPanel',
  data () {
    return {
      selectedTags: []
    }
  },
  props: ['tags'],
  methods: {
    selectTag (tag) {
      var tagIndex = this.selectedTags.indexOf(tag)
      if (tagIndex !== -1) {
        this.selectedTags.splice(tagIndex, 1)
      } else {
        this.selectedTags.push(tag)
      }
    }
  },
  computed: {

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
