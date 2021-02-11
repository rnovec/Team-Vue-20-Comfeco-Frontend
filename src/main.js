import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import VueSweetalert2 from "vue-sweetalert2";

import Comfeco from "./comfeco";
import { auth } from "./firebaseconfig";

import "./assets/scss/app.scss";
import "sweetalert2/dist/sweetalert2.min.css";
import "./registerServiceWorker";

Vue.use(Buefy);
Vue.use(Comfeco);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount("#app");
  }
});
