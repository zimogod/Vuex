<template>
  <div id="app">
    <zimo-btn types="primary">紫漠的按钮</zimo-btn>
    <zimo-btn types="success">成功按钮</zimo-btn>
    <zimo-btn types="info">灰色按钮</zimo-btn>
    <zimo-btn types="warning" size="medium">警告按钮</zimo-btn>
    <zimo-btn types="primary" size="small">常用按钮</zimo-btn>
    <zimo-btn types="success" size="mini">成功按钮</zimo-btn>
    <zimo-btn types="info">灰色按钮</zimo-btn>
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
    <!-- <div>{{ aaa }}</div> -->
    <!-- <div>{{ $store.state.home.num }}</div> -->
    <!-- <div>{{ home.num }}</div>
    <div>{{ home.num }}</div> -->
    <!-- <div>{{ bbb }}</div> -->
    <!-- <Child></Child> -->
    <!-- <div>{{ nums }}</div> -->
    <!-- <div>{{ money.num }}</div> -->
    <!-- 通过dispatch派发actions中的方法 -->
    <!-- <button @click="$store.dispatch('ADD_NUM',5)">actions+5</button> -->
    <!-- <button @click="ADD_NUM(5)">actions+5</button> -->
    <!-- 通过commit提交mutations中的方法 -->
    <!-- <button @click="$store.commit('addNum',10)">mutations+10</button> -->
    <!-- <button @click="addNum(10)">mutations+10</button> -->
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用"></el-checkbox>
    <el-checkbox label="选中且禁用"></el-checkbox>
  </el-checkbox-group>
    
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>

    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>

    <div>home：{{ home.num }}</div>
    <div>money：{{ money.num }}</div>
    <button @click="HOME_ADD(5)">home异步+5</button>
    <button @click="homeAdd(10)">home同步+10</button>

    <button @click="ADD(2)">money异步+2</button>
    <button @click="add(2)">money同步+2</button>

  </div>
</template>

<script>
import Child from "./components/child";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
// import zimoBtn from './client/button/button';
export default {
  name: "App",
  // 局部注册一个组件
  components: { Child },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  data() {
    return {
      checkList:[],
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
    };
  },
  computed: {
    ...mapState(['home','money']),
    // ...mapState('money',{num:'num'}),
    ...mapGetters(["aaa"]),
    // bbb() {
    //   return this.num2 + 100;
    // },
  },
  // computed:mapState(['num','names']),
  methods: {
    ...mapMutations('home',{homeAdd:"addNum"}),
    ...mapActions('home',{HOME_ADD:"ADD_NUM"}),
    ...mapMutations('money',{add:"addNum"}),
    ...mapActions('money',{ADD:"ADD_NUM"}),
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






