import Vue from 'vue'
import App from './App.vue'
// import zimoBtn from './btn/btn';
// console.log(zimoBtn)
// import zimoBtn from './client/button/button';
import {
  Button,
  CheckboxGroup,
  Checkbox,
  DatePicker
} from 'element-ui';
import router from './router';
// import { zimoBtn } from 'zimo-button';

// console.log(zimoBtn,'===')
import store from './store';
// Vue.use(zimoBtn);
// Vue.use(zimoBtn);
Vue.use(Button);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(DatePicker);
// 最后打包发布 之后去掉所有的提示信息
Vue.config.productionTip = false

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App),
})
