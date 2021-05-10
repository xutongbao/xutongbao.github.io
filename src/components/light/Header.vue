<template>
  <div class="m-header">{{ header }}</div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

export default {
  setup() {
    const store = useStore()

    const header = computed(() => store.state.light.header)

    return {
      header,
    }
  },
}
</script>

<style></style>
