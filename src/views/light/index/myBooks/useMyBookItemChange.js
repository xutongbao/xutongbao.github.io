import { useRouter } from "vue-router"
import { useStore } from "vuex"

export const useMyBookItemChange = () => {
  const store = useStore()
  const router = useRouter()

  const handleChecked = (id, e) => {
    store.dispatch({ type: 'patchMyBooks', id, operation: 'checked', checked: e.target.checked })
  }

  const handleImageClick = (id) => {
    router.push(`/light/detail/${id}`)
  }

  const handleSub = (id) => {
    store.dispatch({ type: 'patchMyBooks', id, operation: 'sub' })
  }

  const handleAdd = (id) => {
    store.dispatch({ type: 'patchMyBooks', id, operation: 'add' })
  }

  const handleInput = (id, e) => {
    let count = e.target.value.replace(/[^\d]/g, "")
    if (count !== '') {
      count = parseInt(count)
      store.dispatch({ type: 'patchMyBooks', id, operation: 'inputCount', count })
    }
  }

  const handleDelete = (id) => {
    store.dispatch({ type: "deleteMyBooks", ids: [id] })
  }

  return {
    handleChecked,
    handleImageClick,
    handleSub,
    handleAdd,
    handleInput,
    handleDelete
  }
}
