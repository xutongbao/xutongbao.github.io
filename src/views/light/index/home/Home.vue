<template>
  <div class="m-main m-home">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<script>
import { onMounted } from "vue"
import { useStore } from "vuex"
import Sidebar from "./Sidebar"
import List from "./List"

export default {
  components: {
    Sidebar,
    List,
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch({ type: "getLightList" })
    })
  },
}
</script>

<style></style>
