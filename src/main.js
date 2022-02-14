import Vue from "vue";
import App from "./App.vue";

import r from "./router";

const WHITE_LIST = ["/login", "/error"];

r.beforeEach((to, from, next) => {
  if (WHITE_LIST.includes(to.path)) {
    next();
  } else {
    let account = sessionStorage.getItem("account");
    if (account) {
      next();
    } else {
      next("/login");
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router: r,
  render: (h) => h(App),
}).$mount("#app");
