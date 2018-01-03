<template>
  <div class="tags">
      <span v-if="hasSpecial" class="tag is-info">
        {{ special }}
      </span>
      <span @click.stop="toggleTag(tag)" v-for="tag in tags" class="tag" :class="{'is-primary': isActiveTag(tag)}">
        {{ tag }}
      </span>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TagList',
  props: {
    tags: Array,
    special: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters([
      'selectedTags'
    ]),
    hasSpecial () {
      return this.special !== ''
    }
  },
  methods: {
    ...mapActions([
      'selectTag',
      'unselectTag'
    ]),
    toggleTag (tag) {
      if (this.selectedTags.includes(tag)) {
        this.unselectTag(tag)
      } else {
        this.selectTag(tag)
      }
    },
    isActiveTag (tag) {
      return this.selectedTags.includes(tag)
    }
  }
}
</script>
