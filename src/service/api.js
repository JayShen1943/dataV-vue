/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 21:50:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-27 22:23:48
 */
import request from '@/utils/request'
// import {
//     getToken
// } from '@/utils/token'
export function demo(params) {
    return request({
        url: '/api/demo',
        method: 'get',
        params
    })
}