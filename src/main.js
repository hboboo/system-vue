import { createApp } from 'vue'

import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import router from './router'

const app = createApp(App)

//注册ElementPlus图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//使用ElementPlus
app.use(ElementPlus, {
  locale: zhCn,
})
//路由
app.use(router)
app.mount('#app')



