<!--
 * @Descripttion:中间大屏--底部数据
 * @Author: JayShen
 * @Date: 2021-03-19 10:57:32
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-19 11:39:31
-->
<template>
  <div class="center-bottom">
    <div class="outer-round">
      <div class="inner-round"></div>
    </div>
    <dv-scroll-board
      :config="centerBottomData()"
      style="width: 99%; height: 95%; margin: 20px auto 0px"
    />
  </div>
</template>

<script>
import { centerBottomData } from "./options";
export default {
  name: "centerBottom",
  data() {
    return {
      centerBottomData,
    };
  },
};
</script>

<style lang="less" scoped>
.center-bottom {
  box-sizing: border-box;
  width: 4209px;
  height: 203px;
  background: rgba(25, 38, 67, 0.8);
  border: 1px solid #1572be;
  box-shadow: 0px 0px 20px 0px #005fac inset;
  margin-top: 10px;
  .outer-round {
    width: 18px;
    height: 18px;
    border: 1px solid #15b1af;
    border-radius: 50%;
    display: flex;
    .inner-round {
      width: 10px;
      height: 10px;
      background: #15b1af;
      border-radius: 50%;
      margin: auto;
    }
  }
}
</style>