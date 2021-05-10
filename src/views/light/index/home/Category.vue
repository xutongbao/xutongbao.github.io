<template>
  <div :id="category.id" class="js-category">
    <div class="m-category-title">
      {{ category.title }}
    </div>
    <CategoryItem
      v-for="book in category.list"
      :key="book.id"
      :book="book"
    ></CategoryItem>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import CategoryItem from "./CategoryItem"

export default {
  props: {
    category: {
      type: Object,
    },
  },
  components: {
    CategoryItem,
  },
  emits: ['onTopArr'],
  setup(props, { emit }) {
    onMounted(() => {
      const topArr = [...document.getElementsByClassName('js-category')].map(item => item.offsetTop)
      topArr.push(Infinity)
      emit('onTopArr', topArr)
    })
  }
}
</script>

<style></style>
