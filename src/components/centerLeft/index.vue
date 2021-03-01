<!--
 * @Descripttion: 中屏幕 左侧数据
 * @Author: JayShen
 * @Date: 2021-03-01 17:02:36
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 21:16:50
-->
<template>
  <div class="left-data">
    <div class="left-row1">
      <ShadowBox class="left-row1-box1" title="品牌商类型" line-color="#2DD3B3">
        <div class="left-row1-box1__legend">
          <div class="left-row1-box1__legend__text">自行车</div>
          <div class="left-row1-box1__legend__text">自行车</div>
          <div class="left-row1-box1__legend__text">自行车</div>
        </div>
        <dv-active-ring-chart
          :config="configRow1Box1"
          class="left-row1-box1__chart"
          style="width: 305px; height: 300px"
        />
      </ShadowBox>
      <ShadowBox title="品牌商规模" line-color="#FCCE48">
        <dv-capsule-chart
          :config="configRow1Box2"
          style="
            width: 90%;
            height: 300px;
            margin-left: 30px;
            margin-top: 80px;
          "
      /></ShadowBox>
      <ShadowBox class="left-row1-box3" title="地域分布" line-color="#3DAAEB ">
        <!-- <Echart :options="options" style="width: 100%; height: 305px" /> -->
        <div class="left-row1-box3__legend left-row1-box3__legend__right">
          <div
            v-for="(item, index) in areaLeft"
            :key="index"
            class="left-row1-box1__legend__text"
          >
            {{ item.val
            }}<VerticalLine
              :line-width="8"
              :line-height="27"
              :line-color="item.color"
            />
          </div>
        </div>
        <dv-active-ring-chart
          :config="configRow1Box3"
          class="left-row1-box3__chart"
          style="width: 305px; height: 305px"
        />
        <div class="left-row1-box3__legend left-row1-box3__legend__left">
          <div
            v-for="(item, index) in areaRight"
            :key="index"
            class="left-row1-box1__legend__text"
          >
            {{ item.val
            }}<VerticalLine
              :line-width="8"
              :line-height="27"
              :line-color="item.color"
            />
          </div>
        </div>
      </ShadowBox>
    </div>
    <div class="left-row2">
      <ShadowBox title="款式分类" line-color="#FCCE48 ">
        <!-- <Echart :options="configRow2Box1" style="width: 505px; height: 505px" /> -->
        <Echart :options="configRow2Box1" style="width: 180px; height: 180px" />
      </ShadowBox>
      <ShadowBox title="订单金额" line-color="#FF7D7F ">
        <Echart :options="configRow2Box2" style="width: 90%; height: 380px" />
      </ShadowBox>
      <ShadowBox title="订单增长情况" line-color="#2DD3B3">
        <Echart :options="configRow2Box3" style="width: 90%; height: 380px" />
      </ShadowBox>
    </div>
    <div class="left-row3">
      <ShadowBox title="服务类型" line-color="#2DD3B3"> </ShadowBox>
      <ShadowBox title="订单生产类型" line-color="#664CC7">
        <Echart :options="configRow3Box2" style="width: 100%; height: 450px" />
      </ShadowBox>
      <ShadowBox title="颜色构成" line-color="#2DD3B3">
        <Echart :options="configRow3Box3" />
      </ShadowBox>
    </div>
  </div>
</template>

