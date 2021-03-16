/*
 * @Descripttion: vue配置
 * @Author: JayShen
 * @Date: 2021-02-27 23:07:27
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-16 13:54:13
 */
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    devServer: {
        port: 1943,
        proxy: {
            "/act": {
                target: process.env.VUE_APP_API,
                changeOrigin: true,
                "secure": false,
                pathRewrite: {
                    "^/act": "", // 重写路径
                },

            },
            "/video": {
                target: 'https://open.ys7.com',
                changeOrigin: true,
                "secure": false,
                pathRewrite: {
                    "^/video": "", // 重写路径
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