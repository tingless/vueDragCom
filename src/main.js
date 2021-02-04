import Vue from "vue";
import App from "./App.vue";
import store from "./store";

//scss
import "./style/index.scss";
//element-ui
import "./plugin/element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
