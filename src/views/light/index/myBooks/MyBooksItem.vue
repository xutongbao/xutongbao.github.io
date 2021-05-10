<template>
  <div class="m-my-books-item">
    <div class="m-my-books-item-img-wrap">
      <input type="checkbox" :id="book.id" class="m-my-books-item-checkbox" />
      <img :src="book.avatar" :alt="book.title" class="m-my-books-item-img" />
    </div>
    <div class="m-my-books-item-info-wrap">
      <div class="m-my-books-item-info">
        <div>{{ book.title }}</div>
        <div>
          <button class="m-btn" @click="handleSub(book.id)">-</button>
          <input class="m-add-input" :value="book.count" @input="handleInput(book.id)" />
          <button class="m-btn" @click="handleAdd(book.id)">+</button>
        </div>
      </div>
      <div class="m-my-books-item-delete-wrap">
        <button
          @click="handleDelete(book.id)"
          class="m-my-books-item-delete-btn"
        >
          删除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useMyBookItemChange } from "./useMyBookItemChange"
export default {
  props: {
    book: {
      type: Object,
    },
  },
  setup() {

    const { handleAdd, handleDelete } = useMyBookItemChange()

    return {
      handleAdd,
      handleDelete,
    }
  },
}
</script>

<style></style>
