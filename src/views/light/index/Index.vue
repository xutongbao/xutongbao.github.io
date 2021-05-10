<template>
  <div class="m-wrap">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../../components/light/Header'
import Footer from '../../../components/light/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>