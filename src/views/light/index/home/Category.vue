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
  emits: ['onTopArr']
}
</script>

<style></style>
