<template>
  <el-form ref="formRef" :model="form" :rules="rules" :label-width="options.labelWidth">
    <el-row>
      <el-col :span="options.span" v-for="item in options.list">
        <el-form-item :label="item.label" :prop="item.prop">
          <!-- 文本框、数字框、下拉框、日期框、开关、上传 -->
          <el-input
            v-if="item.type === 'input'"
            v-model="form[item.prop]"
            :placeholder="item.placeholder"
            :disabled="item.disabled"
            clearable
          ></el-input>
          <el-input-number
            v-else-if="item.type === 'number'"
            v-model="form[item.prop]"
            :disabled="item.disabled"
            controls-position="right"
          ></el-input-number>
          <el-select
            v-else-if="item.type === 'select'"
            v-model="form[item.prop]"
            :disabled="disabled"
            :placeholder="item.placeholder"
            clearable
          >
            <el-option v-for="opt in item.opt" :label="opt.label" :value="opt.value"></el-option>
          </el-select>
          <el-date-picker
            v-else-if="item.type === 'date'"
            v-model="form[item.prop]"
            type="date"
            :value-format="item.format"
          ></el-date-picker>
          <el-switch
            v-else-if="item.type === 'switch'"
            v-model="form[item.prop]"
            :active-value="item.activeValue"
            :active-text="item.activeText"
            :inactive-value="item.inactiveValue"
            :inactive-text="item.inactiveText"
          ></el-switch>
          <slot :name="item.prop" v-else> </slot>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="saveEdit(formRef)">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from "vue";
const { options, formData, edit, update } = defineProps({
  options: {
    type: Object,
    required: true,
  },
  formData: {
    type: Object,
    required: true,
  },
  edit: {
    type: Boolean,
    required: false,
  },
  update: {
    type: Function,
    required: true,
  },
});

const formRef = ref();
const saveEdit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (!valid) return false;
    update(form.value);
  });
};

const form = ref({ ...(edit ? formData : {}) });

const rules = options.list
  .map((item) => {
    if (item.required) {
      return { [item.prop]: [{ required: true, message: `${item.label}不能为空`, trigger: "blur" }] };
    }
    return {};
  })
  .reduce((acc, cur) => ({ ...acc, ...cur }), {});
</script>

<style lang="scss" scoped></style>
