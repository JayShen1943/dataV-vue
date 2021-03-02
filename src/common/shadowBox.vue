<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-28 16:02:41
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-02 17:33:31
-->
<template>
  <div class="shadow-box" :style="`width:${width}px;height:${height}px`">
    <h3 v-if="title" class="shadow-box__title">
      <VerticalLine :line-color="lineColor" />{{ title }}
    </h3>
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
      default: "",
    },
    lineColor: {
      type: String,
      default: "#fcce48",
    },
    width: {
      type: Number,
      default: 754,
    },
    height: {
      type: Number,
      default: 610,
    },
  },
};
</script>

<style lang="less" scoped>
.shadow-box {
  // width: 754px;
  // height: 610px;
  background: rgba(25, 38, 67, 0.8);
  border: 0.025rem solid #1572be;
  box-shadow: 0px 0px 0.25rem 0px #005fac inset;
  // margin-top: 20px;
  margin-right: 20px;
  &__title {
    // font-size: 0.3rem /* 24/80 */;
    font-size: 46px;
    font-weight: 400;
    background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    -webkit-background-clip: text;
    color: transparent;
    text-align: left;
    margin-left: 50px;
  }
}
</style>