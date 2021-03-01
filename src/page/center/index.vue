<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 17:51:23
-->
<template>
  <div class="center">
    <header>
      <img src="@/assets/image/banner/header2x.png" alt="" class="header-img" />
      <div class="title"><VerticalLine />得体智能供应链服务平台</div>
      <div class="time">
        <!-- {{ time.dateYear }} {{ time.dateWeek }} {{ time.dateDay }} -->
      </div>
    </header>
    <main>
      <CenterLeft />
      <div class="banner">
        <img src="@/assets/image/banner/banner.png" alt="" class="banner" />
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
      <CenterRight />
    </main>
  </div>
</template>

<script>
// import { formatTime } from "@/utils/tootls";
import CenterLeft from "@/components/centerLeft";
import CenterRight from "@/components/centerRight";
export default {
  name: "Center",
  components: {
    CenterLeft,
    CenterRight,
  },
  data() {
    return {
      time: {
        dateDay: null,
        dateYear: null,
        dateWeek: null,
        weekday: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
      },
    };
  },
  created() {},
  mounted() {
    // this.timeFn();
  },
  methods: {
    // timeFn() {
    //   setInterval(() => {
    //     this.time.dateDay = formatTime(new Date(), "HH: mm: ss");
    //     this.time.dateYear = formatTime(new Date(), "yyyy-MM-dd");
    //     this.time.dateWeek = this.weekday[new Date().getDay()];
    //   }, 1000);
    // },
    // async getData() {
    //   const RES = await demo({ id: 1 });
    //   console.log(RES);
    // },
  },
};
</script>

<style lang="less" scoped>
.center {
  header {
    position: relative;
    .header-img {
      width: 100%;
    }
    .title {
      font-size: 0.3rem /* 24/80 */;
      font-size: 90px;
      color: #ffffff;
      font-weight: 600;
      text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      position: absolute;
      text-align: center;
      top: 13px;
      right: 43.5%;
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
    .banner {
      .banner {
        width: 2430px;
      }
      .banner-kid {
        width: 797px;
      }
      & kid__margin {
        margin: 0 20px;
      }
    }
  }
}
</style>
