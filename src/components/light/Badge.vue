<template>
  <div class="m-badge-wrap">
    <slot></slot>
    <span class="m-badge" v-show="formatCount !== 0">{{formatCount}}</span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    count: {
      type: Number
    },
  },
  setup(props) {

    const formatCount = computed(() => {
      const { count } = props
      return count > 99 ? '99+' : count
    })

    return {
      formatCount
    }
  }
}
</script>

<style>

</style>