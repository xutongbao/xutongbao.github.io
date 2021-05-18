import { useStore } from "vuex"
import Api from '@/api'
import { useRouter } from "vue-router"
import useTools from '../../../utils/useTools'

export default () => {
  const store = useStore()
  const router = useRouter()

  const handleSub = () => {
    const detailBook = store.state.light.detailBook
    if (detailBook.count > 1) {
      detailBook.count--
      store.commit({
        type: "setLightState",
        key: "detailBook",
        value: detailBook,
      })
    }
  }

  const handleAdd = () => {
    const detailBook = store.state.light.detailBook
    detailBook.count++
    store.commit({
      type: "setLightState",
      key: "detailBook",
      value: detailBook,
    })
  }

  const handleInput = (e) => {
    const detailBook = store.state.light.detailBook
    detailBook.count = e.target.value.replace(/[^\d]/g, "")
    if (detailBook.count !== '') {
      detailBook.count = parseInt(detailBook.count)
    }
    store.commit({
      type: "setLightState",
      key: "detailBook",
      value: { ...detailBook },
    })
  }

  const handleAddBook = async () => {
    const book = store.state.light.detailBook
    const { showLoading, hideLoading } = useTools()
    if (book.count !== '') {
      showLoading()
      store.dispatch({ type: 'addMyBooks' , book }).then(() => {
        hideLoading()
        router.push('/light/index/my_books')
      })
    }
  }

  return {
    handleSub,
    handleAdd,
    handleInput,
    handleAddBook,
  }
}
