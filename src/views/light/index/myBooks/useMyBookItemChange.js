import { useStore } from "vuex"

export const useMyBookItemChange = () => {
  const store = useStore()

  const handleAdd = (id) => {
    store.dispatch({ type: 'patchMyBooks', id, operation: 'add' })
  }

  const handleDelete = (id) => {
    store.dispatch({ type: "deleteMyBooks", ids: [id] })
  }

  return {
    handleAdd,
    handleDelete
  }
}
