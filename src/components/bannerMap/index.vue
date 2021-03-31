<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 09:55:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-31 23:27:23
-->
<template>
  <div class="banner">
    <!-- <img src="@/assets/image/banner/banner.png" alt="" class="banner" /> -->
    <Echart
      :options="mapOptions(mapData)"
      class="banner-map"
      style="width:1458px height: 836px"
    />
    <div class="earth">
      <img src="@/assets/image/banner/earth-rotate.gif" alt="地球" />
    </div>
    <div class="banner-kid-box">
      <img
        src="@/assets/image/banner/banner-kid1.png"
        alt=""
        class="banner-kid"
        @click="videoFlagClick"
      />
      <img
        v-if="videoFlag"
        src="@/assets/image/banner/banner-kid2.png"
        alt=""
        class="banner-kid banner-kid__margin"
      />
      <div v-else class="live-view">
        <video-player
          class="vjs-custom-skin"
          ref="videoPlayer"
          :options="playerOptions"
          @ready="onPlayerReadied"
          @timeupdate="onTimeupdate"
          :playsinline="playsinline"
        >
        </video-player>
      </div>
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
import { videoPlayer } from "vue-video-player";
import { formatter } from "@/utils/tootls";
import { findCenterScreenDataMiddle } from "@/service/api";
import { mapOptions } from "./options";
import { mapData } from "./mapData";
export default {
  name: "Banner",
  components: {
    videoPlayer,
  },
  data() {
    return {
      mapOptions,
      mapData,
      videoFlag: false,
      topNformation: [
        { value: "13131212", title: "总交易金额" },
        { value: "13131212", title: "订单生产总件数" },
        { value: "13131212", title: "总入驻商家" },
      ],
      bottomNformation: [
        { value: "1231", title: "品牌商" },
        { value: "123123", title: "分销商" },
        { value: "234", title: "设计师" },
        { value: "234", title: "打版工作室" },
        { value: "123123", title: "面辅料供应商" },
        { value: "234", title: "工艺供应商" },
        { value: "234", title: "生产供应商" },
      ],
      formatter,
      bnnerTimerNum: null,
      playerOptions: {
        overNative: true,
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        controls: true,
        loop: false, // 导致视频一结束就重新开始。
        aspectRatio: "480:270",
        techOrder: ["html5"],
        sourceOrder: true,
        flash: {
          hls: { withCredentials: false },
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src:
              // "http://wx19.sdvideo.cn:9999/3HKE024282PDAJA_0.m3u8?key=0edb937d1aeac50dd9f4162f2727d810",
              // src:
              "http://wx19.sdvideo.cn:9999/3HKCC140818C7XM_0.m3u8?key=840e0161000598f5c5a925f2eb7362d8", // 测试地址
          },
        ],
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    currentStream() {
      return this.currentTech === "Flash" ? "RTMP" : "HLS";
    },
    playsinline() {
      let ua = navigator.userAgent.toLocaleLowerCase();
      // x5内核
      if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
        return false;
      } else {
        // ios端
        return true;
      }
    },
  },
  created() {
    this.getCenterScreenDataMiddle();
  },
  mounted() {
    const bnnerTimerNum = 1000 * 60 * 60;
    this.bnnerTimer = setInterval(() => {
      this.getCenterScreenDataLeft();
    }, bnnerTimerNum);
  },
  beforeDestroy() {
    clearInterval(this.bnnerTimer); // 清除定时器
    this.bnnerTimer = null;
  },
  methods: {
    videoFlagClick() {
      this.videoFlag = !this.videoFlag;
    },
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
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true;
        this.currentTech = this.player.techName_;
      }
    },
    // record current time
    onTimeupdate(e) {
      console.log("currentTime", e.cache_.currentTime);
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  .earth {
    position: absolute;
    top: 50%;
    left: 5%;
    overflow: hidden;
    border-radius: 50%;
    font-size: 0;
    img {
      width: 93px;
    }
  }
  .banner-map {
    width: 1458px !important;
    height: 836px !important;
    background: url("../../assets/image/banner/mapBg.png") top center no-repeat;
  }
  .banner-kid-box {
    display: flex;
    justify-content: space-between;
    .banner-kid {
      width: 480px;
      height: 270px;
      &__margin {
        margin: 0 10px;
      }
    }
    .live-view {
      // position: relative;
      width: 480px;

      .vjs-custom-skin {
        height: 270px;
      }
    }
  }

  .top-nformation {
    position: absolute;
    top: 30px;
    left: 26px;
    opacity: 0.9;
    background: rgba(23, 36, 65, 0.7);
    display: flex;
    &__item {
      position: relative;
      width: 467px;
      height: 134px;
      text-align: center;
      &__title {
        margin: 15px 0 10px;
        background: linear-gradient(0deg, #8fcdff 3%, #ecf6ff 98%);
        font-size: 26px;
        -webkit-background-clip: text;
        font-weight: 400;
        color: #ffffff;
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      }
      &__value {
        margin: 0;
        opacity: 1;
        font-size: 50px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        color: #fcce48;
        text-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.5);
      }
    }
    &__item::after {
      position: absolute;
      top: 15%;
      display: block;
      content: "";
      width: 1px;
      height: 75%;
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
    bottom: 24.5%;
    left: 1px;
    opacity: 0.9;
    background: rgba(24, 37, 66, 0.7);
    display: flex;
    &__item {
      width: 208px;
      height: 113px;
      text-align: center;
      &__title {
        margin: 20px 0 10px;
        opacity: 1;
        color: #3daaeb;
        font-size: 24px;
        font-weight: 400;
        text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
      }
      &__value {
        margin: 0;
        color: #2dd3b3;
        font-size: 40px;
        font-weight: 600;
        text-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.5);
        &__text {
          font-size: 20px;
          font-weight: 400;
          color: #3daaeb;
        }
      }
    }
    &__item::after {
      position: absolute;
      top: 15%;
      display: block;
      content: "";
      width: 1px;
      height: 75%;
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