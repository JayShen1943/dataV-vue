<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-28 16:02:41
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-10 10:24:09
-->
<template>
  <div class="shadow-box" :style="`width:${width}rem;height:${height}rem`">
    <div v-if="title" class="shadow-box__title">
      <VerticalLine :line-color="lineColor" />{{ title }}
    </div>
    <div class="shadow-box__content">
      <!-- <slot></slot> -->
      <dv-active-ring-chart
        :config="config"
        style="width: 100px; height: 100px"
      />
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
      default: 2.525,
    },
    height: {
      type: Number,
      default: 2.05,
    },
  },
  data() {
    return {
      config: [
        {
          name: "周口",
          value: 55,
        },
        {
          name: "南阳",
          value: 120,
        },
        {
          name: "西峡",
          value: 78,
        },
        {
          name: "驻马店",
          value: 66,
        },
        {
          name: "新乡",
          value: 80,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.shadow-box {
  box-sizing: border-box;
  // width: 754px;
  // height: 610px;
  padding: 0.1625rem /* 13/80 */;
  background: rgba(25, 38, 67, 0.8);
  border: 0.025rem solid #1572be;
  box-shadow: 0px 0px 0.25rem 0px #005fac inset;
  margin-right: 0.0625rem;
  &__title {
    // font-size: 0.3rem /* 24/80 */;
    font-size: 0.2rem;
    font-weight: 400;
    background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    -webkit-background-clip: text;
    color: transparent;
    text-align: left;
  }
  &__content {
    width: 100%;
  }
}
</style>