<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-28 16:12:55
-->
<template>
  <div class="home">
    <dv-full-screen-container>
      <header>
        <img src="@/assets/image/header2x.png" alt="" class="header-img" />
        <div class="title">得体智能供应链服务平台</div>
      </header>
      <ShadowBox>
        <dv-active-ring-chart
          :config="config"
          style="width: 300px; height: 300px"
        />
      </ShadowBox>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { demo } from "@/service/api";
import ShadowBox from "@/components/shadowBox";
export default {
  name: "Home",
  components: {
    ShadowBox,
  },
  data() {
    return {
      config: {
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
        lineWidth: 10,
      },
    };
  },
  created() {
    this.getData();
    console.log("当前环境变量：" + process.env.NODE_ENV);
    console.log("当前环境路径：" + process.env.VUE_APP_API);
    console.log("所有：", process.env);
  },
  methods: {
    async getData() {
      const RES = await demo({ id: 1 });
      console.log(RES);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  // width: 100%;
  // height: 100vh;

  .header-img {
    width: 100%;
  }
  .title {
    font-size: 30px;
    color: #ffffff;
    font-weight: 600;
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    /* position: absolute;
  top: 0; */
    /* right: 50%; */
    text-align: center;
    // font-size: 0.3rem;
    margin-top: -55px;
  }
}
</style>
