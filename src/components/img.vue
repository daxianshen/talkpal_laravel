<template>
  <img v-lazy="src" alt="alt">
</template>

<script>
import notImg from '../image/notImg.png'
export default {
  props: {
    src:{
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      src: notImg
    }
  }
}
</script>

<style>

</style>
