<template>
  <footer class="footer-main">
    <div class="line"></div>
    <el-container fluid="xl" class="links"> </el-container>
    <el-container fluid class="copyright">
      <nuxt-link to="/">copyright</nuxt-link>
    </el-container>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
footer.footer-main {
  .line {
    background: $color-0093d4;
    padding: 2rem 0;
    color: #fff;
  }
}
</style>
