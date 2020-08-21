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
    <zimo-btn types="info">灰色按钮</zimo-btn>-->
    <!-- <div>{{ $store.state.num }}</div> -->
    <div>{{ aaa }}</div>
    <div>{{ $store.state.home.num }}</div>
    <div>{{ home.num }}</div>
    <div>{{ home.num }}</div>
    <div>{{ bbb }}</div>
    <Child></Child>
    <div>{{ nums }}</div>
    <div>{{ money.num }}</div>
    <!-- 通过dispatch派发actions中的方法 -->
    <!-- <button @click="$store.dispatch('ADD_NUM',5)">actions+5</button> -->
    <button @click="ADD_NUM(5)">actions+5</button>
    <!-- 通过commit提交mutations中的方法 -->
    <!-- <button @click="$store.commit('addNum',10)">mutations+10</button> -->
    <button @click="addNum(10)">mutations+10</button>
  </div>
</template>

<script>
import Child from "./components/child";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
// import zimoBtn from './client/button/button';
export default {
  name: "App",
  components: { Child },
  created() {
    console.log(this,'000')
    //在页面加载时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem("store"))
    //     )
    //   );
    // }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    // });
  },
  data() {
    return {
      nums: 1000,
      num2: 2000,
    };
  },
  computed: {
    ...mapState(['home','money']),
    ...mapGetters(["aaa"]),
    bbb() {
      return this.num2 + 100;
    },
  },
  // computed:mapState(['num','names']),
  methods: {
    ...mapMutations(["addNum"]),
    ...mapActions(["ADD_NUM"]),
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>






