<template>
  <div class="login-background">
    <div class="login-box">
      <div class="login-title">
        <img src="../../assets/img/logo.svg" />
        <span>后台管理系统</span>
      </div>
      <el-form ref="loginForm" :model="param" :rules="rules" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="用户名" style="width: 350px">
            <template #prepend
              ><el-icon><User /></el-icon
            ></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            placeholder="密码"
            type="password"
            @keyup.enter="submitForm(loginForm)"
            show-password
            style="width: 350px"
          >
            <template #prepend
              ><el-icon><Lock /></el-icon
            ></template>
          </el-input>
        </el-form-item>
        <div class="login-options">
          <el-checkbox v-model="checked" label="记住密码" size="large" />
          <el-link type="primary" @click="router.push('/reset-pwd')">忘记密码</el-link>
        </div>
        <el-button type="primary" class="login-button" @click="submitForm(loginForm)">登录</el-button>
        <div class="login-footer">
          <p class="login-tips">tips: 管理员账号 admin 密码随便填</p>
          <p class="login-tips">用户账号 随便填</p>
          <div class="login-register">
            <span>没有账号？</span>
            <el-link type="primary" @click="router.push('/register')">立即注册</el-link>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useTabsStore } from "../../store/tabas";
import { usePermissStore } from "../../store/permiss";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
const loginForm = ref();
const checked = ref(false);

// 获取本地存储的登录信息
const lgStr = localStorage.getItem("login-param");
const defParam = lgStr ? JSON.parse(lgStr) : null;
checked.value = lgStr ? true : false;

const param = reactive({
  username: defParam ? defParam.username : "",
  password: defParam ? defParam.password : "",
});

const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const permiss = usePermissStore();
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      ElMessage.success("登录成功");
      localStorage.setItem("vuems_name", param.username);
      const keys = permiss.defaultList[param.username == "admin" ? "admin" : "user"];
      permiss.handleSet(keys);

      // 记住密码功能
      if (checked.value) {
        localStorage.setItem("login-param", JSON.stringify(param));
      } else {
        localStorage.removeItem("login-param");
      }

      router.push("/");
    } else {
      ElMessage.error("登录失败");
      return false;
    }
  });
};

const tabs = useTabsStore();
tabs.clearTabs();
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
        padding-top: 5px;
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
