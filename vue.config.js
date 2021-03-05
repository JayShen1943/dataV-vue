/*
 * @Descripttion: vue配置
 * @Author: JayShen
 * @Date: 2021-02-27 23:07:27
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-05 18:18:27
 */
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            "/api": {
                target: "http://192.168.20.25:8888",
                changeOrigin: true,
                "secure": false,
                pathRewrite: {
                    "^/api": "", // 重写路径
                },
            },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', resolve('./src'))

    },
}