import Vue from 'vue';
import Vuex from 'vuex';
// 全局使用vuex
Vue.use(Vuex);

const state = {
    num:100
};
const mutations = {
    addNum(state,page){
        state.num += page;
    }
};
const actions = {
    ADD_NUM({commit},page){
        commit('addNum',page)
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