<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 09:55:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-10 10:28:06
-->
<template>
  <div class="banner">
    <img src="@/assets/image/banner/banner.png" alt="" class="banner" />

    <div class="banner-kid-box">
      <img
        src="@/assets/image/banner/banner-kid1.png"
        alt=""
        class="banner-kid"
      />
      <img
        src="@/assets/image/banner/banner-kid2.png"
        alt=""
        class="banner-kid banner-kid__margin"
      />
      <img
        src="@/assets/image/banner/banner-kid3.png"
        alt=""
        class="banner-kid"
      />
    </div>

    <div class="top-nformation">
      <div
        v-for="(item, index) in topNformation"
        :key="index"
        class="top-nformation__item"
      >
        <h4 class="top-nformation__item__title">{{ item.title }}</h4>
        <p class="top-nformation__item__value">
          {{
            index === 0
              ? formatter(item.value)
              : index === 1
              ? formatter(item.value) + " 件"
              : formatter(item.value) + " 家"
          }}
        </p>
      </div>
    </div>
    <div class="bottom-nformation">
      <div
        v-for="(item, index) in bottomNformation"
        :key="index"
        class="bottom-nformation__item"
      >
        <h4 class="bottom-nformation__item__title">{{ item.title }}</h4>
        <p class="bottom-nformation__item__value">
          <span class="bottom-nformation__item__value__text">入驻</span>
          {{ item.value }}
          <span class="bottom-nformation__item__value__text">家</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatter } from "@/utils/tootls";
import { findCenterScreenDataMiddle } from "@/service/api";
export default {
  name: "Banner",
  data() {
    return {
      topNformation: [
        { value: "13131212", title: "总交易金额" },
        { value: "13131212", title: "订单生产总件数" },
        { value: "13131212", title: "总入驻商家" },
      ],
      bottomNformation: [
        { value: "1231", title: "品牌商" },
        { value: "123123", title: "分销商" },
        { value: "234", title: "设计师" },
        { value: "234", title: "板房" },
        { value: "123123", title: "面辅料商" },
        { value: "234", title: "工艺商" },
        { value: "234", title: "生产商" },
      ],
      formatter,
    };
  },
  created() {
    this.getCenterScreenDataMiddle();
  },
  methods: {
    async getCenterScreenDataMiddle() {
      const RES = await findCenterScreenDataMiddle();
      if (RES) {
        const DATA = RES.data.centerData;
        this.topNformation[0].value = parseInt(DATA.transactionTotal);
        this.topNformation[1].value = DATA.productionTotal;
        this.topNformation[2].value = DATA.customerTotal;
        this.bottomNformation[0].value = DATA.ppsCount;
        this.bottomNformation[1].value = DATA.fxsCount;
        this.bottomNformation[2].value = DATA.designerCount;
        this.bottomNformation[3].value = DATA.patternSupplierCount;
        this.bottomNformation[4].value = DATA.fabricSupplierCount;
        this.bottomNformation[5].value = DATA.techniqueSupplierCount;
        this.bottomNformation[6].value = DATA.productionSupplierCount;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  .banner {
    width: 8.125rem /* 650/80 */;
  }
  .banner-kid-box {
    display: flex;
    justify-content: space-between;
    .banner-kid {
      width: 2.6625rem /* 213/80 */;
      &__margin {
        margin: 0 10px;
      }
    }
  }

  .top-nformation {
    position: absolute;
    top: 0.1625rem;
    left: 0.1625rem;
    opacity: 0.9;
    background: #172441;
    display: flex;
    &__item {
      position: relative;
      width: 2.6rem /* 208/80 */;
      height: 0.8375rem;
      text-align: center;
      &__title {
        margin: 0.1375rem 0 0.1625rem;
        background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
        font-size: 0.15rem;
        -webkit-background-clip: text;
        font-weight: 400;
        color: #ffffff;
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      }
      &__value {
        margin: 0;
        opacity: 1;
        font-size: 0.25rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        color: #fcce48;
        text-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.5);
      }
    }
    &__item::after {
      position: absolute;
      top: 0.1375rem;
      display: block;
      content: "";
      width: 0.0125rem;
      height: 0.575rem;
      opacity: 0.7;
      background: #3daaeb;
    }
    :first-child {
      &::after {
        content: "";
        width: 0px;
        height: 0px;
      }
    }
  }
  .bottom-nformation {
    position: absolute;
    top: 4.025rem /* 322/80 */;
    left: -0.025rem /* 5/80 */;
    opacity: 0.9;
    background: #172441;
    display: flex;
    &__item {
      width: 1.1625rem;
      height: 0.7rem;
      text-align: center;
      &__title {
        margin: 20px 0 20px;
        margin: 0.05rem 0 0.05rem;
        opacity: 1;
        color: #3daaeb;
        font-size: 0.175rem;
        font-weight: 400;
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      }
      &__value {
        margin: 0;
        color: #2dd3b3;
        font-size: 0.225rem /* 18/80 */;
        font-weight: 600;
        text-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.5);
        &__text {
          font-size: 0.15rem;
          font-weight: 400;
          color: #3daaeb;
        }
      }
    }
    &__item::after {
      position: absolute;
      top: 0.125rem /* 10/80 */;
      display: block;
      content: "";
      width: 0.0125rem;
      height: 0.4375rem;
      opacity: 0.7;
      background: #3daaeb;
    }
    :first-child {
      &::after {
        content: "";
        width: 0px;
        height: 0px;
      }
    }
  }
}
</style>