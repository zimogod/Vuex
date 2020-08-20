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
    <div>{{ $store.state.num }}</div>
    <Child></Child>
    <button @click="$store.dispatch('ADD_NUM',10)">actions+10</button>
    <button @click="$store.commit('addNum',10)">mutations+10</button>
  </div>
</template>

<script>
import Child from './components/child'
// import zimoBtn from './client/button/button';
export default {
  name: 'App',
  components:{Child},
  methods:{}
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
