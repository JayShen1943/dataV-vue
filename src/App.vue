<!--
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-28 15:44:37
-->
<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./page/home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
