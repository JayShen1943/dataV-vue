/*
 * @Descripttion: vue配置
 * @Author: JayShen
 * @Date: 2021-02-27 23:07:27
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 21:00:58
 */
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    devServer: {
        port: 1943,
        proxy: {
            "/proxy": {
                target: process.env.VUE_APP_API,
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