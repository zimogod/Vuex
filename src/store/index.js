import Vue from 'vue';
import Vuex from 'vuex';

import * as home from './home';
import * as money from './money';

// 全局使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    // modules 是固定的
    modules:{
        home,
        money,
    }
})
export default store;





