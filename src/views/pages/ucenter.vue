<template>
  <div class="ucenter-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="user-profile" body-style="padding: 0px">
          <div class="user-profile-bg"></div>
          <div class="user-avatar-wrap">
            <el-avatar class="user-avatar" :size="120" :src="user" />
          </div>
          <div class="user-info">
            <div>{{ name }}</div>
            <div class="info-desc">
              <span>@huang-bo</span>
              <el-divider direction="vertical" />
              <el-link href="#">@admin</el-link>
            </div>
          </div>
          <div class="user-footer">
            <div class="user-footer-item">
              <el-statistic title="Follower" :value="1800" />
            </div>
            <div class="user-footer-item">
              <el-statistic title="Following" :value="666" />
            </div>
            <div class="user-footer-item">
              <el-statistic title="Total Post" :value="888" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover" :body-style="{ padding: '20px 50px', height: '444px' }">
          <el-tabs v-model="activeName" tab-position="left">
            <el-tab-pane label="消息通知" name="label1">
              <MessageTabs />
            </el-tab-pane>
            <el-tab-pane name="label2" label="我的头像">
              <div class="avatar-upload">
                <el-upload
                  class="avatar-uploader"
                  action="#"
                  :show-file-list="false"
                  :auto-upload="false"
                  :on-change="handleAvatarChange"
                  accept="image/*"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar-preview" />
                  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
                <div class="avatar-tips">
                  <h4>头像上传要求</h4>
                  <p>1. 图片格式：JPG、PNG、JPEG</p>
                  <p>2. 图片大小：不超过 2MB</p>
                  <p>3. 建议尺寸：200x200 像素</p>
                </div>
                <div class="avatar-actions">
                  <el-button type="primary" @click="submitAvatar" :disabled="!imageUrl"> 保存头像 </el-button>
                  <el-button @click="resetAvatar" :disabled="!imageUrl"> 重置 </el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="label3" label="修改密码" class="user-tabpane">
              <el-form label-position="top" class="w500">
                <el-form-item label="旧密码：">
                  <el-input type="password" v-model="form.old"></el-input>
                </el-form-item>
                <el-form-item label="新密码：">
                  <el-input type="password" v-model="form.new"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码：">
                  <el-input type="password" v-model="form.new1"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import user from "../../assets/img/user.jpg";
import MessageTabs from "@/components/MessageTabs.vue";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const name = ref("admin");
const activeName = ref("label1");

const form = reactive({
  new1: "",
  new: "",
  old: "",
});
const onSubmit = () => {};

// 头像上传相关
const imageUrl = ref("");

const handleAvatarChange = (file) => {
  const isImage = file.raw.type.startsWith("image/");
  const isLt2M = file.raw.size / 1024 / 1024 < 2;

  if (!isImage) {
    ElMessage.error("上传头像图片只能是图片格式!");
    return false;
  }
  if (!isLt2M) {
    ElMessage.error("上传头像图片大小不能超过 2MB!");
    return false;
  }

  // 创建本地预览URL
  imageUrl.value = URL.createObjectURL(file.raw);
};

const submitAvatar = () => {
  // 这里添加实际的上传逻辑
  ElMessage.success("头像上传成功！");
};

const resetAvatar = () => {
  imageUrl.value = "";
};
</script>

<style lang="scss" scoped>
.user-profile {
  position: relative;
}

.user-profile-bg {
  width: 100%;
  height: 200px;
  background-image: url("../../assets/img/ucenter-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.user-avatar-wrap {
  position: absolute;
  top: 135px;
  width: 100%;
  text-align: center;
}
.user-avatar {
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 7px 12px 0 rgba(62, 57, 107, 0.16);
}
.user-info {
  text-align: center;
  padding: 80px 0 30px;
}
.user-footer {
  display: flex;
  border-top: 1px solid rgba(83, 70, 134, 0.1);
}

.user-footer-item {
  padding: 20px 0;
  width: 33.3333333333%;
  text-align: center;
}

.user-footer > div + div {
  border-left: 1px solid rgba(83, 70, 134, 0.1);
}

.avatar-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.avatar-uploader {
  :deep(.el-upload) {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration);

    &:hover {
      border-color: var(--el-color-primary);
    }
  }
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-preview {
  width: 178px;
  height: 178px;
  display: block;
  object-fit: cover;
}

.avatar-tips {
  margin: 10px 0;
  padding: 15px;
  background-color: var(--el-color-info-light-9);
  border-radius: 4px;
  width: 100%;
  max-width: 300px;

  h4 {
    margin: 0 0 10px;
    color: var(--el-text-color-primary);
  }

  p {
    margin: 5px 0;
    color: var(--el-text-color-secondary);
    font-size: 14px;
  }
}

.avatar-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.w500 {
  width: 500px;
}

:deep(.el-tabs__content) {
  padding-left: 30px;
}
</style>
