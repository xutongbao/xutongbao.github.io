import { useStore, computed } from "vuex"

export default () => {
  const store = useStore()

  const handleClose = () => {
    store.commit({
      type: "setLightState",
      key: "isListDialogVisible",
      value: false,
    })
  }

  const handleOk = async () => {
    const addBook = store.state.light.addBook
    if (addBook.count !== '') {
      store.dispatch({ type: 'addMyBooks' , book: addBook }).then(() => {
        handleClose()
      })
    }
  }

  const handleAddCount = () => {
    const addBook = store.state.light.addBook
    addBook.count++
    store.commit({ type: "setLightState", key: "addBook", value: addBook })
  }

  const handleSubCount = () => {
    const addBook = store.state.light.addBook
    if (addBook.count > 1) {
      addBook.count--
      store.commit({ type: "setLightState", key: "addBook", value: addBook })
    }
  }

  const handleInputCount = (e) => {
    const addBook = store.state.light.addBook
    addBook.count = e.target.value.replace(/[^\d]/g, "")
    if (addBook.count !== '') {
      addBook.count = parseInt(addBook.count)
    }
    store.commit({
      type: "setLightState",
      key: "addBook",
      value: { ...addBook },
    })
  }

  return {
    handleClose,
    handleOk,
    handleAddCount,
    handleSubCount,
    handleInputCount,
  }
}
