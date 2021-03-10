import "@/assets/scss/masterHsd.scss";
import "@/assets/js/application.js";
// import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";

export default {
  install(Vue) {
    // Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  }
};
