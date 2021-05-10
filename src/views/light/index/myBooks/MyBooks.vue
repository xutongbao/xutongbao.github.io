<template>
  <div class="m-main m-my-books">
    <MyBooksItem
      v-for="book in myBooks"
      :key="book.id"
      :book="book"
    ></MyBooksItem>
    <div v-if="myBooks.length === 0" class="m-my-books-empty">空空如也~</div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import MyBooksItem from "./MyBooksItem"

export default {
  components: {
    MyBooksItem,
  },
  setup() {
    const store = useStore()
    const myBooks = computed(() => store.state.light.myBooks)

    return {
      myBooks,
    }
  },
}
</script>

<style></style>
