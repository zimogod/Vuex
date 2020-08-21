import Vue from 'vue'
import App from './App.vue'
// import zimoBtn from './client/button/button';
import ElementUI from 'element-ui';
// import { zimoBtn } from 'zimo-button';
import 'element-ui/lib/theme-chalk/index.css';
// console.log(zimoBtn,'===')
import store from './store';
// Vue.use(zimoBtn);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
