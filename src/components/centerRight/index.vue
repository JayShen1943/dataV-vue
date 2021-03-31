<!--
 * @Descripttion: 中屏幕 右侧数据
 * @Author: JayShen
 * @Date: 2021-03-01 17:02:36
 * @LastEditors: JayShen
 * @LastEditTime: 2021-04-01 00:18:36
-->
<template>
  <div class="right-data">
    <div class="right-row1">
      <ShadowBox title="面辅料供应商占比" line-color="#3C97D5">
        <Echart
          :options="fabricSupplier(fabricSupplierData)"
          style="width: 100%; height: 70%; margin: auto"
        />
      </ShadowBox>
      <ShadowBox
        title="面辅料供应商地域分布"
        line-color="#FCCE48 "
        class="right-row1-box1"
      >
        <dv-capsule-chart
          :config="fabricSupplierDistributed(fabricSupplierDistributedData)"
          style="width: 80%; height: 70%; margin: auto"
        />
      </ShadowBox>
      <ShadowBox title="设计师满意度" line-color="#2DD3B3 ">
        <dv-scroll-board
          :config="designerRank(designerRankDATA)"
          style="width: 95%; height: 70%; margin: auto"
        />
      </ShadowBox>
    </div>
    <div class="right-row2">
      <ShadowBox title="工艺占比" line-color="#2DD3B3 ">
        <dv-active-ring-chart
          :config="craftsman(techniqueSupplierData)"
          class="left-row1-box1__chart"
          style="width: 80%; height: 70%; margin: auto"
        />
      </ShadowBox>
      <ShadowBox title="工艺供应商地域分布" line-color="#2DD3B3 ">
        <dv-capsule-chart
          :config="distributor()"
          style="width: 80%; height: 70%; margin: auto"
        />
        <!-- <div class="right-row2-box1__flex">
          <div class="right-row2-box1__flex__title">跨境</div>
          <Echart
            :options="sellers(20, ['#FCCE48', '#1765A5'])"
            style="width: 130px; height: 130px"
          />
          <div class="right-row2-box1__flex__title">直播</div>
          <Echart
            :options="sellers(2, ['#FF7D7F', '#1765A5'])"
            style="width: 130px; height: 130px"
          />
        </div>
        <div class="right-row2-box1__flex">
          <div class="right-row2-box1__flex__title">电商</div>
          <Echart
            :options="sellers(17, ['#2DD3B3', '#1765A5'])"
            style="width: 130px; height: 130px"
          />
          <div class="right-row2-box1__flex__title">门店</div>
          <Echart
            :options="sellers(79, ['#664CC7', '#1765A5'])"
            style="width: 130px; height: 130px"
          />
        </div> -->
      </ShadowBox>
      <ShadowBox title="打版工作室满意度" line-color="#67A6E0">
        <dv-scroll-board
          :config="patternSupplierScore(patternSupplierScoreData)"
          style="width: 95%; height: 70%; margin: auto"
      /></ShadowBox>
    </div>
    <div class="right-row3">
      <div class="right-row3-box3">
        <h3 class="right-row3-box3__title">
          <VerticalLine line-color="#2DD3B3" />各区域工厂产能分布
        </h3>
        <dv-scroll-board
          :config="factoryDistribution(factoryDistributionData)"
          style="width: 95%; height: 85%; margin: auto"
        />
      </div>
      <ShadowBox title="生产供应商满意度" line-color="#E7A976">
        <dv-scroll-board
          :config="factoryRank(factoryRankData)"
          style="width: 95%; height: 70%; margin: auto"
        />
      </ShadowBox>
    </div>
  </div>
</template>

<script>
import { findCenterScreenDataRight } from "@/service/api";
import {
  fabricSupplier,
  fabricSupplierDistributed,
  designerRank,
  patternSupplierScore,
  factoryRank,
  craftsman,
  factoryDistribution,
  sellers,
  distributor
} from "./options";
export default {
  name: "CenterRight",
  data() {
    return {
      fabricSupplier,
      fabricSupplierDistributed,
      designerRank,
      patternSupplierScore,
      factoryRank,
      craftsman,
      factoryDistribution,
      sellers,
      distributor,
      fabricSupplierData: [], // 面料供应商 饼图
      fabricSupplierDistributedData: [], // 面辅料地域分布 柱形图
      factoryRankData: [], // 工厂接单排名
      designerRankDATA: [], // 设计师满意度排名
      factoryDistributionData: [], // 各区域工厂产能分布
      techniqueSupplierData: [], // 工艺商
      patternSupplierScoreData: [], // 打板工作室
      centerRightTimer: null,
    };
  },
  created() {
    this.getCenterScreenDataRight();
  },
  mounted() {
    const centerRightTimerNum = 1000 * 60 * 60;
    this.centerRightTimer = setInterval(() => {
      this.getCenterScreenDataRight();
    }, centerRightTimerNum);
  },
  beforeDestroy() {
    clearInterval(this.centerRightTimer); // 清除定时器
    this.centerRightTimer = null;
  },
  methods: {
    async getCenterScreenDataRight() {
      const RES = await findCenterScreenDataRight();
      if (RES && RES.data && RES.data.result) {
        const DATA = RES.data;
        this.fabricSupplierData = DATA.fabricPercentData;
        this.techniqueSupplierData = DATA.techniqueSupplierData;
        this.fabricSupplierDistributedData = DATA.fabricRegionData;
        this.factoryRankData = DATA.factoryListData;
        this.designerRankDATA = DATA.designScoreData;
        this.factoryDistributionData = DATA.regionCapacityData;
        //  打版工作室
        this.patternSupplierScoreData = DATA.patternSupplierScoreData;
      }
    },
  },
};
</script>

<style lang="less" scoped >
.right-data {
  margin-left: 10px;
  // display: inline-block;
  .right-row1 {
    display: flex;
    .right-row1-box1 {
      // /deep/ .unit-label {
      //   opacity: 0;
      // }
      // /deep/ .unit-text {
      //   opacity: 0;
      // }
    }
  }
  .right-row2 {
    display: flex;
    margin-top: 10px;
    .right-row2-box1__flex {
      display: flex;
      &__title {
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        color: #c5e4ff;
        margin-left: 30px;
      }
    }
  }
  .right-row3 {
    display: flex;
    margin-top: 10px;
    .right-row3-box3 {
      box-sizing: border-box;
      width: 906px;
      height: 362px;
      background: rgba(25, 38, 67, 0.8);
      border: 1px solid #1572be;
      box-shadow: 0px 0px 20px 0px #005fac inset;
      margin-right: 10px;
      &__title {
        display: flex;
        align-items: center;
        margin: 30px 20px;
        font-size: 26px;
        font-weight: 400;
        background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        -webkit-background-clip: text;
        color: transparent;
        text-align: left;
        margin-left: 10px;
      }
    }
  }
}
</style>