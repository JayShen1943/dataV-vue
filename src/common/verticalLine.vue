<!--
 * @Descripttion: 竖线小图标
 * @Author: JayShen
 * @Date: 2021-03-01 11:36:38
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 11:36:23
-->
<template>
  <div
    class="vertical-line"
    :style="`background:${lineColor};width:${lineWidth}px; height:${lineHeight}px;margin:${lineMargin}`"
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
      default: 4,
    },
    lineHeight: {
      type: Number,
      default: 26,
    },
    lineMargin: {
      type: String,
      default: "0px 10px 0px 10px",
    },
  },
};
</script>

<style lang="less" scoped>
.vertical-line {
  display: inline-block;
  // vertical-align: middle;
}
</style>