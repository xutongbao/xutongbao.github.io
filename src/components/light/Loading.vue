<template>
  <div :class="`m-loading ${ isLoading ? 'active' : '' }`">

  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const isLoading = computed(() => store.state.light.isLoading)

    return {
      isLoading
    }
  }
}
</script>

<style>

</style>