<template>
  <div>
    <Nuxt />
    <my-footer />
  </div>
</template>
<script>
// import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
export default {
  name: 'Default',
  components: {
    // MyHeader,
    MyFooter,
  },
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

<style lang="scss" scoped></style>
