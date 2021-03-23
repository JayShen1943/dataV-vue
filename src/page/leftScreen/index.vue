<!--
 * @Descripttion: 大屏数据-左屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-23 11:52:00
-->
<template>
  <div class="left-screen">
    <header>
      <img
        src="@/assets/image/banner/leftScreenHeader.png"
        alt=""
        class="header-img"
      />
      <div class="title"><VerticalLine />品牌商<VerticalLine /></div>
    </header>
    <main>
      <div class="left-box">
        <ShadowBox
          title="新增品牌商"
          line-color="none"
          :width="540"
          :height="1116"
          class="left-screen-box"
        >
          <div class="new-brand">
            <div class="runden">
              <div class="num">{{ newbrandTotal }}</div>
              <div class="text">家</div>
            </div>
            <!-- <dv-capsule-chart
              :config="newbrand()"
              style="width: 350px; height: 300px"
            /> -->
            <Echart
              :options="newbrand(newbrandData)"
              style="width: 300px; height: 200px"
            />
          </div>
          <div class="marken-rank">
            <div class="marken-rank-title">
              <verticalLine />
              近期品牌商订单排名
            </div>
            <div class="marken-rank-logo">
              <img src="@/assets/image/logo/logo1.png" alt="" />
              <img src="@/assets/image/logo/logo2.png" alt="" />
              <img src="@/assets/image/logo/logo3.png" alt="" />
              <img src="@/assets/image/logo/logo4.png" alt="" />
              <img src="@/assets/image/logo/logo5.png" alt="" />
              <img src="@/assets/image/logo/logo6.png" alt="" />
              <img src="@/assets/image/logo/logo7.png" alt="" />
              <img src="@/assets/image/logo/logo8.png" alt="" />
            </div>
          </div>
          <div class="new-merchants">
            <div class="new-merchants-title">
              <verticalLine />
              新增入驻品牌商
            </div>
            <div></div>
            <dv-scroll-board
              :config="newMerchants(newMerchantsData)"
              style="width: 95%; height: 310px; margin: auto"
            />
          </div>
        </ShadowBox>
      </div>
      <div class="right-box">
        <div class="right-box-flex">
          <ShadowBox
            title="· 新增订单"
            line-color="none"
            :width="241"
            :height="211"
            class="left-screen-box"
          >
            <dv-digital-flop :config="config" />
          </ShadowBox>
          <ShadowBox
            title="· 新增件数"
            line-color="none"
            :width="293"
            :height="211"
            class="left-screen-box"
          >
            <dv-digital-flop
              :config="config2"
              style="width: 100%; position: relative; top: -14px"
            />
          </ShadowBox>
          <ShadowBox
            title="· 新增订单金额"
            line-color="none"
            :width="436"
            :height="211"
            class="left-screen-box"
          >
            <dv-digital-flop
              :config="config3"
              style="width: 100%; position: relative; top: -50px"
            />
          </ShadowBox>
        </div>
        <div class="right-box-other">
          <ShadowBox title="" line-color="none" :width="990" :height="661">
            <div class="charts">
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#6BB5FE" />款式分类
                </div>
                <dv-active-ring-chart
                  :config="styleClassification(styleClassificationData)"
                  class="left-row1-box1__chart"
                  style="width: 100%; height: 240px; margin：auto;margin-top:10px"
                />
              </div>
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#A269CD" />服务类型
                </div>
                <Echart
                  :options="serviceType(serviceTypeData)"
                  style="width: 100%; height: 240px; margin：auto;margin-top:10px"
                />
              </div>
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#2DD3B3" />订单金额构成
                </div>
                <!-- <dv-capsule-chart
                  :config="amountComposition()"
                  style="width: 100%; height: 460px; margin-top: 40px"
                /> -->
                <Echart
                  :options="amountComposition(amountCompositionData)"
                  style="width: 90%; height: 240px; margin：auto;margin-top:10px"
                />
              </div>
            </div>
            <div class="table">
              <div class="table-title">
                <VerticalLine line-color="#2DD3B3" />新增订单一览表
              </div>
              <dv-scroll-board
                :config="newOrderForm(newOrderFormData)"
                style="width: 95%; height: 230px; margin: auto"
              />
            </div>
          </ShadowBox>
        </div>
        <Shadow-box :width="990" :height="224" class="order-progress">
          <dv-scroll-board
            :config="orderProgress(orderProgressData)"
            style="width: 99%; height: 97%; margin: 0.5% auto 0"
          />
        </Shadow-box>
      </div>
    </main>
  </div>
</template>

