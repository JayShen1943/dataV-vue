<!--
 * @Descripttion: 大屏数据-右屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 20:59:48
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
          :width="254"
          :height="228"
        >
          <dv-digital-flop
            :config="digitalFlop1"
            style="position: relative; top: -26px"
          />
          <div class="unit" style="top: -54px">件</div>
        </ShadowBox>
        <ShadowBox
          title="· 面辅料采购"
          line-color="none"
          :width="254"
          :height="228"
        >
          <dv-digital-flop
            :config="digitalFlop2"
            style="position: relative; top: -26px"
          />
          <div class="unit" style="top: -54px">笔</div>
        </ShadowBox>
        <ShadowBox
          title="· 生产中"
          line-color="none"
          :width="323"
          :height="228"
        >
          <dv-digital-flop
            :config="digitalFlop3"
            style="position: relative; top: -46px"
          />
          <div class="unit" style="top: -90px">件</div>
        </ShadowBox>
        <ShadowBox
          title="· 验收入库"
          line-color="none"
          :width="327"
          :height="228"
        >
          <dv-digital-flop
            :config="digitalFlop4"
            style="position: relative; top: -52px"
          />
          <div class="unit" style="top: -93px">件</div>
        </ShadowBox>
        <ShadowBox title="· 交付" line-color="none" :width="322" :height="228">
          <dv-digital-flop
            :config="digitalFlop5"
            style="position: relative; top: -56px"
          />
          <div class="unit" style="top: -95px">件</div>
        </ShadowBox>
      </div>
      <div class="right-screen-row2">
        <ShadowBox
          title="设计打版进度一览表"
          line-color="#2DD3B3"
          :width="755"
          :height="410"
        >
          <dv-scroll-board
            :config="designTable(designTableData)"
            style="width: 95%; height: 70%; margin: auto"
          />
        </ShadowBox>
        <ShadowBox
          title="面辅料采购一览表"
          line-color="#2DD3B3"
          :width="773"
          :height="410"
        >
          <dv-scroll-board
            :config="purchaseTable(purchaseTableData)"
            style="width: 95%; height: 70%; margin: auto"
          />
        </ShadowBox>
      </div>
      <div class="right-screen-row3">
        <ShadowBox
          title="新增订单一览表"
          line-color="#2DD3B3"
          :width="1540"
          :height="438"
        >
          <dv-scroll-board
            :config="newOrderTable(newOrderTableData)"
            style="width: 95%; height: 70%; margin: auto"
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
      rightTimer: null,
    };
  },
  created() {
    this.getRightScreenData();
  },
  mounted() {
    const rightTimerNum = 1000 * 60 * 60;
    this.rightTimer = setInterval(() => {
      this.getRightScreenData();
    }, rightTimerNum);
  },
  beforeDestroy() {
    clearInterval(this.rightTimer); // 清除定时器
    this.rightTimer = null;
  },
  methods: {
    async getRightScreenData() {
      const RES = await findRightScreenData();
      if (RES && RES.data) {
        const DATA = RES.data;
        this.purchaseTableData = DATA.purchaseOrderData;
        this.designTableData = DATA.designProcessData;
        this.newOrderTableData = DATA.productionProcessData;
        this.digitalFlop1 = {
          number: [DATA.supplierData.sampleOutsourcingCount],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#FCCE48",
          },
        };
        this.digitalFlop2 = {
          number: [DATA.supplierData.purchaseCount],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#FCCE48",
          },
        };
        this.digitalFlop3 = {
          number: [DATA.supplierData.productionQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#FF7D7F",
          },
        };
        this.digitalFlop4 = {
          number: [DATA.supplierData.inRepertoryQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#2DD3B3",
          },
        };
        this.digitalFlop5 = {
          number: [DATA.supplierData.outRepertoryQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
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
      font-size: 50px;
      color: #ffffff;
      font-weight: 600;
      position: absolute;
      top: 13px;
      left: 50%;
      transform: translateX(-50%);
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
    padding: 20px 30px;
    .right-screen-row1 {
      display: flex;
      // justify-content: space-between;
      .unit {
        background: linear-gradient(0deg, #1882d8 1%, #73c0ff 99%);
        font-size: 30px;
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