<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-10 10:19:32
-->
<template>
  <dv-full-screen-container class="bg">
    <div class="center">
      <header>
        <img
          src="@/assets/image/banner/header2x.png"
          alt=""
          class="header-img"
        />
        <div class="title">
          <VerticalLine />得体智能供应链服务平台<VerticalLine />
        </div>
        <div class="time">
          <!-- {{ time.dateYear }} {{ time.dateWeek }} {{ time.dateDay }} -->
        </div>
      </header>
      <main>
        <CenterLeft />
        <Banner />
      <CenterRight />
      </main>
    </div>
  </dv-full-screen-container>
</template>

<script>
// import { formatTime } from "@/utils/tootls";
import CenterLeft from "@/components/centerLeft";
import CenterRight from "@/components/centerRight";
import Banner from "@/components/banner";
export default {
  name: "Center",
  components: {
    CenterLeft,
    CenterRight,
    Banner,
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
    // },
  },
};
</script>

<style lang="less" scoped>
.bg{
  background: linear-gradient(
270deg
, #07122b, #192643 47%, #0e1a34);
}
.center {
  header {
    position: relative;
    .header-img {
      width: 100%;
    }
    .title {
      font-size: 0.3rem /* 24/80 */;
      color: #ffffff;
      font-weight: 600;
      text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      font-size: 0.3rem;
      position: absolute;
      // top: -0.125rem /* 10/80 */;
      top: 0.1rem;
      left: 50%;
      transform: translate(-50%);
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
    display: flex;
  }
}
</style>
