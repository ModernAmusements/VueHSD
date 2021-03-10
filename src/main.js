import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MondernAmusementKit from "./plugins/MondernAmusementKit"; // etc 
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(MondernAmusementKit);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
