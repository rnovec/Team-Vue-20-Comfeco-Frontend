import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import VueSweetalert2 from "vue-sweetalert2";

import Global from "./plugins/global";
import { auth } from "./firebaseconfig";

import { ValidationObserver } from "vee-validate";
import InputWithValidation from "@/components/InputWithValidation";

import "./vee-validate";
import "./assets/scss/app.scss";
import "sweetalert2/dist/sweetalert2.min.css";
import "./registerServiceWorker";

Vue.use(Buefy);
Vue.use(Global);
Vue.use(VueSweetalert2);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("InputWithValidation", InputWithValidation);

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
