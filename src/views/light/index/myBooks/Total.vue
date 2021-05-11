<template>
  <div class="m-my-books-total-wrap" v-if="isVisible">
    <div class="m-my-books-check-all-wrap">
      <input
        type="checkbox"
        id="m-check-all"
        :checked="checkedAll"
        @change="handleCheckAll"
      />
      <label for="m-check-all">全选</label>
    </div>
    <div class="m-my-books-total-info">
      <span>合计:</span>
      <span class="m-book-price">￥{{ total }}</span>
    </div>
    <div class="m-my-books-pay">
      <button>去结算({{ payCount }})</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const checkedAll = computed(() =>
      store.state.light.myBooks.every((book) => book.checked)
    )
    const isVisible = computed(() => store.state.light.myBooks.length > 0)
    const total = computed(() =>
      store.state.light.myBooks
        .filter((book) => book.checked)
        .reduce((total, currentItem) => {
          return total + currentItem.price * currentItem.count
        }, 0)
    )
    const payCount = computed(() => {
      let count = store.state.light.myBooks
        .filter((book) => book.checked)
        .reduce((total, currentItem) => {
          return total + currentItem.count
        }, 0)
      return count < 100 ? count : "99+"
    })

    const handleCheckAll = (e) => {
      store.dispatch({
        type: "patchMyBooks",
        operation: "checkedAll",
        checked: e.target.checked,
      })
    }

    return {
      isVisible,
      checkedAll,
      handleCheckAll,
      total,
      payCount,
    }
  },
}
</script>

<style></style>
