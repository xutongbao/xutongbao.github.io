import urls from './urls'
import { common } from './common'

const Api = {
  login: (data) => common({ url: urls.light.login, data, method: 'post' }),
  list: () => common({ url: urls.light.list }),
  myBooks: (data, method) => common({ url: urls.light.myBooks, data, method }),
  detail: (id) => common({ url: urls.light.detail + id })
}

export default Api