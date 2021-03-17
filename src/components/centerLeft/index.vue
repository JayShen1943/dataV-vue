<!--
 * @Descripttion: 中屏幕 左侧数据
 * @Author: JayShen
 * @Date: 2021-03-01 17:02:36
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-17 16:40:11
-->
<template>
  <div class="left-data">
    <div class="left-row1">
      <ShadowBox class="left-row1-box1" title="品牌商类型" line-color="#2DD3B3">
        <div class="left-row1-box1__legend">
          <div
            v-for="(item, index) in brandTypeTitle"
            :key="item + index"
            class="left-row1-box1__legend__text"
          >
            {{ item }}
          </div>
        </div>
        <dv-active-ring-chart
          :config="brandType(brandTypeData)"
          class="left-row1-box1__chart"
          style="width: 60%; height: 60%"
        />
      </ShadowBox>
      <ShadowBox title="品牌商规模" line-color="#FCCE48" class="left-row1-box2">
        <dv-capsule-chart
          :config="brandSize(brandSizeData)"
          style="width: 90%; height: 70%; margin-left: 30px; margin-top: 30px"
          class=""
      /></ShadowBox>
      <ShadowBox class="left-row1-box3" title="地域分布" line-color="#3DAAEB ">
        <div class="left-row1-box3__legend left-row1-box3__legend__right">
          <div
            v-for="(item, index) in areaLeft"
            :key="index"
            class="left-row1-box1__legend__text"
          >
            {{ item.val
            }}<VerticalLine
              :line-width="5"
              :line-height="16"
              :line-color="item.color"
            />
          </div>
        </div>
        <dv-active-ring-chart
          :config="geographicalDistribution(geographicalDistributionData)"
          class="left-row1-box3__chart"
          style="width: 60%; height: 60%"
        />
        <div class="left-row1-box3__legend left-row1-box3__legend__left">
          <div
            v-for="(item, index) in areaRight"
            :key="index"
            class="left-row1-box1__legend__text"
          >
            {{ item.val
            }}<VerticalLine
              :line-width="5"
              :line-height="16"
              :line-color="item.color"
            />
          </div>
        </div>
      </ShadowBox>
    </div>
    <div v-if="styleClassificationData.length" class="left-row2">
      <ShadowBox title="款式分类" line-color="#FCCE48 ">
        <div class="left-row2-box1__flex">
          <div class="left-row2-box1__flex__title">
            {{ styleClassificationData[0].gender }}
          </div>
          <Echart
            :options="
              styleClassification(
                styleClassificationData[0].num,
                ['#FCCE48', '#1765A5'],
                styleClassificationTotal
              )
            "
            style="width: 130px; height: 130px"
          />
          <div class="left-row2-box1__flex__title">
            {{ styleClassificationData[1].gender }}
          </div>
          <Echart
            :options="
              styleClassification(
                styleClassificationData[1].num,
                ['#FF7D7F', '#1765A5'],
                styleClassificationTotal
              )
            "
            style="width: 130px; height: 130px"
          />
        </div>
        <div class="left-row2-box1__flex">
          <div class="left-row2-box1__flex__title">
            {{ styleClassificationData[2].gender }}
          </div>
          <Echart
            :options="
              styleClassification(
                styleClassificationData[2].num,
                ['#2DD3B3', '#1765A5'],
                styleClassificationTotal
              )
            "
            style="width: 130px; height: 130px"
          />
          <div class="left-row2-box1__flex__title">
            {{ styleClassificationData[3].gender }}
          </div>
          <Echart
            :options="
              styleClassification(
                styleClassificationData[3].num,
                ['#664CC7', '#1765A5'],
                styleClassificationTotal
              )
            "
            style="width: 130px; height: 130px"
          />
        </div>
      </ShadowBox>
      <ShadowBox title="订单金额" line-color="#FF7D7F ">
        <Echart
          :options="orderAmount(orderAmountData)"
          style="width: 90%; height: 70%; margin-left: 20px"
        />
      </ShadowBox>
      <ShadowBox title="订单增长情况" line-color="#2DD3B3">
        <Echart
          :options="orderGrowth(orderGrowthData)"
          style="width: 90%; height: 70%; margin-left: 20px"
        />
      </ShadowBox>
    </div>
    <div class="left-row3">
      <ShadowBox title="服务类型" line-color="#2DD3B3">
        <Echart
          v-if="serviceTypeData.length"
          :options="serviceType(serviceTypeData)"
          style="width: 90%; height: 70%; margin-left: 20px"
        />
      </ShadowBox>
      <ShadowBox title="订单生产类型" line-color="#664CC7">
        <Echart
          :options="orderProductionType(orderProductionTypeData)"
          style="width: 100%; height: 70%"
        />
      </ShadowBox>
      <ShadowBox title="颜色构成" line-color="#2DD3B3">
        <Echart
          :options="colorComposition(colorCompositionData)"
          style="width: 100%; height: 70%"
        />
      </ShadowBox>
    </div>
  </div>
