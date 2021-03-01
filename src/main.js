import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";
import VueSweetalert2 from "vue-sweetalert2";
import VueCarousel from "vue-carousel";

import Global from "./plugins/global";
import { auth } from "./firebaseconfig";

import { ValidationObserver } from "vee-validate";
import InputWithValidation from "@/components/InputWithValidation";
import ContentLoader from "@/components/ContentLoader";

import "./vee-validate";
import "./assets/scss/app.scss";
import "sweetalert2/dist/sweetalert2.min.css";
import "./registerServiceWorker";

Vue.use(Buefy);
Vue.use(Global);
Vue.use(VueSweetalert2);
Vue.use(VueCarousel);

const defaultDocumentTitle = "Community Fest and Code";

router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("InputWithValidation", InputWithValidation);
Vue.component("ContentLoader", ContentLoader);

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
