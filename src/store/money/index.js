// const addNum = 'addNum';
// const ADD_NUM = 'ADD_NUM';
const state = {
    num:300
}
const mutations = {
    addNum(state,ten){
        state.num += ten;
    },   
}
const actions = {
    ADD_NUM({commit},ten){
        commit('addNum',ten)
    }
}
const getters = {
    bbb(state){
        return state.num + 100;
    }
}
export {
    state,
    mutations,
    actions,
    getters
}
