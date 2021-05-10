<template>
  <div
    :class="`m-sidebar-item ${currentId === sidebarItem.id ? 'active' : ''}`"
    @click="handleNav(sidebarItem.id)"
  >
    {{ sidebarItem.title }}
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

export default {
  props: {
    sidebarItem: {
      type: Object
    }
  },
  setup() {
    const store = useStore()
    const currentId = computed(() => store.state.light.currentId)

    const handleNav = (id) => {
      let el = document.getElementById(id)
      el.scrollIntoView({ block: 'start', behavior: 'smooth' })
      store.commit({ type: "setLightState", key: "currentId", value: id })
      store.commit({ type: 'setLightState', key: 'isRealScroll', value: false })
    }

    return {
      currentId,
      handleNav,
    }
  },
}
</script>

<style></style>
