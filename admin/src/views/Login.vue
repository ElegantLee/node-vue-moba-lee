<template>
  <div class="login-container">
    <el-card header="管理员登录" class="login-card">
      <el-form ref="loginForm" :rules="loginRules" :model="loginForm" @submit.native.prevent="login" class="login-Form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.trim="loginForm.username " prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" show-password v-model.trim="loginForm.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="login-btns">
          <el-button type="primary" native-type="submit">登录</el-button>
          <el-button type="warning" @click="resetLoginForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const checkUsername = (rule, value, callback) => {
      const reg = /^[a-zA-Z0-9_-]{4,16}$/
      if (reg.test(value)) {
        return callback()
      } else {
        callback(new Error('请输入以字母开头的用户名'))
      }
    }
    const checkPassword = (rule, value, callback) => {
      const reg = /^[\w.]{6,15}$/
      if (reg.test(value)) {
        return callback()
      } else {
        return callback(new Error('请输入正确的密码'))
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: checkUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.loginForm)
      sessionStorage.setItem('token', res.data.token) // token持久化
      // console.log(res.data)
      this.$message({
        type: 'success',
        message: '登录成功'
      })
      this.$router.push('/')
    },
    resetLoginForm() {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style>
.login-card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 25%;
  /* height: 30%; */
  transform: translate(-50%, -50%);
  min-width: 400px;
  min-height: 230px;
}
.login-btns {
  display: flex;
  justify-content: center;
}
.login-container {
  width: 100%;
  height: 100%;
  background: url('../assets/img/login/login-bg.jpg') no-repeat 0 0;
  background-size: cover;
}
</style>>
