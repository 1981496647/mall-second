import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/index";
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont-a/iconfont.css";
import VueLazyload from "vue-lazyload";
import Toast from "./components/content/toast";
const loadingImage = require("./assets/img/loading.gif");
Vue.use(VueLazyload, {
  loading: loadingImage,
});
Vue.config.productionTip = false;

Vue.use(Toast);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
