<template>
  <div class="m-category-item">
    <el-image
      :alt="book.title"
      :src="book.avatar"
      lazy
      class="m-category-item-img"
      @click="handleImageClick(book.id)"
    >
      <template #placeholder>
        <div class="m-category-item-img-loading"></div>
      </template>
    </el-image>
    <div class="m-category-item-info">
      <div>{{ book.title }}</div>
      <Stars :number="book.stars" />
      <button @click="handleShowDialog">添加</button>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/light/Stars"
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

export default {
  props: {
    book: {
      type: Object,
    },
  },
  components: {
    Stars,
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()

    const handleShowDialog = () => {
      store.commit({
        type: "setLightState",
        key: "isListDialogVisible",
        value: true,
      })
      const book = props.book
      book.count = 1
      store.commit({ type: "setLightState", key: "addBook", value: book })
    }

    const handleImageClick = (id) => {
      router.push(`/light/detail/${id}`)
    }

    return {
      handleShowDialog,
      handleImageClick,
    }
  },
}
</script>

<style></style>
