import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui"; //element-ui的全部组件
import "element-ui/lib/theme-chalk/index.css"; //element-ui的css
Vue.use(ElementUI); //使用elementUI

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: "ARp2G0txdIMzhTPGS3xHSCAWY06pdLaj"
});

// 引入rem计算方法
import refreshRem from "./uitls/reset";
refreshRem(window);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
