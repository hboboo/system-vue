<template>
  <div class="page">
    <el-container>

      <el-header>
        <div class="header__container">
          <h3 class="header__title">通用中后台管理系统</h3>
          <span class="header__text">欢迎您的登录</span>
        </div>
      </el-header>
  
      <el-main class="main">
        <div class="main__container">
          <el-card class="main__card">
            <el-tabs v-model="activeName" stretch>
              <el-tab-pane label="登录" name="login" class="login-tab">
                <el-form class="login__form">
                  <el-form-item label="账号">
                    <el-input v-model="loginData.account" placeholder="请输入账号" />
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="loginData.password" type="password" show-password placeholder="请输入密码"/>
                  </el-form-item>
                </el-form>
                <div class="login__actions">
                  <div class="login__forgot-password">
                    <span class="login__forgot-password-link">忘记密码</span>
                  </div>
                  <div class="login__sumit">
                    <el-button type="primary" class="login__sumit-button">登录</el-button>
                  </div>
                  <div class="login__register">
                    <span class="login__register-text">还没账号？</span>
                    <span class="login__register-text-link">马上注册</span>
                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label="注册" name="register" class="register-tab">
                <el-form class="login__form" label-width="70px">
                  <el-form-item label="账号">
                    <el-input v-model="registerData.account" placeholder="账号长度6-11位" />
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="registerData.password" type="password" show-password placeholder="长度需6-11位同时包含字母和数字"/>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input v-model="registerData.repassword" type="password" show-password placeholder="请再次输入密码"/>
                  </el-form-item>
                </el-form>
                <div class="login__actions">
                  <div class="login__sumit">
                    <el-button type="primary" class="login__sumit-button">注册</el-button>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs> 
          </el-card>
        </div>
      </el-main>
 
      <el-footer>
        <div class="footer__container">
          <span class="footer__item">阿里云博客专家</span>
          <span class="footer__item">阿里云博客专家</span>
          <span class="footer__item">阿里云博客专家</span>
          <span class="footer__item">阿里云博客专家</span>
          <span class="footer__item">阿里云博客专家</span>
          <span class="footer__item">阿里云博客专家</span>
          <span class="footer__item">阿里云博客专家</span> 
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive} from 'vue'
  const activeName = ref('login')

  interface fromData {
    account: number,
    password: string,
    repassword ?: string
  }

  const loginData:fromData = reactive({
    account: null,
    password: ''
  })

  const registerData:fromData = reactive({
    account: null,
    password: '',
    repassword: ''
  })
</script>

<style lang="scss" scoped>
  .header {
    &__container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    &__text {
      font-size: 12px;
    }
  }
  
  .main {
    background-image: url('@/assets/code.jpg');
    height: 600px;

    &__container {
      width: 1200px;
      height: 300px;
      margin: 0 auto;
    }
    &__card {
      width: 350px;
      height: 375px;
      float: right;
      position: relative;
      top: 14%;
    }
    .login {
      &__form { 
        margin: 15px 0;
      }
    }
    .login {
      &__actions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &__forgot-password {
        margin-left: auto;
      }
      &__forgot-password-link {
        color: #419eff;
        font-size: 14px;
        cursor: pointer;
      }
      &__sumit {
        margin-top: 10px;
      }
      &__register {
        margin-top: 10px;
        font-size: 12px;
      }
      &__register-text-link {
        cursor: pointer;
        color: #419eff;
      }
    }
  }

  .footer {
    &__container {
      width: 600px;
      margin: 5px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    &__item {
      white-space: nowrap;
      display: flex;
      align-items: center;
      &:not(:last-child)::after {
        content: '|';
        margin-left: 8px;
      }
    }
  }

  :deep(.el-tabs__item) {
    font-size: 18px;
  }
  :deep(.el-input__inner) {
    height: 40px;
  }
  :deep(.el-form-item__label) {
    height: 40px;
    line-height: 40px;
  }
  :deep(.el-button) {
    width: 290px;
    height: 45px;
    font-size: 16px;
  }
</style>