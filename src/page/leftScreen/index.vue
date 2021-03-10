<!--
 * @Descripttion: 大屏数据-左屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-10 12:42:07
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
    <div style="display:flex">
      <dv-active-ring-chart
        :config="demoConfig"
        style="width: 300px; height: 300px"
      />
      <dv-active-ring-chart
        :config="demoConfig"
        style="width: 300px; height: 300px"
      />
      <dv-active-ring-chart
        :config="demoConfig"
        style="width: 300px; height: 300px"
      />
       <dv-active-ring-chart
        :config="demoConfig"
        style="width: 300px; height: 300px"
      />
      <dv-active-ring-chart
        :config="demoConfig"
        style="width: 300px; height: 300px"
      />
      <dv-active-ring-chart
        :config="demoConfig"
        style="width: 300px; height: 300px"
      />
    </div>
    <div style="display:flex">
      <dv-capsule-chart :config="demoConfig" style="width:300px;height:200px" />
      <dv-capsule-chart :config="demoConfig" style="width:300px;height:200px" />
      <dv-capsule-chart :config="demoConfig" style="width:300px;height:200px" />
      <dv-capsule-chart :config="demoConfig" style="width:300px;height:200px" />
      <dv-capsule-chart :config="demoConfig" style="width:300px;height:200px" />
    </div>
    <!-- <main>
      <div class="left-box">
        <ShadowBox
          title="新增品牌商"
          line-color="none"
          :width="910"
          :height="1880"
        >
          <div class="new-brand">
            <div class="runden">
              <div class="num">{{ newbrandTotal }}</div>
              <div class="text">家</div>
            </div>
            <Echart
              :options="newbrand(newbrandData)"
              style="width: 350px; height: 300px"
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
              style="width: 90%; height: 550px; margin-left: 50px"
            />
          </div>
        </ShadowBox>
      </div>
      <div class="right-box">
        <div class="right-box-flex">
          <ShadowBox
            title="· 新增订单"
            line-color="none"
            :width="438"
            :height="433"
          >
            <dv-digital-flop :config="config" />
          </ShadowBox>
          <ShadowBox
            title="· 新增件数"
            line-color="none"
            :width="438"
            :height="433"
          >
            <dv-digital-flop :config="config2" />
          </ShadowBox>
          <ShadowBox
            title="· 新增订单金额"
            line-color="none"
            :width="733"
            :height="433"
          >
            <dv-digital-flop
              :config="config3"
              style="width: 100%; position: relative; top: -80px"
            />
          </ShadowBox>
        </div>
        <div class="right-box-other">
          <ShadowBox title="" line-color="none" :width="1656" :height="1420">
            <div class="charts">
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#6BB5FE" />款式分类
                </div>
                <dv-active-ring-chart
                  :config="styleClassification(styleClassificationData)"
                  class="left-row1-box1__chart"
                  style="width: 100%; height: 460px; margin-top: 40px"
                />
              </div>
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#A269CD" />服务类型
                </div>
                <Echart
                  :options="serviceType(serviceTypeData)"
                  style="width: 100%; height: 460px; margin-top: 40px"
                />
              </div>
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#2DD3B3" />订单金额构成
                </div>
                <Echart
                  :options="amountComposition(amountCompositionData)"
                  style="width: 100%; height: 460px; margin-top: 40px"
                />
              </div>
            </div>
            <div class="table">
              <div class="table-title">
                <VerticalLine line-color="#2DD3B3" />新增订单一览表
              </div>
              <dv-scroll-board
                :config="newOrderForm(newOrderFormData)"
                style="width: 95%; height: 550px; margin-left: 40px"
              />
            </div>
          </ShadowBox>
        </div>
      </div>
    </main> -->
  </div>
</template>

