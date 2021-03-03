/*
 * @Descripttion: 左侧副屏数据
 * @Author: JayShen
 * @Date: 2021-03-02 15:17:50
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-03 11:11:08
 */
import {
    // pieColor,
    pieColor2
} from "@/utils/echartColor";
import echarts from "echarts";
export const newbrand = () => ({
    // data: [{
    //         name: '南阳',
    //         value: 167
    //     },
    //     {
    //         name: '周口',
    //         value: 123
    //     },
    //     {
    //         name: '漯河',
    //         value: 98
    //     },
    //     {
    //         name: '郑州',
    //         value: 75
    //     },
    //     {
    //         name: '西峡',
    //         value: 66
    //     },
    // ],
    // colors: ['#linear-gradient(270deg,#01f7fa, #059dfb);', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
    // unit: '单位'
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
    },
    grid: {
        left: "5%",
        right: "5%",
        bottom: "0%",
        top: "10",
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: "category",
        data: ["巴西", "印尼", "美国", "印度", "中国", "世界"],
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#C5E4FF",
                fontSize: 32,
            },
        },
    },
    series: [{
        name: "2011年",
        type: "bar",
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [{
                        offset: 0,
                        color: '#01F7FA'
                    },
                    {
                        offset: 1,
                        color: '#059DFB'
                    },
                ]
            )
        },
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        // 柱形图数据展示
    }, ],
    color: "#3DAAEB",
    barWidth: 19,
})
// 新增入驻品牌商--表格
export const newMerchants = () => ({
    header: ['名称', '类型', '入驻时间'],
    headerBGC: '#15B1AF',
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
    ]
})
// 款式分类--饼图
export const styleClassification = () => ({
    data: [{
            name: "周口",
            value: 55,
        },
        {
            name: "南阳",
            value: 120,
        },
        {
            name: "西峡",
            value: 78,
        },
        {
            name: "驻马店",
            value: 66,
        },
        {
            name: "新乡",
            value: 80,
        },
    ],
    lineWidth: 70,
    radius: "60%",
    activeRadius: "70%",
    digitalFlopStyle: {
        fontSize: 0,
        fill: "#fff",
    },
    color: pieColor2,
    legend: {
        type: "plain",
        show: "true",
        data: ["西凉", "益州", "兖州", "荆州", "幽州"],
    },

})
// 服务类型--柱状图
export const serviceType = () => ({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#C5E4FF",
                fontSize: 32,
            },
        },
    },
    yAxis: {
        show: false,
    },
    barWidth: 30,
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        itemStyle: {
            normal: {
                color: function (params) {
                    return pieColor2[params.dataIndex]
                },
                // label: {
                //     show: true,
                //     position: 'top',
                //     formatter: '{b}\n{c}'
                // }
            }
        },
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
})
// 订单金额构成
export const amountComposition = () => ({
    grid: {
        left: "6%",
        right: "10%",
        bottom: "5%",
        top: 0,
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#C5E4FF",
                fontSize: 32,
            },
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // show: false,
    },
    barWidth: 30,
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: '#C5E4FF',
            fontSize: 28
        },
        itemStyle: {
            normal: {
                color: function (params) {
                    return pieColor2[params.dataIndex]
                },

            }
        },
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
})
// 新增订单一览表
export const newOrderForm = () => ({
    header: ['名称', '类型', '入驻时间'],
    headerBGC: '#15B1AF',
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
    ]
})