<template>
  <el-container>
    <el-form ref="form" :model="userForm" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="userForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'loginLayout',
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {},
  methods: {
    onSubmit() {}
  }
}
</script>

<style lang="scss" scoped></style>
