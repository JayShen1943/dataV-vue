<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 18:27:56
-->
<template>
  <div class="center">
    <header>
      <img src="@/assets/image/banner/header2x.png" alt="" class="header-img" />
      <div class="title">
        <VerticalLine />得体智能供应链服务平台<VerticalLine />
      </div>
      <div class="time">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</div>
    </header>
    <main>
      <CenterLeft />
      <Banner />
      <CenterRight />
    </main>
  </div>
</template>

<script>
import { formatTime } from "@/utils/tootls";
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
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  created() {},
  mounted() {
    this.timeFn();
  },
  methods: {
    timeFn() {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.center {
  header {
    position: relative;
    margin-bottom: 20px;
    .header-img {
      width: 100%;
    }
    .title {
      font-size: 50px;
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
      font-size: 22px;
      right: 60px;
      top: 20px;
      color: #ffffff;
    }
  }
  main {
    padding: 0 25px;
    display: flex;
  }
}
</style>
