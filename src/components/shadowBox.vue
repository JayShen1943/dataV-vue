<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-28 16:02:41
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-28 16:23:51
-->
<template>
  <div class="shadow-box">
    <h3 class="shadow-box__title">{{ title }}</h3>
    <div class="shadow-box__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShadowBox",
  props: {
    title: {
      type: String,
      default: "名字",
    },
  },
};
</script>

<style lang="less" scoped>
.shadow-box {
  width: 400px;
  height: 400px;
  opacity: 1;
  background: rgba(25, 38, 67, 0.8);
  border: 2px solid #1572be;
  box-shadow: 0px 0px 20px 0px #005fac inset;
  &__title {
    color: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  }
  &__content {
    margin: 0 auto;
  }
}
</style>