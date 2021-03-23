<!--
 * @Descripttion: 大屏数据-右屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-23 11:49:25
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
          :width="259"
          :height="212"
        >
          <dv-digital-flop
            :config="digitalFlop1"
            style="position: relative; top: -26px"
          />
          <div class="unit" style="top: -60px">件</div>
        </ShadowBox>
        <ShadowBox
          title="· 面辅料采购"
          line-color="none"
          :width="259"
          :height="212"
        >
          <dv-digital-flop
            :config="digitalFlop2"
            style="position: relative; top: -26px"
          />
          <div class="unit" style="top: -60px">笔</div>
        </ShadowBox>
        <ShadowBox
          title="· 生产中"
          line-color="none"
          :width="328"
          :height="212"
        >
          <dv-digital-flop
            :config="digitalFlop3"
            style="position: relative; top: -46px"
          />
          <div class="unit" style="top: -96px">件</div>
        </ShadowBox>
        <ShadowBox
          title="· 验收入库"
          line-color="none"
          :width="327"
          :height="212"
        >
          <dv-digital-flop
            :config="digitalFlop4"
            style="position: relative; top: -52px"
          />
          <div class="unit" style="top: -99px">件</div>
        </ShadowBox>
        <ShadowBox title="· 交付" line-color="none" :width="322" :height="212">
          <dv-digital-flop
            :config="digitalFlop5"
            style="position: relative; top: -56px"
          />
          <div class="unit" style="top: -96px">件</div>
        </ShadowBox>
      </div>
      <div class="right-screen-row2">
        <ShadowBox
          title="设计打版进度一览表"
          line-color="#2DD3B3"
          :width="755"
          :height="300"
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
          :height="300"
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
          :height="340"
        >
          <dv-scroll-board
            :config="newOrderTable(newOrderTableData)"
            style="width: 97%; height: 72%; margin: auto"
          />
        </ShadowBox>
      </div>
      <div class="right-screen-row4">
        <ShadowBox
          line-color="#2DD3B3"
          :width="685"
          :height="236"
          class="right-screen-row4__box1"
        >
          <dv-scroll-board
            :config="makingProgress(makingProgressData)"
            style="width: 99%; height: 97%; margin: 0.5% auto 0"
          />
        </ShadowBox>
        <ShadowBox
          line-color="#2DD3B3"
          :width="848"
          :height="236"
          class="right-screen-row4__box2"
        >
          <dv-scroll-board
            :config="productionProgress(productionProgressData)"
            style="width: 99%; height: 97%; margin: 0.5% auto 0"
          />
        </ShadowBox>
      </div>
    </main>
  </div>
</template>

<script>
import { findRightScreenData, findScreenProcessData } from "@/service/api";
import {
  designTable,
  purchaseTable,
  newOrderTable,
  makingProgress,
  productionProgress,
} from "./options";
import { formatter } from "@/utils/tootls";
export default {
  name: "RightScreen",
  data() {
    return {
      designTable,
      purchaseTable,
      newOrderTable,
      makingProgress,
      productionProgress,
      digitalFlop1: {},
      digitalFlop2: {},
      digitalFlop3: {},
      digitalFlop4: {},
      digitalFlop5: {},
      purchaseTableData: [], // 面辅料采购一览表
      designTableData: [], // 设计打版进度
      newOrderTableData: [], // 订单一览表
      makingProgressData: [], //  打版进度
      productionProgressData: [], // 生产进度
      rightTimer: null,
    };
  },
  created() {
    this.init();
  },
  mounted() {
    const rightTimerNum = 1000 * 60 * 60;
    this.rightTimer = setInterval(() => {
      this.init();
    }, rightTimerNum);
  },
  beforeDestroy() {
    clearInterval(this.rightTimer); // 清除定时器
    this.rightTimer = null;
  },
  methods: {
    init() {
      this.getRightScreenData();
      this.getScreenProcessData();
    },
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
    // 获取生产进度数据
    async getScreenProcessData() {
      const RES = await findScreenProcessData();
      if (RES && RES.data) {
        // 打版进度
        this.makingProgressData = RES.data.designSampleMakeProcessList;
        // 生产进度
        this.productionProgressData = RES.data.productionProcessList;
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
      margin-top: 10px;
      /deep/ .shadow-box__title {
        margin: 20px 0 20px 10px;
      }
    }
    .right-screen-row3 {
      display: flex;
      // justify-content: space-between;
      margin: 10px 0;
      /deep/ .shadow-box__title {
        margin: 20px 0 20px 10px;
      }
    }
    .right-screen-row4 {
      display: flex;
      /deep/ .rows {
        .yellowRound {
          img {
            width: 22px;
            vertical-align: middle;
          }
        }
        .greenRound {
          img {
            width: 14px;
            vertical-align: middle;
          }
        }
        .row-item {
          position: relative;
          z-index: 5;
          &::before {
            position: absolute;
            top: 50%;
            display: block;
            content: "";
            height: 1px;
            background: #051029;
            z-index: -1;
          }
        }
      }
      &__box1 {
        /deep/ .rows {
          .row-item {
            &::before {
              left: 26%;
              width: 66%;
              transform: scaleY(2); /*沿Y轴方向缩放*/
            }
          }
        }
      }
      &__box2 {
        /deep/ .rows {
          .row-item {
            &::before {
              left: 35%;
              width: 58%;
              transform: scaleY(2); /*沿Y轴方向缩放*/
            }
          }
        }
      }
    }
    /deep/ .header-item {
      color: #050d1d;
    }
  }
}
</style>