<script>
import { pieColor, pieColor2 } from "@/utils/echartColor";
import { FeedbackOptions } from "./options";
import echart from "../../common/echart.vue";
// import Echart from "../../common/echart.vue";
export default {
  components: { echart },
  name: "CenterLeft",
  // components: { Echart },
  data() {
    return {
      FeedbackOptions,
      areaLeft: [
        {
          val: " 华东区",
          color: "#FCCE48",
        },
        {
          val: " 华北区",
          color: "#315EEF",
        },
        {
          val: " 华中区",
          color: "#E7A976",
        },
        {
          val: " 华南区",
          color: "#60CAAE",
        },
      ],
      areaRight: [
        {
          val: " 东北区",
          color: "#3DAAEB",
        },
        {
          val: " 西北区",
          color: "#E96074",
        },
        {
          val: " 西南区",
          color: "#664CC7",
        },
      ],
      configRow1Box1: {
        data: [
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
        lineWidth: 50,
        radius: "70%",
        activeRadius: "75%",
        digitalFlopStyle: {
          fontSize: 0,
          fill: "#fff",
        },
        color: pieColor,
        legend: {
          type: "plain",
          show: "true",
          data: ["西凉", "益州", "兖州", "荆州", "幽州"],
        },
      },
      configRow1Box2: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 123,
          },
          {
            name: "漯河",
            value: 98,
          },
          {
            name: "郑州",
            value: 75,
          },
          {
            name: "西峡",
            value: 66,
          },
          {
            name: "西峡1",
            value: 66,
          },
        ],
        color: pieColor2,
        unit: "占比",
        showValue: true,
      },
      configRow1Box3: {
        radius: "70%",
        activeRadius: "80%",
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 123,
          },
          {
            name: "漯河",
            value: 98,
          },
          {
            name: "郑州",
            value: 75,
          },
          {
            name: "西峡",
            value: 66,
          },
        ],
        color: pieColor2,
      },
      // 百分比环形图
      configRow2Box1: {
        title: {
          left: "45%",
          top: "40%",
          textAlign: "center",
          textStyle: {
            fontSize: "16",
            fontWeight: "500",
            color: "#909dff",
            textAlign: "center",
          },
        },
        series: [
          {
            type: "pie",
            startAngle: 0,
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            color: "#FCCE48",
            data: [
              {
                value: 30,
                name: "asd",
                itemStyle: {},
                label: {
                  show: false,
                },
                labelLine: {
                  normal: {
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                  },
                },
                hoverAnimation: false,
              },
              {
                label: {
                  show: false,
                },
                labelLine: {
                  normal: {
                    smooth: true,
                    lineStyle: {
                      width: 0,
                    },
                  },
                },
                value: 100,
                hoverAnimation: true,
                itemStyle: {
                  color: "#1765A5",
                },
              },
            ],
          },
        ],
      },
      configRow2Box2: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            color: ["#C76668", "#6BB5FE", "#20A188", "#E7A976"],
          },
        ],
      },
      // 订单增长情况
      configRow2Box3: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 32,
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#010A1C",
              width: 3, //这里是为了突出显示加上的
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 32,
            },
          },
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            color: "#60CAAE",
            barWidth: 12,
            borderRadius: [3, 3, 0, 0],
          },
        ],
      },
      // 订单生产类型
      configRow3Box2: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "80%",
            color: pieColor,
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      // 颜色构成
      configRow3Box3: {
        title: {
          text: "世界人口总量",
          subtext: "数据来自网络",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2011年", "2012年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped >
.left-data {
  // display: inline-block;
  .left-row1 {
    display: flex;
    .left-row1-box1 {
      display: flex;
      position: relative;
      &__chart {
        position: absolute;
        top: 188px;
        right: 130px;
      }
      &__legend {
        position: absolute;
        top: 188px;
        left: 70px;
        &__text {
          font-size: 32px;
          font-weight: 400;
          text-align: left;
          color: #c5e4ff;
          line-height: 38px;
          margin-bottom: 35px;
        }
        :last-child {
          margin-bottom: 0px;
        }
      }
    }
    .left-row1-box3 {
      position: relative;
      &__chart {
        position: absolute;
        top: 188px;
        right: 221px;
      }
      &__legend {
        position: absolute;
        top: 188px;
        &__text {
          font-size: 32px;
          font-weight: 400;
          text-align: left;
          color: #c5e4ff;
          line-height: 38px;
          margin-bottom: 35px;
        }
        :last-child {
          margin-bottom: 0px;
        }
      }
      &__legend__right {
        left: 70px;
      }
      &__legend__left {
        right: 70px !important;
      }
    }
  }
  .left-row2 {
    display: flex;
    margin-top: 20px;
  }
  .left-row3 {
    display: flex;
    margin-top: 20px;
  }
}
</style>