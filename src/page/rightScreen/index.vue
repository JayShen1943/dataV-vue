<!--
 * @Descripttion: 大屏数据-右屏
 * @Author: JayShen
 * @Date: 2021-03-02 15:15:51
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-02 18:35:42
-->
<template>
  <div class="right-screen">
    <header>
      <img
        src="@/assets/image/banner/leftScreenHeader.png"
        alt=""
        class="header-img"
      />
      <div class="title"><VerticalLine />供应商</div>
    </header>
    <main>
      <div class="right-screen-row1">
        <ShadowBox
          title="· 设计打版"
          line-color="none"
          :width="430"
          :height="433"
        >
          <dv-digital-flop :config="config" />
        </ShadowBox>
        <ShadowBox
          title="· 面辅料采购"
          line-color="none"
          :width="430"
          :height="433"
        >
          <dv-digital-flop :config="config" />
        </ShadowBox>
        <ShadowBox
          title="· 生产中"
          line-color="none"
          :width="556"
          :height="433"
        >
          <dv-digital-flop
            :config="config"
            style="position: relative; top: -36px"
          />
        </ShadowBox>
        <ShadowBox
          title="· 验收入库"
          line-color="none"
          :width="556"
          :height="433"
        >
          <dv-digital-flop
            :config="config"
            style="position: relative; top: -36px"
          />
        </ShadowBox>
        <ShadowBox title="· 交付" line-color="none" :width="556" :height="433">
          <dv-digital-flop
            :config="config"
            style="position: relative; top: -36px"
          />
        </ShadowBox>
      </div>
      <div class="right-screen-row2">
        <ShadowBox
          title="设计打版进度一览表"
          line-color="#2DD3B3"
          :width="1274"
          :height="702"
        >
          <dv-scroll-board
            :config="designTable()"
            style="width: 95%; height: 500px; margin-left: 40px"
          />
        </ShadowBox>
        <ShadowBox
          title="面辅料采购一览表"
          line-color="#2DD3B3"
          :width="1306"
          :height="702"
        >
          <dv-scroll-board
            :config="purchaseTable()"
            style="width: 95%; height: 500px; margin-left: 40px"
          />
        </ShadowBox>
      </div>
      <div class="right-screen-row3">
        <ShadowBox
          title="新增订单一览表"
          line-color="#2DD3B3"
          :width="2600"
          :height="749"
        >
          <dv-scroll-board
            :config="newOrderTable()"
            style="width: 95%; height: 500px; margin-left: 40px"
          />
        </ShadowBox>
      </div>
    </main>
  </div>
</template>

<script>
import { designTable, purchaseTable ,newOrderTable} from "./options";
export default {
  name: "RightScreen",
  data() {
    return {
      designTable,
      purchaseTable,
      newOrderTable,
      config: {
        number: [100335],
        content: "{nt}个",
        style: {
          fontSize: 90,
          fill: "#3de7c9",
        },
      },
    };
  },
};
</script>

<style lang="less" scoped>
.right-screen {
  header {
    position: relative;
    .header-img {
      width: 100%;
    }
    .title {
      font-size: 90px;
      color: #ffffff;
      font-weight: 600;
      position: absolute;
      text-align: center;
      top: 13px;
      right: 44.5%;
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
    padding: 50px;
    .right-screen-row1 {
      display: flex;
      justify-content: space-between;
    }
    .right-screen-row2 {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    .right-screen-row3 {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
}
</style>