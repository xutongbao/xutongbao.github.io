import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import Store from "../store"
import light from "./light"

const routes = [...light]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.header) {
    Store.commit({ type: "setLightState", key: "header", value: to.meta.header })
  }
  next()
})

export default router
