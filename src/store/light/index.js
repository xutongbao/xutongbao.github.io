import actions from './actions'

export default {
  state: {
    header: '小米书城',
    list: [],
    currentId: 0,
    isRealScroll: true,
    isListDialogVisible: false,
    addBook: {},
    myBooks: [],
    detailBook: {},
    isLoading: false,
    scrollTop: 0,
  },
  mutations: {
    setLightState(state, payload) {
      state[payload.key] = payload.value
      console.log({...state})
    }
  },
  actions
}