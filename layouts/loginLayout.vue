<template>
  <el-container class="login-container">
    <Nuxt />
  </el-container>
</template>
<script>
export default {
  name: 'LoginLayout',
  data() {
    return {
      title: 'Indutri - Vue Nuxt Industry & Factory Business Template'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  border: 1px solid red;
}
</style>
