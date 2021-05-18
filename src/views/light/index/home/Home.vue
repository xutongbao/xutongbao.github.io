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
import useTools from '../../../../utils/useTools'

export default {
  components: {
    Sidebar,
    List,
  },
  setup() {
    const store = useStore()
    const { showLoading, hideLoading } = useTools()
    onMounted(() => {
      showLoading()
      store.dispatch({ type: "getLightList" }).then(() => {
        hideLoading()
      })
    })
  },
}
</script>

<style></style>
