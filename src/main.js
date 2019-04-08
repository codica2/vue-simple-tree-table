import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VSimpleTreeTable from "./index";
import "./styles/all.scss";

Vue.use(VSimpleTreeTable);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
