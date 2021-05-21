import { useStore } from "vuex"
import { onMounted, onUpdated } from "vue"

let topArr = []
let timer
export default () => {
  const store = useStore()

  const handleScroll = (e) => {
    let { scrollTop } = e.target
    if (store.state.light.isRealScroll) {
      const scrollTopNew = scrollTop + topArr[0]
      const index = topArr.findIndex(
        (top, index, arr) =>
          top <= scrollTopNew && scrollTopNew < arr[index + 1]
      )
      if (index !== store.state.light.currentId) {
        store.commit({ type: "setLightState", key: "currentId", value: index })
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        store.commit({
          type: "setLightState",
          key: "scrollTop",
          value: scrollTop,
        })
      }, 300)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        store.commit({
          type: "setLightState",
          key: "isRealScroll",
          value: true,
        })
        store.commit({
          type: "setLightState",
          key: "scrollTop",
          value: scrollTop,
        })
      }, 300)
    }
  }

  const handleTopArr = (arr) => {
    topArr = arr
  }

  let listRef
  const handeListRef = (el) => {
    listRef = el
  }

  onUpdated(() => {
    topArr = [...document.getElementsByClassName('js-category')].map(item => item.offsetTop)
    topArr.push(Infinity)   
  })

  onMounted(() => {
    listRef.scrollTop = store.state.light.scrollTop  
  })

  return {
    handeListRef,
    handleScroll,
    handleTopArr,
  }
}
