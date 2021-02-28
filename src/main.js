/*
 * @Descripttion: 入口文件
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-28 15:50:26
 */
import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
// 适配flex
// import './utils/flexible.js';
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') 