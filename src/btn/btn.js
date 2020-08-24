import zimo from './btn.vue';

// Vue.component():全局注册一个组件的方法,第一个参数为组件名，第二个参数
// 是当前注册的组件信息

// components:{} 局部注册组件
// 要想使用Vue.use()方法，当前插件、组件内部必须要有install方法
zimo.install = Vue => Vue.component(zimo.name,zimo);

export default zimo;

