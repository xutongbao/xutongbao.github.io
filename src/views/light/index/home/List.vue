<template>
  <div class="m-list" @scroll="handleScroll" :ref="handeListRef">
    <Category
      v-for="category in list"
      :key="category.id"
      :category="category"
      @onTopArr="handleTopArr"
    ></Category>
    <Teleport to="body">
      <Dialog
        :visible="isListDialogVisible"
        title="添加"
        @onClose="handleClose"
        @onOk="handleOk"
      >
        <template #content>
          <div class="m-add-wrap">
            <div class="m-add">
              <button class="m-btn" @click="handleSubCount">-</button>
              <input
                type="text"
                class="m-add-input"
                :value="addBook.count"
                @input="handleInputCount"
              />
              <button class="m-btn" @click="handleAddCount">+</button>
            </div>
          </div>
        </template>
      </Dialog>
    </Teleport>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import Category from "./Category"
import useListScroll from "./useListScroll"
import useAddBook from "./useAddBook"
import Dialog from "@/components/light/Dialog"

export default {
  components: {
    Category,
    Dialog,
  },
  setup() {
    const store = useStore()
    const list = computed(() => store.state.light.list)
    const currentId = computed(() => store.state.light.currentId)
    const addBook = computed(() => store.state.light.addBook)
    const isListDialogVisible = computed(
      () => store.state.light.isListDialogVisible
    )
    const { handeListRef, handleScroll, handleTopArr } = useListScroll()
    const {
      handleClose,
      handleOk,
      handleAddCount,
      handleSubCount,
      handleInputCount,
    } = useAddBook()

    return {
      list,
      currentId,
      isListDialogVisible,
      handeListRef,
      handleScroll,
      handleTopArr,
      handleClose,
      handleOk,
      addBook,
      handleAddCount,
      handleSubCount,
      handleInputCount,
    }
  },
}
</script>

<style></style>

