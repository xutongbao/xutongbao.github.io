<template>
  <div class="m-sidebar">
    <SidebarItem
      v-for="sidebarItem in list"
      :key="sidebarItem.id"
      :sidebarItem="sidebarItem"
    >
    </SidebarItem>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from 'vue'
import SidebarItem from "./SidebarItem"

export default {
  components: {
    SidebarItem,
  },
  setup() {
    const store = useStore()
    const list = computed(() => store.state.light.list)
    
    return {
      list,
    }
  },
}
</script>

<style></style>
