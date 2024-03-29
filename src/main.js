import Vue from "vue";
import App from "./App.vue";
import * as Filters from "./utils/filters";
import router from "./router";
import axios from "axios";
import store from "./store/store";
import { urlFirebase } from "./firebase";

Vue.config.productionTip = false;
axios.defaults.baseURL = urlFirebase;
Vue.prototype.$http = axios;

Object.keys(Filters).forEach((f) => {
    Vue.filter(f, Filters[f]);
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
