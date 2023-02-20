import axios from "axios"
import router from "../router"

if (process.env.NODE_ENV === "development" && false) {
  axios.defaults.baseURL = 'http://localhost:81' //"http://localhost:81"
} else {
  axios.defaults.baseURL = 'https://rough-tan-board.glitch.me'
}

axios.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem("token") || ""

    if (config.isNeedExtraData !== false) {
      let extraData = { userId: 1 }
      if (config.method === "get") {
        config.params = { ...extraData, ...config.data }
      } else {
        config.data = { ...extraData, ...config.data }
      }
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      return res.data
    } else if (res.data.code === 400) {
      alert(res.data.message)
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误(400)"
          break
        case 401:
          return router.push("/login")
        case 403:
          err.message = "拒绝访问(403)"
          break
        case 404:
          err.message = "请求出错(404)"
          break
        case 408:
          err.message = "请求超时(408)"
          break
        case 500:
          err.message = "服务器错误(500)"
          break
        case 501:
          err.message = "服务未实现(501)"
          break
        case 502:
          err.message = "网络错误(502)"
          break
        case 503:
          err.message = "服务不可用(503)"
          break
        case 504:
          err.message = "网络超时(504)"
          break
        case 505:
          err.message = "HTTP版本不受支持(505)"
          break
        default:
          err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = "连接服务器失败!"
    }
    return Promise.reject(err)
  }
)

export const common = async (config) => {
  let res = await axios(config)
  return res
}
