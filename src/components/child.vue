<template>
  <div class="child">
    <div>{{ $store.state.num }}</div>
  </div>
</template>

<script>
// import zimoBtn from './client/button/button';
export default {
  name: 'child',
  // components:{zimoBtn}
}
</script>

<style lang="less">
.child {
  width: 100%;
  height: 100px;
  background-color: gold;
}
</style>
