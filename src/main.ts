// import * as rules from 'vee-validate/dist/rules';
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

// Object.keys(rules).forEach((rule) => {
//   extend(rule, rules[rule]);
// });
//
// Vue.component('ValidationObserver', ValidationObserver);
// Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
