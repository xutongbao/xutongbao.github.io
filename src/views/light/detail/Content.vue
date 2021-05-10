<template>
  <div>
    <div class="m-detail-row">
      <img :alt="detailBook.title" :src="detailBook.avatar" class="m-detail-img" />
      <div class="m-detail-info">
        <div>
          <span class="m-detail-role-lable">主角:</span>
          <span v-for="(role, index) in detailBook.roles" :key="index" class="m-detail-role">{{role}}</span>
        </div>
        <div>
          <button class="m-btn" @click="handleSub">-</button>
          <input class="m-add-input" :value="detailBook.count" @input="handleInput" />
          <button class="m-btn" @click="handleAdd">+</button>
          <button class="m-btn" @click="handleAddBook">添加</button>
        </div>
      </div>
    </div>
    <div class="m-detail-summary">
      {{detailBook.summary}}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import useAddBook from './useAddBook'

export default {
  setup() {
    const store = useStore()
    const detailBook = computed(() => store.state.light.detailBook)
    const { handleSub, handleAdd, handleInput, handleAddBook } = useAddBook()

    return {
      detailBook,
      handleSub,
      handleAdd,
      handleInput,
      handleAddBook
    }
  }
}
</script>

<style></style>
