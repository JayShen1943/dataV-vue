/*
 * @Descripttion: 入口文件
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 17:58:12
 */
import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
// 适配flex
// import './utils/flexible.js';
import plugins from '@/plugins/clobalComponent.js'
Vue.use(plugins)
Vue.use(dataV)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')