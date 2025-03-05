<template>
  <div class="register-background">
    <div class="register-box">
      <div class="register-title">
        <img src="../../assets/img/logo.svg" />
        <span>后台管理系统</span>
      </div>
      <el-form ref="register" :model="param" :rules="rules" class="register-form">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="用户名" style="width: 350px">
            <template #prepend
              ><el-icon><User /></el-icon
            ></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="param.email" placeholder="邮箱" style="width: 350px">
            <template #prepend
              ><el-icon><Message /></el-icon
            ></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="param.password" placeholder="密码" type="password" show-password style="width: 350px">
            <template #prepend
              ><el-icon><Lock /></el-icon
            ></template>
          </el-input>
        </el-form-item>
        <el-button type="primary" class="register-button" @click="submitForm(register)">注册</el-button>
        <div class="register-footer">
          <div class="register-link">
            <span>已有账号，</span>
            <el-link type="primary" @click="router.push('/login')">立即登录</el-link>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const param = reactive({
  username: "",
  password: "",
  email: "",
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
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
};

const register = ref();
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      ElMessage.success("注册成功，请登录");
      router.push("/login");
    } else {
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.register-background {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../../assets/img/login-bg.jpg) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .register-box {
    width: 450px;
    height: 400px;
    padding: 25px;
    background-color: white;
    border-radius: 10px;

    .register-title {
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

    .register-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .register-footer {
      width: 350px;
      .register-link {
        display: flex;
        font-size: 15px;
        align-items: center;
        margin-top: 14px;
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
