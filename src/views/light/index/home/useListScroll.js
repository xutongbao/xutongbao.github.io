import { useStore } from "vuex"

let topArr = []
let timer
export default () => {
  const store = useStore()

  const handleScroll = (e) => {
    if (store.state.light.isRealScroll) {
      let { scrollTop } = e.target
      scrollTop += topArr[0]
      const index = topArr.findIndex(
        (top, index, arr) => top <= scrollTop && scrollTop < arr[index + 1]
      )
      if (index !== store.state.light.currentId) {
        store.commit({ type: "setLightState", key: "currentId", value: index })
      }
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        store.commit({ type: 'setLightState', key: 'isRealScroll', value: true })
      }, 300)
    }
  }

  const handleTopArr = (arr) => {
    topArr = arr
  }

  return {
    handleScroll,
    handleTopArr
  }
}