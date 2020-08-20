import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './actions-types';
// 全局使用vuex
Vue.use(Vuex);

const state = {
    num:100,
    names:'剑哥哥'
};
const mutations = {
    // 第一个参数必须是state
    [types.addNum](state,page){
        state.num += page;
    }
};
const actions = {
    [types.ADD_NUM](context,page){
        context.commit(types.addNum,page)
    }
};
const getters = {};
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store;


