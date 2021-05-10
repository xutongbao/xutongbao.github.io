<template>
  <span
    :class="`icon iconfont icon-${name} ${className}`"
    @click="handleClick"
  ></span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  emits: ["onClick"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("onClick")
    }

    return {
      handleClick,
    }
  },
}
</script>

<style></style>
