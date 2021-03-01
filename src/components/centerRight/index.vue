<!--
 * @Descripttion: 中屏幕 右侧数据
 * @Author: JayShen
 * @Date: 2021-03-01 17:02:36
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 17:50:44
-->
<template>
  <div class="right-data">
    <div class="right-row1">
      <ShadowBox> </ShadowBox>
      <ShadowBox> </ShadowBox>
      <ShadowBox> </ShadowBox>
    </div>
    <div class="right-row2">
      <ShadowBox> </ShadowBox>
      <ShadowBox> </ShadowBox>
      <ShadowBox> </ShadowBox>
    </div>
    <div class="right-row3">
      <ShadowBox> </ShadowBox>
      <ShadowBox> </ShadowBox>
      <ShadowBox> </ShadowBox>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterRight",
};
</script>

<style lang="less" scoped >
.right-data {
  margin-left: 20px;
  // display: inline-block;
  .right-row1 {
    display: flex;
  }
  .right-row2 {
    display: flex;
    margin-top: 20px;
  }
  .right-row3 {
    display: flex;
    margin-top: 20px;
  }
}
</style>