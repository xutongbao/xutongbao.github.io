<template>
  <div class="m-my-books-item">
    <div class="m-my-books-item-img-wrap">
      <input type="checkbox" :checked="book.checked" @change="handleChecked(book.id, $event)" :id="book.id" class="m-my-books-item-checkbox" />
      <img
        :src="book.avatar"
        :alt="book.title"
        class="m-my-books-item-img"
        @click="handleImageClick(book.id)"
      />
    </div>
    <div class="m-my-books-item-info-wrap">
      <div class="m-my-books-item-info">
        <div>{{ book.title }}</div>
        <div class="m-book-price">￥{{ book.price }}</div>
        <div>
          <button class="m-btn" @click="handleSub(book.id)">-</button>
          <input
            class="m-add-input"
            :value="book.count"
            @input="handleInput(book.id, $event)"
          />
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
    const {
      handleChecked,
      handleImageClick,
      handleSub,
      handleAdd,
      handleInput,
      handleDelete,
    } = useMyBookItemChange()

    return {
      handleChecked,
      handleImageClick,
      handleSub,
      handleAdd,
      handleInput,
      handleDelete,
    }
  },
}
</script>

<style></style>
