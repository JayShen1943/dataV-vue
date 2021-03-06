<!--
 * @Descripttion: 大屏数据-右屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-06 14:20:25
-->
<template>
  <div class="right-screen">
    <header>
      <img
        src="@/assets/image/banner/leftScreenHeader.png"
        alt=""
        class="header-img"
      />
      <div class="title"><VerticalLine />供应商<VerticalLine /></div>
    </header>
    <main>
      <div class="right-screen-row1">
        <ShadowBox
          title="· 设计打版"
          line-color="none"
          :width="430"
          :height="433"
        >
          <dv-digital-flop :config="digitalFlop1" />
          <div class="unit">件</div>
        </ShadowBox>
        <ShadowBox
          title="· 面辅料采购"
          line-color="none"
          :width="430"
          :height="433"
        >
          <dv-digital-flop :config="digitalFlop2" />
          <div class="unit">笔</div>
        </ShadowBox>
        <ShadowBox
          title="· 生产中"
          line-color="none"
          :width="556"
          :height="433"
        >
          <dv-digital-flop
            :config="digitalFlop3"
            style="position: relative; top: -36px"
          />
          <div class="unit" style="top: -105px">件</div>
        </ShadowBox>
        <ShadowBox
          title="· 验收入库"
          line-color="none"
          :width="556"
          :height="433"
        >
          <dv-digital-flop
            :config="digitalFlop4"
            style="position: relative; top: -36px"
          />
          <div class="unit" style="top: -105px">件</div>
        </ShadowBox>
        <ShadowBox title="· 交付" line-color="none" :width="556" :height="433">
          <dv-digital-flop
            :config="digitalFlop5"
            style="position: relative; top: -36px"
          />
          <div class="unit" style="top: -105px">件</div>
        </ShadowBox>
      </div>
      <div class="right-screen-row2">
        <ShadowBox
          title="设计打版进度一览表"
          line-color="#2DD3B3"
          :width="1274"
          :height="702"
        >
          <dv-scroll-board
            :config="designTable(designTableData)"
            style="width: 95%; height: 500px; margin-left: 40px"
          />
        </ShadowBox>
        <ShadowBox
          title="面辅料采购一览表"
          line-color="#2DD3B3"
          :width="1306"
          :height="702"
        >
          <dv-scroll-board
            :config="purchaseTable(purchaseTableData)"
            style="width: 95%; height: 500px; margin-left: 40px"
          />
        </ShadowBox>
      </div>
      <div class="right-screen-row3">
        <ShadowBox
          title="新增订单一览表"
          line-color="#2DD3B3"
          :width="2600"
          :height="749"
        >
          <dv-scroll-board
            :config="newOrderTable(newOrderTableData)"
            style="width: 95%; height: 500px; margin-left: 40px"
          />
        </ShadowBox>
      </div>
    </main>
  </div>
</template>

<script>
import { findRightScreenData } from "@/service/api";
import { designTable, purchaseTable, newOrderTable } from "./options";
import { formatter } from "@/utils/tootls";
export default {
  name: "RightScreen",
  data() {
    return {
      designTable,
      purchaseTable,
      newOrderTable,
      digitalFlop1: {},
      digitalFlop2: {},
      digitalFlop3: {},
      digitalFlop4: {},
      digitalFlop5: {},
      purchaseTableData: [], // 面辅料采购一览表
      designTableData: [], // 设计打版进度
      newOrderTableData: [], // 订单一览表
    };
  },
  created() {
    this.getRightScreenData();
  },
  methods: {
    async getRightScreenData() {
      const RES = await findRightScreenData();
      if (RES && RES.data) {
        console.log(RES.data);
        const DATA = RES.data;
        this.purchaseTableData = DATA.purchaseOrderData;
        this.designTableData = DATA.designProcessData;
        this.newOrderTableData = DATA.productionProcessData;
        this.digitalFlop1 = {
          number: [DATA.supplierData.sampleOutsourcingCount],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 90,
            fill: "#FCCE48",
          },
        };
        this.digitalFlop2 = {
          number: [DATA.supplierData.purchaseCount],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 90,
            fill: "#FCCE48",
          },
        };
        this.digitalFlop3 = {
          number: [DATA.supplierData.productionQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 90,
            fill: "#FF7D7F",
          },
        };
        this.digitalFlop4 = {
          number: [DATA.supplierData.inRepertoryQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 90,
            fill: "#2DD3B3",
          },
        };
        this.digitalFlop5 = {
          number: [DATA.supplierData.outRepertoryQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 90,
            fill: "#2DD3B3",
          },
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.right-screen {
  header {
    position: relative;
    .header-img {
      width: 100%;
    }
    .title {
      font-size: 90px;
      color: #ffffff;
      font-weight: 600;
      position: absolute;
      text-align: center;
      top: 13px;
      right: 44.5%;
    }
    .time {
      position: absolute;
      font-size: 40px;
      right: 60px;
      top: 20px;
      color: #ffffff;
    }
  }
  main {
    padding: 50px;
    .right-screen-row1 {
      display: flex;
      // justify-content: space-between;
      .unit {
        background: linear-gradient(0deg, #1882d8 1%, #73c0ff 99%);
        font-size: 40px;
        -webkit-background-clip: text;
        font-weight: 600;
        color: #7fbaeb;
        position: relative;
        text-align: center;
        top: -40px;
      }
    }
    .right-screen-row2 {
      display: flex;
      // justify-content: space-between;
      margin-top: 20px;
    }
    .right-screen-row3 {
      display: flex;
      // justify-content: space-between;
      margin-top: 20px;
    }
  }
}
</style>