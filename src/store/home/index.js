// const addNum = 'addNum';
// const ADD_NUM = 'ADD_NUM';


const state = {
    num:100
}
const mutations = {
    addNum(state,ten){
        state.num += ten;
    }   
}
const actions = {
    ADD_NUM({commit},ten){
        commit('addNum',ten)
    }
}
const getters = {
    aaa(state){
        return state.num + 200;
    }
}

// namespaced不能改变
const namespaced = true;

export {
    namespaced,
    state,
    mutations,
    actions,
    getters
}
