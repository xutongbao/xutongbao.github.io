import { createApp } from "vue"
import ElementPlus from "element-plus"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import 'dayjs/locale/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import "./static/css/light.css"

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale })
  .mount("#app")
