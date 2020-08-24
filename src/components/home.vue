<template>
  <div class="home">
    home组件
    <!-- success:绿色 info:灰色 danger:红色 parmary:蓝色 -->
      <!-- large:大按钮 normal:默认按钮 small:小按钮 mini:小小按钮 -->
      <!-- <zimo-btn type="success" size="large">编辑</zimo-btn>
        <zimo-btn type="info" size="normal">查看</zimo-btn>
        <zimo-btn type="danger" size="small">删除</zimo-btn>
      <zimo-btn type="parmary" size="mini">删除</zimo-btn>-->
    <zimo types="primary" size="large">常用</zimo>
    <zimo types="info">默认</zimo>
    <zimo types="danger" size="small">删除</zimo>
    <zimo types="success" size="mini">成功</zimo>
  </div>
</template>

<script>
import zimo from '../btn/btn.vue';
export default {
  name: 'home',
  components:{zimo},
  data(){
    return {
      
    }
  },
}
</script>

<style lang="less">
.home {
 
}
</style>
