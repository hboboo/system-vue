<template>
  <div class="search-container">
    <el-form ref="searchRef" :model="query" :inline="true">
      <el-form-item :label="item.label" :prop="item.prop" v-for="item in options">
        <el-input
          v-if="item.type === 'input'"
          v-model="query[item.prop]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
          clearable
        ></el-input>
        <el-select
          v-else-if="item.type === 'select'"
          v-model="query[item.prop]"
          :placeholder="item.placeholder"
          :disabled="item.disabled"
          clearable
        >
          <el-option v-for="opt in item.opts" :label="opt.label" :value="opt.value"></el-option>
        </el-select>
        <el-date-picker
          v-else-if="item.type === 'date'"
          v-model="query[item.prop]"
          type="date"
          :value-format="item.format"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="search">搜索</el-button>
        <el-button type="primary" icon="Refresh" @click="resetForm(searchRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  query: {
    type: Object,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  search: {
    type: Function,
    default: () => {},
  },
});

const searchRef = ref();
function resetForm(formEl) {
  formEl.resetField();
  props.search();
}
</script>

<style lang="scss" scoped>
.search-container {
  padding: 20px 30px 0;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}
</style>
