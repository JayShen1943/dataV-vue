<!--
 * @Descripttion: 大屏数据-左屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-31 21:25:43
-->
<template>
  <div class="left-screen">
    <header>
      <img
        src="@/assets/image/banner/leftScreenHeader.png"
        alt=""
        class="header-img"
      />
      <div class="title"><VerticalLine />客户<VerticalLine /></div>
    </header>
    <main>
      <div class="row1">
        <div class="row1-box1 row1-box">
          <div class="row1-title">新增品牌商</div>
          <div class="new-brand">
            <div class="runden">
              <div class="num">{{ newbrandTotal }}</div>
              <div class="text">家</div>
            </div>
            <Echart
              :options="newbrand(newbrandData)"
              style="width: 300px; height: 200px"
            />
          </div>
        </div>
        <div class="row1-box2 row1-box">
          <div class="row1-title">新增订单</div>
          <dv-digital-flop :config="config" />
          <div class="row1-unti" style="top: -19px">笔</div>
        </div>
        <div class="row1-box3 row1-box">
          <div class="row1-title">新增件数</div>
          <dv-digital-flop
            :config="config2"
            style="width: 100%; position: relative; top: -10px"
          />
          <div class="row1-unti" style="top: -38px">件</div>
        </div>
        <div class="row1-box4 row1-box">
          <div class="row1-title">新增订单金额</div>
          <dv-digital-flop
            :config="config3"
            style="width: 100%; position: relative; top: -36px"
          />
          <div class="row1-unti" style="top: -90px">元</div>
        </div>
      </div>
      <div class="row1 row2">
        <div class="row1-box1 row1-box">
          <div class="row1-title">新增分销商</div>
          <div class="new-brand">
            <div class="runden">
              <div class="num">{{ newDistributorTotal }}</div>
              <div class="text">家</div>
            </div>
            <Echart
              :options="newDistributor(newDistributorData)"
              style="width: 300px; height: 200px"
            />
          </div>
        </div>
        <div class="row1-box2 row1-box">
          <div class="row1-title">新增订单</div>
          <dv-digital-flop :config="row2config" />
          <div class="row1-unti" style="top: -19px">笔</div>
        </div>
        <div class="row1-box3 row1-box">
          <div class="row1-title">新增件数</div>
          <dv-digital-flop
            :config="row2config2"
            style="width: 100%; position: relative; top: -10px"
          />
          <div class="row1-unti" style="top: -38px">件</div>
        </div>
        <div class="row1-box4 row1-box">
          <div class="row1-title">新增订单金额</div>
          <dv-digital-flop
            :config="row2config3"
            style="width: 100%; position: relative; top: -36px"
          />
          <div class="row1-unti" style="top: -90px">元</div>
        </div>
      </div>
      <div class="row3">
        <div class="left-box">
          <Shadow-box :width="540" :height="550" class="order-progress">
            <div class="new-merchants">
              <div class="new-merchants-title">
                <verticalLine />
                新入驻客户
              </div>
              <div></div>
              <dv-scroll-board
                :config="newMerchants(newMerchantsData)"
                style="width: 95%; height: 440px; margin: auto"
              />
            </div>
          </Shadow-box>
        </div>
        <div class="right-box">
          <Shadow-box :width="993" :height="240" style="margin-top: 10px">
            <dv-scroll-board
              :config="newOrderForm(newOrderFormData)"
              style="width: 99%; height: 97%; margin: 0.5% auto 0"
            />
          </Shadow-box>

          <Shadow-box :width="993" :height="300" class="order-progress">
            <dv-scroll-board
              :config="orderProgress(orderProgressData)"
              style="width: 99%; height: 97%; margin: 0.5% auto 0"
            />
          </Shadow-box>
        </div>
      </div>
    </main>
  </div>
  <!-- <ShadowBox title="" line-color="none" :width="993" :height="661">
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
                <Echart
                  :options="amountComposition(amountCompositionData)"
                  style="width: 90%; height: 240px; margin：auto;margin-top:10px"
                />
              </div>
            </div>
            <div class="table">
              
            </div>
          </ShadowBox> -->
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
  newDistributor,
} from "./options";
import shadowBox from "../../common/shadowBox.vue";
import { formatter } from "@/utils/tootls";
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
      newDistributor,
      config: {},
      config2: {},
      config3: {},
      row2config: {},
      row2config2: {},
      row2config3: {},
      newbrandData: [], // 新增品牌商
      newbrandTotal: 0, // 新增品牌商数量
      newDistributorData: [], // 新增分销商
      newDistributorTotal: 0, // 新增分销商数量
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
            value: ppsChannelData["门店"],
            name: "门店",
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
            value: ppsChannelData["跨境"] + 1,
            name: "跨境",
          },
        ];
        this.newbrandTotal =
          ppsChannelData["门店"] +
          ppsChannelData["电商"] +
          ppsChannelData["直播"] +
          ppsChannelData["跨境"];
        // 分销商数据
        const fxsChannelData = DATA.fxsChannelData[0];
        this.newDistributorData = [
          {
            value: fxsChannelData["门店"],
            name: "门店",
          },
          {
            value: fxsChannelData["电商"],
            name: "电商",
          },

          {
            value: fxsChannelData["直播"],
            name: "直播",
          },
          {
            value: fxsChannelData["跨境"],
            name: "跨境",
          },
        ];
        this.newDistributorTotal =
          fxsChannelData["门店"] +
          fxsChannelData["电商"] +
          fxsChannelData["直播"] +
          fxsChannelData["跨境"];

        this.config.number = [DATA.recentOrderData[0].orderNum];
        this.config = {
          number: [DATA.recentOrderData[0].orderNum],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#3de7c9",
          },
        };
        this.config2 = {
          number: [DATA.recentOrderData[0].orderQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#3de7c9",
          },
        };
        this.config3 = {
          number: [DATA.recentOrderData[0].orderTotalPrice],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#3de7c9",
          },
        };
        // this.styleClassificationData = DATA.designClassData;
        // this.serviceTypeData = DATA.serviceTypeData;
        // this.amountCompositionData = DATA.priceRangeData;
        this.newMerchantsData = DATA.ppsRegisterData;
        this.newOrderFormData = DATA.demandOrderData;
        // row2 订单、件数、金额
        this.row2config = {
          number: [DATA.fxsRecentOrderData[0].orderNum],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#F7C642",
          },
        };
        this.row2config2 = {
          number: [DATA.fxsRecentOrderData[0].orderQuantity],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#F7C642",
          },
        };
        this.row2config3 = {
          number: [DATA.fxsRecentOrderData[0].orderTotalPrice],
          content: "{nt}",
          formatter,
          style: {
            fontSize: 50,
            fill: "#F7C642",
          },
        };
      }
    },
    // 获取生产进度数据
    async getScreenProcessData() {
      const RES = await findScreenProcessData();
      if (RES && RES.data) {
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
    // display: flex;
    .row1 {
      box-sizing: border-box;
      width: 1543px;
      height: 276px;
      display: flex;
      border: 0.5px solid #1572be !important;
      box-shadow: 0px 0px 20px 0px #005fac inset;
      .row1-title {
        font-size: 30px;
        font-weight: 400;
        background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
        margin-top: 10px;
        line-height: 70px;
        // display: flex;
        // align-items: center;
      }
      .row1-unti {
        background: linear-gradient(0deg, #1882d8 1%, #73c0ff 99%);
        font-size: 30px;
        -webkit-background-clip: text;
        font-weight: 600;
        color: #7fbaeb;
        position: relative;
        text-align: center;
        top: -40px;
      }
      .row1-box {
        box-sizing: border-box;
        height: 100%;
        border-right: 0.5px solid #1572be !important;
      }
      .row1-box1 {
        width: 542px;
        .new-brand {
          box-sizing: border-box;
          height: 276px;
          display: flex;
          justify-content: space-around;
          // border-top: 2px solid #1572be;
          .runden {
            border: 8px solid #2dd3b3;
            box-shadow: 0px 0px 6px 0px #057761 inset;
            color: #2dd3b3;
            box-sizing: border-box;
            width: 144px;
            height: 144px;
            border-radius: 50%;
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
      }
      .row1-box2 {
        width: 264px;
      }
      .row1-box3 {
        width: 302px;
      }
      .row1-box4 {
        width: 404px;
        border-right: none !important;
      }
    }
    .row2 {
      margin-top: 10px;
      .runden {
        border: 8px solid #fcce48 !important;
        box-shadow: 0px 0px 6px 2px #8e5e00 inset;
        color: #fcce48 !important;
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
    .row3 {
      display: flex;

      .left-box {
        margin-top: 10px;
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
        .order-progress {
          margin-top: 10px;
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
}
</style>