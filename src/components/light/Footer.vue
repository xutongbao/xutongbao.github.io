<template>
  <div class="m-footer">
    <router-link to="/light/index/home" class="m-footer-item">
      <Icon name="home" class="m-footer-icon" />
      <div class="m-footer-text">首页</div>
    </router-link>
    <router-link to="/light/index/my_books" class="m-footer-item">
      <Badge :count="count">
        <Icon name="shubao" class="m-footer-icon" />
      </Badge>
      <div class="m-footer-text">书包</div>
    </router-link>
    <router-link to="/light/index/me" class="m-footer-item">
      <Icon name="me" class="m-footer-icon" />
      <div class="m-footer-text">我的</div>
    </router-link>
  </div>
</template>

<script>
import Icon from "./Icon"
import Badge from "./Badge"
import { computed, onMounted } from "vue"
import { useStore } from "vuex"
import useTools from '../../utils/useTools'

export default {
  components: {
    Icon,
    Badge,
  },
  setup() {
    const store = useStore()
    const count = computed(() =>
      store.state.light.myBooks.reduce(
        (sum, currentValue) => sum + currentValue.count,
        0
      )
    )

    onMounted(async () => {
      const { hideLoading } = useTools()
      store.dispatch({ type: "getMyBooks" }).then((res) => {
        hideLoading()
      })
    })
    return {
      count,
    }
  },
}
</script>

<style></style>
