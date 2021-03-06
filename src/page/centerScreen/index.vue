<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-06 09:42:22
-->
<template>
  <div class="center">
    <header>
      <img src="@/assets/image/banner/header2x.png" alt="" class="header-img" />
      <div class="title"><VerticalLine />得体智能供应链服务平台<VerticalLine /></div>
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
.center {
  header {
    position: relative;
    .header-img {
      width: 100%;
    }
    .title {
      // font-size: 0.3rem /* 24/80 */;
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
  }
}
</style>
