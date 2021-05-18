<template>
  <div class="m-main">
    <el-button @click="handleLogout">退出</el-button>
  </div>
</template>

<script>
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
export default {
  components: {
    ElButton
  },
  setup() {
    const router = useRouter()
    const handleLogout = () => {
      router.push('/light/login')
    }

    return {
      handleLogout
    }
  }
}
</script>

<style>

</style>