<template>
  <div>
    <Icon
      v-for="n in 5"
      :key="n"
      name="star"
      :className="`m-star ${n <= number ? 'active' : ''}`"
    ></Icon>
  </div>
</template>

<script>
import Icon from "./Icon"

export default {
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Icon,
  },
}
</script>

<style></style>
