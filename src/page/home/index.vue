<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 15:06:12
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-02 15:25:20
-->
<template>
  <div>
    <div class="jump-title" @click="jump('/centerScreen')">中央大屏</div>
    <div class="jump-title" @click="jump('/leftScreen')">左侧副屏</div>
    <div class="jump-title" @click="jump('/rightScreen')">右侧副屏</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    jump(url) {
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.jump-title {
  font-size: 100px;
  color: #fff;
  font-weight: bold;
  &:hover {
    // color: saddlebrown;
    color: skyblue;
  }
}
</style>