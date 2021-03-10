<!--
 * @Descripttion: 竖线小图标
 * @Author: JayShen
 * @Date: 2021-03-01 11:36:38
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-10 10:11:38
-->
<template>
  <div
    class="vertical-line"
    :style="`background:${lineColor};width:${lineWidth}rem; height:${lineHeight}rem;`"
  ></div>
</template>

<script>
export default {
  name: "VerticalLine",
  props: {
    lineColor: {
      type: String,
      default: "#fcce48;",
    },
    lineWidth: {
      type: Number,
      default: 0.0125,
    },
    lineHeight: {
      type: Number,
      default: 0.1375,
    },
  },
};
</script>

<style lang="less" scoped>
.vertical-line {
  display: inline-block;
  margin:0rem .0625rem 0px .0625rem 
  // vertical-align: middle;
}
</style>