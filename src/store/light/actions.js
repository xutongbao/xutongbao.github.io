import Api from "../../api"

export default {
  async getLightList({ commit }) {
    const res = await Api.light.list()
    commit({ type: 'setLightState', key: 'list', value: res.data })
  },
  async getMyBooks({ commit }) {
    const res = await Api.light.myBooks()
    commit({ type: 'setLightState', key: 'myBooks', value: res.data })
  },
  async addMyBooks({ commit }, payload) {
    const { book } = payload
    const res = await Api.light.myBooks({ book }, 'post')
    commit({ type: 'setLightState', key: 'myBooks', value: res.data }) 
    return res   
  },
  async deleteMyBooks({ commit }, payload) {
    const { ids } = payload
    const res = await Api.light.myBooks({ ids }, 'delete')
    commit({ type: 'setLightState', key: 'myBooks', value: res.data }) 
    return res  
  },
  async patchMyBooks({ commit }, payload) {
    const res = await Api.light.myBooks({ ...payload }, 'patch')
    commit({ type: 'setLightState', key: 'myBooks', value: res.data }) 
    return res  
  },
  async getDetail({ commit }, payload) {
    const res = await Api.light.detail(payload.id)
    res.data.count = 1
    commit({ type: 'setLightState', key: 'detailBook', value: res.data })
  }
}
