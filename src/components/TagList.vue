<template>
  <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag" :class="{'is-primary': isActiveTag(tag)}">
        {{ tag }}
      </span>
    </div>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: Array,
    selectedTags: {
      default: _ => []
    }
  },
  methods: {
    isActiveTag (tag) {
      return this.selectedTags.includes(tag)
    }
  }
}
</script>
