<template>
  <div id="app">
    <!-- <zimo-btn types="warning">警告按钮</zimo-btn>
    <zimo-btn types="primary">常用按钮</zimo-btn>
    <zimo-btn types="success">成功按钮</zimo-btn>
    <zimo-btn types="info">灰色按钮</zimo-btn>
    <br/>
    <br/>
    <zimo-btn types="warning" size="medium">警告按钮</zimo-btn>
    <zimo-btn types="primary" size="small">常用按钮</zimo-btn>
    <zimo-btn types="success" size="mini">成功按钮</zimo-btn>
    <zimo-btn types="info">灰色按钮</zimo-btn> -->
    <!-- <div>{{ $store.state.num }}</div> -->
    <div>{{ num }}</div>
    <div>{{ names }}</div>
    <Child></Child>
    <div>{{ nums }}</div>
    <!-- 通过dispatch派发actions中的方法 -->
    <!-- <button @click="$store.dispatch('ADD_NUM',5)">actions+5</button> -->
    <button @click="ADD_NUM(5)">actions+5</button>
    <!-- 通过commit提交mutations中的方法 -->
    <!-- <button @click="$store.commit('addNum',10)">mutations+10</button> -->
    <button @click="addNum(10)">mutations+10</button>
  </div>
</template>

<script>
import Child from './components/child';
import { mapState,mapMutations,mapActions } from 'vuex';
// import zimoBtn from './client/button/button';
export default {
  name: 'App',
  components:{Child},
  data(){
    return {
      nums:1000
    }
  },
  computed:{
    ...mapState(['num','names'])
  },
  methods:{
    ...mapMutations(['addNum']),
    ...mapActions(['ADD_NUM']),
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
