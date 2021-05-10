<template>
  <div class="m-detail-header">
    <Icon name="back" className="m-detail-header-back-icon" @onClick="handleBack"></Icon>
    <span class="m-detail-header-title">{{detailBook.title}}</span>
  </div>
</template>

<script>
import Icon from '@/components/light/Icon'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: {
    Icon
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const detailBook = computed(()=> store.state.light.detailBook)

    const handleBack = () => {
      router.go(-1)
    }


    return {
      handleBack,
      detailBook
    }
  }
}
</script>

<style>

</style>