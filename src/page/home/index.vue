<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 15:06:12
 * @LastEditors: JayShen
 * @LastEditTime: 2021-04-01 15:14:28
-->
<template>
  <div>
    <div class="jump-title" @click="jump('/centerScreen')">中央大屏</div>
    <div class="jump-title" @click="jump('/leftScreen')">左侧副屏</div>
    <div class="jump-title" @click="jump('/rightScreen')">右侧副屏</div>
    <div>
      <div class="liveView">
        <!-- <video-player
          class="vjs-custom-skin"
          ref="videoPlayer"
          :options="playerOptions"
          @ready="onPlayerReadied"
          @timeupdate="onTimeupdate"
          :playsinline="playsinline"
        >
        </video-player> -->
      </div>
      <!-- <iframe
        :src="`https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/F28426316/1.live&autoplay=1&accessToken=${accessToken}&appKey=${appKey}`"
        width="480"
        height="270"
        id="ysOpenDevice"
        frameborder="0"
        allowfullscreen
      >
      </iframe> -->
    </div>
  </div>
</template>

<script>
// import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import "videojs-contrib-hls";
export default {
  name: "Home",
  components: {
    // videoPlayer,
  },
  data() {
    return {
      initialized: false,
      currentTech: "",
      streams: {
        rtmp: "",
        hls: "",
      },
      accessToken:
        "at.45e1h23tabmy28kqak0k0xyt04m24x2r-8abtwp38u9-0nyvhog-hslth8rdx",
      appKey: "341647f9342042299dd3884f2f34e22f",
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        aspectRatio: "30:20",
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
              "https://open.ys7.com/ezopen/h5?url=ezopen://open.ys7.com/F28426316/1.live&autoplay=1&accessToken=at.45e1h23tabmy28kqak0k0xyt04m24x2r-8abtwp38u9-0nyvhog-hslth8rdx&appKey=341647f9342042299dd3884f2f34e22f`",
              // `video/F28426316/1.live&autoplay=1&accessToken=at.45e1h23tabmy28kqak0k0xyt04m24x2r-8abtwp38u9-0nyvhog-hslth8rdx&appKey=341647f9342042299dd3884f2f34e22f`,
          },
        ],
      },
    };
  },
  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player;
  //   },
  //   currentStream() {
  //     return this.currentTech === "Flash" ? "RTMP" : "HLS";
  //   },
  //   playsinline() {
  //     let ua = navigator.userAgent.toLocaleLowerCase();
  //     // x5内核
  //     if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
  //       return false;
  //     } else {
  //       // ios端
  //       return true;
  //     }
  //   },
  // },
  methods: {
    jump(url) {
      this.$router.push({
        path: url,
      });
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
.jump-title {
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  &:hover {
    // color: saddlebrown;
    color: skyblue;
  }
}

.liveView {
  // position: relative;
  width: 300px;
  height: 300px;
}
</style>