</template>

<script>
import { findCenterScreenDataLeft } from "@/service/api";
import {
  serviceType,
  brandType,
  brandSize,
  geographicalDistribution,
  styleClassification,
  orderAmount,
  orderGrowth,
  orderProductionType,
  colorComposition,
} from "./options";
export default {
  name: "CenterLeft",
  data() {
    return {
      brandType, // 品牌商类型--饼图
      brandSize, // 品牌商类型规模--柱形图
      serviceType,
      geographicalDistribution, // 地域分布--饼图
      styleClassification, // 款式类型--百分比环图
      orderAmount, // 订单金额--百分比环形图
      orderGrowth, // 订单增长情况--柱状图
      orderProductionType, // 订单生产类型
      colorComposition, // 颜色构成
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
      centerLeftTimer: null, // 定时器
      leftLoading: true,
      brandTypeData: [], // 品牌商类型
      brandTypeTitle: [],
      brandSizeData: [], // 品牌商规模
      colorCompositionData: [], // 颜色构成
      styleClassificationData: [], // 款式分类
      styleClassificationTotal: 0, // 款式分类总数
      orderGrowthData: [], // 订单增长情况
      serviceTypeData: [], // 服务类型
      orderProductionTypeData: [], // 订单生产类型
      orderAmountData: [], // 订单金额
      geographicalDistributionData: [], // 地域分布
    };
  },
  created() {
    this.getCenterScreenDataLeft();
  },
  mounted() {
    const centerLeftTimerNum = 1000 * 60 * 60;
    this.centerLeftTimer = setInterval(() => {
      this.getCenterScreenDataLeft();
    }, centerLeftTimerNum);
  },
  beforeDestroy() {
    clearInterval(this.centerLeftTimer); // 清除定时器
    this.centerLeftTimer = null;
  },
  methods: {
    async getCenterScreenDataLeft() {
      const RES = await findCenterScreenDataLeft();
      if (RES && RES.data) {
        const DATA = RES.data;
        this.brandTypeData = DATA.channelData;
        this.brandTypeTitle = DATA.channelData.map((item) => item.name);
        this.colorCompositionData = DATA.colorPercentData;
        this.styleClassificationData = DATA.designClassData;
        DATA.designClassData.forEach((i) => {
          this.styleClassificationTotal += i.num;
        });
        this.orderGrowthData = DATA.orderMonthData;
        this.serviceTypeData = DATA.requirementTypeData;
        console.log(DATA.requirementTypeData);
        this.orderProductionTypeData = DATA.ooperationTypeData;
        this.geographicalDistributionData = DATA.regionData;
        // 处理品牌商规模数据格式
        let brandSizeList = [];
        Object.getOwnPropertyNames(DATA.scaleData).forEach(function (key) {
          let obj = {
            value: DATA.scaleData[key],
            name: key,
          };
          brandSizeList.push(obj);
        });
        this.brandSizeData = brandSizeList;
        this.orderAmountData = DATA.priceRangeData;
      }
    },
  },
};
</script>

<style lang="less" scoped >
.left-data {
  // display: inline-block;
  .left-row1 {
    display: flex;
    .left-row1-box1 {
      position: relative;
      &__chart {
        position: absolute;
        top: 30%;
        right: 10%;
      }
      &__legend {
        position: absolute;
        top: 30%;
        left: 10%;
        &__text {
          font-size: 20px;
          font-weight: 400;
          text-align: left;
          color: #c5e4ff;
          margin-bottom: 20px;
        }
        :last-child {
          margin-bottom: 0px;
        }
      }
    }
    .left-row1-box2 {
      /deep/ .unit-label {
        opacity: 0;
      }
      /deep/ .unit-text {
        opacity: 0;
      }
    }
    .left-row1-box3 {
      position: relative;
      &__chart {
        position: absolute;
        top: 25%;
        right: 23%;
      }
      &__legend {
        position: absolute;
        top: 30%;
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
        left: 5%;
      }
      &__legend__left {
        top: 35%;
        right: 5% !important;
      }
    }
  }
  .left-row2 {
    display: flex;
    margin-top: 10px;
    .left-row2-box1__flex {
      display: flex;
      &__title {
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        color: #c5e4ff;
        margin-left: 40px;
      }
    }
  }
  .left-row3 {
    display: flex;
    margin-top: 10px;
  }
}
</style>