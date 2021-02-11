import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Buefy from "buefy";
import "./assets/scss/app.scss";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { auth } from "./firebaseconfig";

Vue.use(Buefy);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

let instance;
auth.onAuthStateChanged(() => {
  if (!instance) {
    instance = new Vue({
      router,
      render: h => h(App),
    }).$mount("#app");
  }
});
