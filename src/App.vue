<template>
  <router-view/>
  <Teleport to="body">
    <Loading></Loading>
  </Teleport>
</template>

<script>
import Loading from './components/light/Loading'

export default {
  components: {
    Loading
  }
}
</script>

