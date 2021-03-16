<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 15:06:12
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-16 16:56:47
-->
<template>
  <div>
    <div class="jump-title" @click="jump('/centerScreen')">中央大屏</div>
    <div class="jump-title" @click="jump('/leftScreen')">左侧副屏</div>
    <div class="jump-title" @click="jump('/rightScreen')">右侧副屏</div>
    <div>
      <div class="liveView">
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
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import "videojs-contrib-hls";
export default {
  name: "Home",
  components: {
    videoPlayer,
  },
  data() {
    return {
      initialized: false,
      currentTech: "",
      streams: {
        rtmp: "",
        hls: "",
      },
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
            // src:
            //   "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
            src:
              "http://wx19.sdvideo.cn:9999/3HKCC140818C7XM_0.m3u8?key=840e0161000598f5c5a925f2eb7362d8",
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