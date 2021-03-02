<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 09:55:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-02 11:10:38
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
  methods: {},
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  .banner {
    width: 2430px;
  }
  .banner-kid-box {
    display: flex;
    justify-content: space-between;
    .banner-kid {
      width: 797px;
      &__margin {
        margin: 0 10px;
      }
    }
  }

  .top-nformation {
    position: absolute;
    top: 50px;
    left: 50px;
    opacity: 0.9;
    background: #172441;
    display: flex;
    &__item {
      position: relative;
      width: 776px;
      height: 252px;
      text-align: center;
      &__title {
        margin: 40px 0 30px;
        background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
        font-size: 46px;
        -webkit-background-clip: text;
        font-weight: 400;
        color: #ffffff;
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      }
      &__value {
        margin: 0;
        opacity: 1;
        font-size: 70px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        color: #fcce48;
        text-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.5);
      }
    }
    &__item::after {
      position: absolute;
      top: 40px;
      display: block;
      content: "";
      width: 1px;
      height: 172px;
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
    bottom: 465px;
    left: -5px;
    opacity: 0.9;
    background: #172441;
    display: flex;
    &__item {
      width: 348px;
      height: 208px;
      text-align: center;
      &__title {
        margin: 20px 0 20px;
        opacity: 1;
        color: #3daaeb;
        font-size: 40px;
        font-weight: 400;
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      }
      &__value {
        margin: 0;
        color: #2dd3b3;
        font-size: 68px;
        font-weight: 600;
        text-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.5);
        &__text {
          font-size: 32px;
          font-weight: 400;
          color: #3daaeb;
        }
      }
    }
    &__item::after {
      position: absolute;
      top: 40px;
      display: block;
      content: "";
      width: 1px;
      height: 130px;
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