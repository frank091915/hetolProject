import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入rem计算方法
import refreshRem from "./uitls/reset"
refreshRem(window)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
