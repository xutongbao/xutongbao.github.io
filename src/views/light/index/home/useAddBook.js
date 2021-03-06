import { useStore } from "vuex"
import useTools from '../../../../utils/useTools'

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
    const { showLoading, hideLoading  } = useTools()
    if (addBook.count !== '') {
      showLoading()
      store.dispatch({ type: 'addMyBooks' , book: addBook }).then(() => {
        handleClose()
        hideLoading()
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