<script>
import { findLeftScreenData } from "@/service/api";
import {
  newbrand,
  newMerchants,
  styleClassification,
  serviceType,
  amountComposition,
  newOrderForm,
} from "./options";
export default {
  name: "LeftScreen",
  data() {
    return {
      newbrand,
      newMerchants,
      styleClassification,
      serviceType,
      amountComposition,
      newOrderForm,
      // config: {},
      // config2: {},
      // config3: {},
      newbrandData: [], // 新增品牌商
      newbrandTotal: 0, // 新增品牌商数量
      styleClassificationData: [], // 款式分类
      serviceTypeData: [], // 服务类型
      newMerchantsData: [], // 新增入驻品牌
      newOrderFormData: [], // 新增订单一览表
      amountCompositionData: [], // 订单金额构成
      demoConfig: {
        radius: "40%",
        activeRadius: "45%",
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
        digitalFlopStyle: {
          fontSize: 20,
        },
      },
    };
  },
  created() {
    this.getLeftScreenData();
  },
  methods: {
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
            fontSize: 90,
            fill: "#3de7c9",
          },
        };
        this.config2 = {
          number: [DATA.recentOrderData[0].orderQuantity],
          content: "{nt}个",
          style: {
            fontSize: 90,
            fill: "#3de7c9",
          },
        };
        this.config3 = {
          number: [DATA.recentOrderData[0].orderTotalPrice],
          content: "{nt}元",
          style: {
            fontSize: 90,
            fill: "#3de7c9",
          },
        };
        this.styleClassificationData = DATA.designClassData;
        this.serviceTypeData = DATA.serviceTypeData;
        this.newMerchantsData = DATA.ppsRegisterData;
        this.newOrderFormData = DATA.demandOrderData;
        this.amountCompositionData = [
          {
            value: DATA.priceRangeData[0]["50-100万"],
            name: "50-100万",
          },
          {
            value: DATA.priceRangeData[0]["100万以上"],
            name: "100万以上",
          },
        ];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.left-screen {
  header {
    position: relative;
    .header-img {
      width: 100%;
    }
    .title {
      // font-size: 90px;
      font-size: 26px;
      color: #ffffff;
      font-weight: 600;
      position: absolute;
      text-align: center;
      top: 10px;
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
    padding: 0 50px;
    display: flex;
    .left-box {
      .new-brand {
        display: flex;
        justify-content: space-around;
        border-top: 2px solid #1572be;
        border-bottom: 2px solid #1572be;
        padding: 40px 0;
        .runden {
          width: 277px;
          height: 277px;
          border: 20px solid #fcce48;
          border-radius: 50%;
          box-shadow: 0px 0px 6px 2px #8e5e00 inset;
          color: #fcce48;
          text-align: center;
          .num {
            font-size: 100px;
            font-weight: 600;
            margin-top: 50px;
          }
          .text {
            font-size: 40px;
            font-weight: 600;
          }
        }
      }
      .marken-rank {
        border-top: 2px solid #1572be;
        border-bottom: 2px solid #1572be;
        padding: 40px 0;
        .marken-rank-title {
          color: #ecf6ff;
          //   -webkit-background-clip: text;
          font-size: 46px;
          margin-left: 40px;
        }
        .marken-rank-logo {
          padding-left: 30px;
          margin-top: 48px;
          img {
            width: 184px;
            margin-right: 37px;
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
        padding: 40px 0;
        .new-merchants-title {
          color: #ecf6ff;
          //   -webkit-background-clip: text;
          font-size: 46px;
          margin-left: 40px;
          margin-bottom: 40px;
        }
      }
    }
    .right-box {
      .right-box-flex {
        display: flex;
      }
      .right-box-other {
        margin-top: 20px;
        .charts {
          display: flex;
          border-bottom: 2px solid #1572be;
          padding-bottom: 55px;
          .chart-box {
            width: 530px;
            text-align: center;
            margin-top: 60px;
            .chart-box-title {
              background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
              -webkit-background-clip: text;
              font-size: 46px;
              color: #ffffff;
              line-height: 48px;
            }
          }
        }
        .table {
          .table-title {
            margin: 50px 40px;
            background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
            -webkit-background-clip: text;
            font-size: 46px;
            color: #ffffff;
            font-size: 46px;
          }
        }
      }
    }
  }
}
</style>