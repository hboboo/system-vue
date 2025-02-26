<template>
  <div class="table-custom-container">
    <div class="table-toolbar" v-if="hasToolbar">
      <div class="table-toolbar-left">
        <slot name="toolbarBtn"></slot>
      </div>
      <div class="table-toolbar-right">
        <template v-if="multipleSelection.length > 0">
          <el-tooltip effect="dark" content="删除选中" placement="top" @click="delSelection(multipleSelection)">
            <el-icon><Delete /></el-icon>
          </el-tooltip>
          <el-divider direction="vertical" />
        </template>
        <el-tooltip effect="dark" content="刷新" placement="top" @click="refresh">
          <el-icon><Refresh /></el-icon>
        </el-tooltip>
        <el-divider direction="vertical" />
        <el-tooltip effect="dark" content="列设置" placement="top">
          <el-dropdown :hide-on-click="false" trigger="click" szie="small">
            <el-icon>
              <Setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="c in columns">
                  <el-checkbox v-model="c.visible" :label="c.label" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-tooltip>
      </div>
    </div>
    <el-table
      :header-cell-style="{ background: '#f4f6f8' }"
      :data="tableData"
      style="width: 100%"
      border
      :row-key="rowKey"
      table-layout="auto"
      @selection-change="handleSelectionChange"
    >
      <template v-for="item in columns" :key="item.prop">
        <el-table-column
          v-if="item.visible"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :type="item.type"
          :align="item.align || 'center'"
        >
          <template #default="{ row, column, $index }" v-if="item.type === 'index'">
            {{ getIndex($index) }}
          </template>
          <template #default="{ row, column, $index }" v-if="!item.type">
            <slot :name="item.prop" :rows="row" :index="$index">
              <template v-if="item.prop === 'operator'">
                <el-button type="warning" size="small" icon="View" @click="viewFunc(row)">查看</el-button>
                <el-button type="primary" size="small" icon="Edit" @click="editFunc(row)">编辑</el-button>
                <el-button type="danger" size="small" icon="Delete" @click="handleDelete(row)">删除</el-button>
              </template>
              <!-- 处理格式化后显示数据 -->
              <span v-else-if="item.formatter">
                {{ item.formatter(row[item.prop]) }}
              </span>
              <span v-else>
                {{ row[item.prop] }}
              </span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="hasPagination"
      class="paginationBox"
      :current-page="currentPage"
      :page-size="pageSize"
      :background="true"
      :layout="layout"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { ElMessageBox } from "element-plus";

const props = defineProps({
  hasToolbar: {
    type: Boolean,
    default: true,
  },
  //表格相关
  tableData: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
  rowKey: {
    type: String,
    default: "id",
  },
  //分页相关
  hasPagination: {
    type: Boolean,
    default: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },

  layout: {
    type: String,
    default: "total, prev, pager, next",
  },
  changePage: {
    type: Function,
    default: () => {},
  },
  viewFunc: {
    type: Function,
    default: () => {},
  },
  editFunc: {
    type: Function,
    default: () => {},
  },
  delFunc: {
    type: Function,
    default: () => {},
  },
  delSelection: {
    type: Function,
    default: () => {},
  },
  refresh: {
    type: Function,
    default: () => {},
  },
});
let { tableData, columns, rowKey, hasToolbar, hasPagination, total, currentPage, pageSize, layout } = toRefs(props);

// 选择项发生变化时触发该事件？
const multipleSelection = ref([]);
const handleSelectionChange = (selection) => {
  multipleSelection.value = selection;
};

//当前页码发生变化的事件
const handleCurrentChange = (val) => {
  props.changePage(val);
};

props.columns.forEach((item) => {
  if (item.visible === undefined) {
    item.visible = true;
  }
});

const handleDelete = (row) => {
  ElMessageBox.confirm("确认删除吗", "提示", {
    type: "warning",
  })
    .then(async () => {
      props.delFunc(row);
    })
    .catch(() => {});
};

const getIndex = (index) => {
  return index + 1 + (currentPage.value - 1) * pageSize.value;
};
</script>

<style lang="scss" scoped>
.table-custom-container {
  background-color: #fff;
  padding: 18px;
}
.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}
.table-toolbar-right {
  display: flex;
}
.paginationBox {
  margin-top: 20px;
}
</style>
