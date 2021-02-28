/*
 * @Descripttion: http封装请求
 * @Author: JayShen
 * @Date: 2021-02-27 21:36:49
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-28 14:55:20
 */
import {
    getToken,
    getCode
} from '@/utils/token'
import axios from 'axios'
import promise from 'es6-promise'
promise.polyfill()

const service = axios.create({
      baseURL: process.env.VUE_APP_API,
    timeout: 10000
})

service.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Authorization'] = getToken()
    config.headers['Actcode'] = getCode()
    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(
    response => response,
    error => {
        let msg = ''
        if (error.message.includes('timeout')) {
            msg = '请求超时了,请重新尝试！'
        } else {
            msg = '服务器出错了！'
        }
        // Message({
        //   message: msg,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        console.error(msg);
        return Promise.reject(error)
    }
)

export default service