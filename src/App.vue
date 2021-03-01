<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 17:58:02
-->
<template>
  <div id="app">
    <dv-full-screen-container>
      <Center />
    </dv-full-screen-container>
  </div>
</template>

<script>
import Center from "./page/center";

export default {
  name: "App",
  components: {
    Center,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(270deg, #07122b, #192643 47%, #0e1a34);
}
</style>
