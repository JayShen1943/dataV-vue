/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-02-27 21:50:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-16 00:12:36
 */
import request from '@/utils/request'
// import {
//     getToken
// } from '@/utils/token'
// 中间大屏中间数据
export function findCenterScreenDataMiddle(params) {
    return request({
        url: '/act/Isonoe/client/synthesis/findCenterScreenDataMiddle',
        method: 'post',
        params
    })
}
// 中间大屏左边数据
export function findCenterScreenDataLeft(params) {
    return request({
        url: 'act/Isonoe/client/synthesis/findCenterScreenDataLeft',
        method: 'post',
        params
    })
}

// 中间大屏右边数据
export function findCenterScreenDataRight(params) {
    return request({
        url: '/act/Isonoe/client/synthesis/findCenterScreenDataRight',
        method: 'post',
        params
    })
}

// 左边大屏数据
export function findLeftScreenData(params) {
    return request({
        url: '/act/Isonoe/client/synthesis/findLeftScreenData',
        method: 'post',
        params
    })
}

// 右边大屏数据
export function findRightScreenData(params) {
    return request({
        url: '/act/Isonoe/client/synthesis/findRightScreenData',
        method: 'post',
        params
    })
}