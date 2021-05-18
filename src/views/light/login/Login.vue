<template>
  <div>
    <input v-model="username" autofocus />
  </div>
  <div>
    <input
      v-model="password"
      :type="visible ? 'text' : 'password'"
      @keyup.enter="handleLogin"
    />
    <Icon
      :name="visible ? 'show' : 'hide'"
      className="m-login-icon"
      @onClick="handleVisible"
    ></Icon>
  </div>
  <button @click="handleLogin">登录</button>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useRouter } from "vue-router"
import Icon from "../../../components/light/Icon"
import Api from "../../../api"
import useTools from "../../../utils/useTools"

export default {
  components: {
    Icon,
  },
  setup() {
    const state = reactive({
      username: "admin",
      password: "123456",
      visible: false,
    })

    const router = useRouter()
    const { showLoading, hideLoading } = useTools()

    const handleVisible = () => {
      const { visible } = state
      state.visible = !visible
    }

    const handleLogin = () => {
      const { username, password } = state
      showLoading(500)
      Api.light.login({ username, password }).then((res) => {
        if (res.code === 200) {
          hideLoading()
          router.push("/light/index/home")
        }
      })
    }

    return {
      ...toRefs(state),
      handleVisible,
      handleLogin,
    }
  },
}
</script>

<style></style>
