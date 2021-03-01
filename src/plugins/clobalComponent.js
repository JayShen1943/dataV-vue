/*
 * @Descripttion: 全局组件
 * @Author: JayShen
 * @Date: 2021-03-01 17:06:47
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 17:47:27
 */
import Vue from 'vue'
import Echart from '@/common/echart'
import ShadowBox from '@/common/shadowBox'
import VerticalLine from '@/common/verticalLine'
export default () => {
    Vue.component('Echart', Echart)
    Vue.component('ShadowBox', ShadowBox)
    Vue.component('VerticalLine', VerticalLine)
}