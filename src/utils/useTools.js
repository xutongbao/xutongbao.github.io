import store from '../store'

export default () => {
  let timer

  const showLoading = (delay = 0) => {
    timer = setTimeout(() => {
      store.commit({ type: 'setLightState', key: 'isLoading', value: true })
    }, delay)
  }

  const hideLoading = () => {
    clearTimeout(timer)
    store.commit({ type: 'setLightState', key: 'isLoading', value: false })
  }

  return {
    showLoading,
    hideLoading,
  }
}