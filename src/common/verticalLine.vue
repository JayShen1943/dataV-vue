<!--
 * @Descripttion: 竖线小图标
 * @Author: JayShen
 * @Date: 2021-03-01 11:36:38
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 18:15:08
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
      default: 5,
    },
    lineHeight: {
      type: Number,
      default: 43,
    },
    lineMargin: {
      type: String,
      default: "0px 20px 0px 20px",
    },
  },
};
</script>

<style lang="less" scoped>
.vertical-line {
  display: inline-block;
  vertical-align: middle;
}
</style>