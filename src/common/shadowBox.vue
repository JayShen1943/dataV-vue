<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-28 16:02:41
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 20:23:38
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
      default: 448,
    },
    height: {
      type: Number,
      default: 362,
    },
  },
};
</script>

<style lang="less" scoped>
.shadow-box {
  box-sizing: border-box;
  background: rgba(25, 38, 67, 0.8);
  border: 0.5px solid #1572be !important;
  box-shadow: 0px 0px 20px 0px #005fac inset;
  margin-right: 10px;
  &__title {
    font-size: 26px;
    font-weight: 400;
    background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    -webkit-background-clip: text;
    color: transparent;
    text-align: left;
    margin: 30px 0 30px 10px;
    display: flex;
    align-items: center;
  }
  &__content {
    height: 100%;
  }
}
</style>