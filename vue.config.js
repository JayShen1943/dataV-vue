/*
 * @Descripttion: vue配置
 * @Author: JayShen
 * @Date: 2021-02-27 23:07:27
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-06 09:36:26
 */
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            "/proxy": {
                target: "http://113.31.113.226:9999",
                changeOrigin: true,
                "secure": false,
                pathRewrite: {
                    "^/proxy": "", // 重写路径
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