<script>
import { findLeftScreenData, findScreenProcessData } from "@/service/api";
import {
  newbrand,
  newMerchants,
  styleClassification,
  serviceType,
  amountComposition,
  newOrderForm,
  orderProgress,
} from "./options";
import shadowBox from "../../common/shadowBox.vue";
export default {
  components: { shadowBox },
  name: "LeftScreen",
  data() {
    return {
      newbrand,
      newMerchants,
      styleClassification,
      serviceType,
      amountComposition,
      newOrderForm,
      orderProgress,
      config: {},
      config2: {},
      config3: {},
      newbrandData: [], // 新增品牌商
      newbrandTotal: 0, // 新增品牌商数量
      styleClassificationData: [], // 款式分类
      serviceTypeData: [], // 服务类型
      newMerchantsData: [], // 新增入驻品牌
      newOrderFormData: [], // 新增订单一览表
      orderProgressData: [], // 订单进度
      amountCompositionData: [], // 订单金额构成
      leftTimer: null,
    };
  },
  created() {
    this.init();
  },
  mounted() {
    const leftTimerNum = 1000 * 60 * 60;
    this.leftTimer = setInterval(() => {
      this.init();
    }, leftTimerNum);
  },
  beforeDestroy() {
    clearInterval(this.leftTimer); // 清除定时器
    this.leftTimer = null;
  },
  methods: {
    init() {
      this.getLeftScreenData();
      this.getScreenProcessData();
    },
    async getLeftScreenData() {
      const RES = await findLeftScreenData();
      if (RES && RES.data) {
        const DATA = RES.data;
        const ppsChannelData = DATA.ppsChannelData[0];
        this.newbrandData = [
          {
            value: ppsChannelData["其他"],
            name: "其他",
          },
          {
            value: ppsChannelData["电商"],
            name: "电商",
          },

          {
            value: ppsChannelData["直播"],
            name: "直播",
          },
          {
            value: ppsChannelData["跨境"],
            name: "跨境",
          },
        ];
        this.newbrandTotal =
          ppsChannelData["其他"] +
          ppsChannelData["电商"] +
          ppsChannelData["直播"] +
          ppsChannelData["跨境"];
        this.config.number = [DATA.recentOrderData[0].orderNum];
        this.config = {
          number: [DATA.recentOrderData[0].orderNum],
          content: "{nt}个",
          style: {
            fontSize: 50,
            fill: "#3de7c9",
          },
        };
        this.config2 = {
          number: [DATA.recentOrderData[0].orderQuantity],
          content: "{nt}个",
          style: {
            fontSize: 50,
            fill: "#3de7c9",
          },
        };
        this.config3 = {
          number: [DATA.recentOrderData[0].orderTotalPrice],
          content: "{nt}元",
          style: {
            fontSize: 50,
            fill: "#3de7c9",
          },
        };
        this.styleClassificationData = DATA.designClassData;
        this.serviceTypeData = DATA.serviceTypeData;
        this.newMerchantsData = DATA.ppsRegisterData;
        this.newOrderFormData = DATA.demandOrderData;
        this.amountCompositionData = DATA.priceRangeData;
      }
    },
    // 获取生产进度数据
    async getScreenProcessData() {
      const RES = await findScreenProcessData();
      if (RES && RES.data) {
        console.log(RES.data.orderAdvanceProcessList);
        // 需求进度
        this.orderProgressData = RES.data.orderAdvanceProcessList;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.left-screen {
  .left-screen-box {
  }
  header {
    position: relative;
    .header-img {
      width: 100%;
      height: 112px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 50px;
      color: #ffffff;
      font-weight: 600;
      position: absolute;
      text-align: center;
      top: 13px;
      position: absolute;
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
    padding: 0 28px;
    display: flex;
    .left-box {
      .new-brand {
        display: flex;
        justify-content: space-around;
        border-top: 2px solid #1572be;
        border-bottom: 2px solid #1572be;
        padding: 30px 0 20px;
        .runden {
          box-sizing: border-box;
          width: 176px;
          height: 176px;
          border: 10px solid #fcce48;
          border-radius: 50%;
          box-shadow: 0px 0px 6px 2px #8e5e00 inset;
          color: #fcce48;
          text-align: center;
          .num {
            font-size: 50px;
            font-weight: 600;
            margin-top: 30px;
          }
          .text {
            font-size: 24px;
            font-weight: 600;
          }
        }
      }
      .marken-rank {
        border-top: 1px solid #1572be;
        border-bottom: 1px solid #1572be;
        padding: 25px 0;
        .marken-rank-title {
          display: flex;
          align-items: center;
          color: #ecf6ff;
          //   -webkit-background-clip: text;
          font-size: 26px;
          margin-left: 20px;
        }
        .marken-rank-logo {
          padding: 0 20px;
          margin-top: 25px;
          img {
            width: 110px;
            margin-right: 18px;
          }
        }
        img:nth-child(4) {
          margin-right: 0px !important;
        }
        img:nth-child(8) {
          margin-right: 0px !important;
        }
      }
      .new-merchants {
        .new-merchants-title {
          color: #ecf6ff;
          //   -webkit-background-clip: text;
          font-size: 26px;
          padding: 30px 20px;
          // margin-left: 20px;
          // margin-bottom: 20px;
        }
      }
    }
    .right-box {
      .right-box-flex {
        display: flex;
      }
      .right-box-other {
        margin: 10px 0;
        .charts {
          display: flex;
          border-bottom: 2px solid #1572be;
          padding-bottom: 10px;
          .chart-box {
            width: 320px;
            text-align: center;
            margin-top: 20px;
            .chart-box-title {
              background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
              -webkit-background-clip: text;
              font-size: 26px;
              color: #ffffff;
            }
          }
        }
        .table {
          .table-title {
            display: flex;
            align-items: center;
            margin: 30px 20px;
            background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
            -webkit-background-clip: text;
            color: #ffffff;
            font-size: 26px;
          }
        }
      }
      .order-progress {
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
              display: block;
              content: "";
              top: 50%;
              left: 30%;
              width: 65%;
              transform: scaleY(2); /*沿Y轴方向缩放*/
              height: 1px;
              background: #051029;
              z-index: -1;
            }
          }
        }
      }
    }
  }
}
</style>