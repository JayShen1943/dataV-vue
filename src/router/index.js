/*
 * @Descripttion: 路由配置
 * @Author: JayShen
 * @Date: 2021-03-02 14:38:46
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-02 15:20:01
 */
import Router from 'vue-router'
import Vue from 'vue'
import CenterScreen from "@/page/centerScreen"
import RightScreen from "@/page/rightScreen"
import LeftScreen from "@/page/leftScreen"
import Home from "@/page/home"
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/centerScreen',
            name: 'centerScreen',
            component: CenterScreen,
        },
        {
            path: '/leftScreen',
            name: '',
            component: LeftScreen,
        },
        {
            path: '/rightScreen',
            name: '',
            component: RightScreen,
        },
    ]
})
export default router