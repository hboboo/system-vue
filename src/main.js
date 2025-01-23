import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/css/common.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import router from "./router";

const app = createApp(App);

//注册ElementPlus图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
//使用ElementPlus
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(router);
app.use(createPinia());
app.mount("#app");
