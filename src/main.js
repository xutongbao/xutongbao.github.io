import { createApp } from "vue"
import { ElImage, ElButton } from "element-plus"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import lang from 'element-plus/lib/locale/lang/zh-cn.js'
import locale from 'element-plus/lib/locale'
import "dayjs/locale/zh-cn"
import "./static/css/light.css"

const app = createApp(App)
  .use(store)
  .use(router)

locale.use(lang)
const components = [ElImage, ElButton]
components.forEach((component) => {
  app.component(component.name, component)
})

app.mount("#app")
