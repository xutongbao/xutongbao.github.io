<template>
  <Header></Header>
  <Content></Content>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue"
import { useRoute } from "vue-router"
import Header from "./Header"
import Content from './Content'
import { useStore } from 'vuex'
import useTools from '../../../utils/useTools'

export default {
  components: {
    Header,
    Content,
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    onMounted(() => {
      const { id } = route.params
      const { showLoading, hideLoading } = useTools()
      showLoading(0)
      store.dispatch({ type: 'getDetail', id }).then(() => {
        hideLoading()
      })
    })
  },
}
</script>

<style></style>
