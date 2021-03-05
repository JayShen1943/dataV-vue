<!--
 * @Descripttion: 大屏数据-左屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-04 14:14:17
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
          :width="910"
          :height="1880"
        >
          <div class="new-brand">
            <div class="runden">
              <div class="num">98</div>
              <div class="text">家</div>
            </div>
            <!-- <dv-capsule-chart
              :config="newbrand()"
              style="width: 350px; height: 300px"
            /> -->
            <Echart :options="newbrand()" style="width: 350px; height: 300px"/>
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
              :config="newMerchants()"
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
            <dv-digital-flop :config="config" />
          </ShadowBox>
          <ShadowBox
            title="· 新增订单金额"
            line-color="none"
            :width="733"
            :height="433"
          >
            <dv-digital-flop
              :config="config"
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
                  :config="styleClassification()"
                  class="left-row1-box1__chart"
                  style="width: 100%; height: 460px; margin-top: 40px"
                />
              </div>
              <div class="chart-box">
                <div class="chart-box-title">
                  <VerticalLine line-color="#A269CD" />服务类型
                </div>
                <Echart
                  :options="serviceType()"
                  style="width: 100%; height: 460px; margin-top: 40px"
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
                  :options="amountComposition()"
                  style="width: 100%; height: 460px; margin-top: 40px"
                />
              </div>
            </div>
            <div class="table">
              <div class="table-title">
                <VerticalLine line-color="#2DD3B3" />新增订单一览表
              </div>
              <dv-scroll-board
                :config="newOrderForm()"
                style="width: 95%; height: 550px; margin-left: 40px"
              />
            </div>
          </ShadowBox>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
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
      config: {
        number: [100335],
        content: "{nt}个",
        style: {
          fontSize: 90,
          fill: "#3de7c9",
        },
      },
    };
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