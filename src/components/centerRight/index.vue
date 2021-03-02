<!--
 * @Descripttion: 中屏幕 右侧数据
 * @Author: JayShen
 * @Date: 2021-03-01 17:02:36
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-02 14:13:38
-->
<template>
  <div class="right-data">
    <div class="right-row1">
      <ShadowBox title="面料供应商" line-color="#3C97D5">
        <Echart
          :options="fabricSupplier()"
          style="width: 100%; height: 380px"
        />
      </ShadowBox>
      <ShadowBox title="面辅料供应地域分布" line-color="#FCCE48 ">
        <dv-capsule-chart
          :config="fabricSupplierDistributed()"
          style="width: 80%; height: 360px; margin-left: 60px"
        />
      </ShadowBox>
      <ShadowBox title="设计师满意度排名" line-color="#2DD3B3 ">
        <dv-scroll-board
          :config="designerRank()"
          style="width: 650px; height: 370px; margin-left: 50px"
        />
      </ShadowBox>
    </div>
    <div class="right-row2">
      <ShadowBox title="工艺商" line-color="#2DD3B3 ">
        <dv-active-ring-chart
          :config="craftsman()"
          class="left-row1-box1__chart"
          style="width: 100%; height: 350px"
        />
      </ShadowBox>
      <ShadowBox title="分销商" line-color="#2DD3B3 ">
        <div class="right-row2-box1__flex">
          <div class="right-row2-box1__flex__title">电商</div>
          <Echart
            :options="sellers('', ['#FCCE48', '#1765A5'])"
            style="width: 180px; height: 180px"
          />
          <div class="right-row2-box1__flex__title">直播</div>
          <Echart
            :options="sellers('', ['#FF7D7F', '#1765A5'])"
            style="width: 180px; height: 180px"
          />
        </div>
        <div class="right-row2-box1__flex">
          <div class="right-row2-box1__flex__title">线下</div>
          <Echart
            :options="sellers('', ['#2DD3B3', '#1765A5'])"
            style="width: 180px; height: 180px"
          />
          <div class="right-row2-box1__flex__title">其他</div>
          <Echart
            :options="sellers('', ['#664CC7', '#1765A5'])"
            style="width: 180px; height: 180px"
          />
        </div>
      </ShadowBox>
      <ShadowBox title="设计师满意度排名" line-color="#67A6E0">
        <dv-scroll-board
          :config="designerRank2()"
          style="width: 650px; height: 370px; margin-left: 50px"
      /></ShadowBox>
    </div>
    <div class="right-row3">
      <div class="right-row3-box3">
        <h3 class="right-row3-box3__title">
          <VerticalLine line-color="#2DD3B3" />各区域工厂产能分布
        </h3>
        <dv-scroll-board
          :config="factoryDistribution()"
          style="width: 90%; height: 370px; margin-left: 80px"
        />
      </div>
      <ShadowBox title="工厂接单排名" line-color="#E7A976">
        <dv-scroll-board
          :config="factoryRank()"
          style="width: 650px; height: 370px; margin-left: 50px"
        />
      </ShadowBox>
    </div>
  </div>
</template>

<script>
import {
  fabricSupplier,
  fabricSupplierDistributed,
  designerRank,
  designerRank2,
  factoryRank,
  craftsman,
  factoryDistribution,
  sellers
} from "./options";
export default {
  name: "CenterRight",
  data() {
    return {
      fabricSupplier,
      fabricSupplierDistributed,
      designerRank,
      designerRank2,
      factoryRank,
      craftsman,
      factoryDistribution,
      sellers
    };
  },
};
</script>

<style lang="less" scoped >
.right-data {
  margin-left: 20px;
  // display: inline-block;
  .right-row1 {
    display: flex;
  }
  .right-row2 {
    display: flex;
    margin-top: 20px;
    .right-row2-box1__flex {
      display: flex;
      &__title {
        font-size: 32px;
        font-weight: 400;
        text-align: left;
        color: #c5e4ff;
        margin-left: 80px;
      }
    }
  }
  .right-row3 {
    display: flex;
    margin-top: 20px;
    .right-row3-box3 {
      width: 1532px;
      height: 610px;
      background: rgba(25, 38, 67, 0.8);
      border: 0.025rem solid #1572be;
      box-shadow: 0px 0px 0.25rem 0px #005fac inset;
      margin-right: 20px;
      &__title {
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
  }
}
</style>