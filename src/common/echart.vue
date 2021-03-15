<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-01 15:50:07
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 20:24:17
-->
<template>
  <div
    ref="chart"
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>
import echarts from "echarts";
export default {
  name: "echart",
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "80%",
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    options: {
      handler(options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true);
      },
      deep: true,
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 初始化echart
      const dom = this.$refs.chart;
      this.chart = echarts.init(dom);
      this.chart.setOption(this.options, true);
    },
  },
};
</script>

<style>
</style>
