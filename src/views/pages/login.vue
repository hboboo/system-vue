<template>
  <div class="login-background">
    <div class="login-box">
      <div class="login-title">
        <img src="../../assets/img/logo.svg">
        <span>后台管理系统</span>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="login-form"
      >
        <el-form-item  prop="name">
          <el-input v-model="ruleForm.name" placeholder="用户名" style="width: 350px">
            <template #prepend><el-icon><User /></el-icon></template>
          </el-input>  
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="ruleForm.password" placeholder="密码" type="password" show-password style="width: 350px">
            <template #prepend><el-icon><Lock /></el-icon></template>
          </el-input> 
        </el-form-item>
        <div class="login-options">
          <el-checkbox v-model="ruleForm.savePassword" label="记住密码" size="large" />
          <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
        <div class="login-footer">
          <h5 class="login-tips">tips: 用户名和密码随便填</h5>
          <div class="login-register">
            <span>没有账号？</span>
            <el-link type="primary">立即注册</el-link>
          </div>
        </div>
      </el-form>  
    </div>
  </div>
</template>

<script  setup>
import { ref, reactive} from 'vue'
import router from '../../router';

const ruleForm = reactive({
  name: '',
  password: '',
  savePassword: null,
})

const rules = reactive({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

function handleLogin() {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.login-background {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../../assets/img/login-bg.jpg) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .login-box {
    width: 450px;
    height: 400px;
    padding: 25px;
    background-color: white;
    border-radius: 10px;

    .login-title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 28px 0;

      img {
        width: 35px;
      }
      
      span {
        font-size: 22px;
        color: #333;
        font-weight: bold;
        padding-left: 3px;
      }
    }

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .login-options {
      display: flex;    
      justify-content: space-between;
      width: 350px;
    }
    .login-footer {
      width: 350px;
      .login-tips {
        font-size: 14px;
        color: #ccc;
        font-weight: 400;
        margin-bottom: 8px;
      }
      .login-register {
        display: flex;
        font-size: 15px;
        align-items: center;
      }
    }
  } 
}

:deep(.el-button) {
  width: 350px;
  height: 40px;
  margin-top: 5px;
}

</style>