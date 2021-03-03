/*
 * @Descripttion: 入口文件
 * @Author: JayShen
 * @Date: 2021-02-27 18:12:19
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-03 09:24:38
 */
import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
// 适配flex
import './utils/flexible.js';
import plugins from '@/plugins/clobalComponent.js'
import router from './router'
import '@/assets/iconFont/iconfont.css'
Vue.use(plugins)
Vue.use(dataV)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')