<template>
  <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
</template>

<script>
export default {
  name: 'TagList',
  props: ['tags']
}
</script>
