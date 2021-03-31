/*
 * @Descripttion: 左侧副屏数据
 * @Author: JayShen
 * @Date: 2021-03-02 15:17:50
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-31 20:54:45
 */
import greenRound from "@/assets/image/icon/greenRound.png"
import yellowRound from "@/assets/image/icon/yellowRound.png"
import {
    pieColor2
} from "@/utils/echartColor";
import echarts from "echarts";
export const newbrand = (data) => ({
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
        data: data.map(item => item.name),
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#C5E4FF",
                fontSize: 20,
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
                        color: '#2DD3B3'
                    },
                ]
            )
        },
        data: data.map(item => item.value),
        // 柱形图数据展示
    }, ],
    color: "#3DAAEB",
    barWidth: 19,
})
// 新增分销商
export const newDistributor = (data) => ({
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
        data: data.map(item => item.name),
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#C5E4FF",
                fontSize: 20,
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
                        color: '#FACB46'
                    },
                    {
                        offset: 1,
                        color: '#E3AA2D'
                    },
                ]
            )
        },
        data: data.map(item => item.value),
        // 柱形图数据展示
    }, ],
    color: "#3DAAEB",
    barWidth: 19,
})
// 新增入驻品牌商--表格
export const newMerchants = (data) => ({
    header: ['<span style="color:#050D1D">名称</span>', '<span style="color:#050D1D">类型</span>', '<span style="color:#050D1D">入驻时间</span>'],
    headerBGC: '#15B1AF',
    rowNum: 10,
    data: data.map(item => {
        return [
            item.customerName,
            item.channelName,
            item.addDate
        ]
    })
})
// 款式分类--饼图
export const styleClassification = (data) => ({
    data: data.map(item => {
        return {
            value: item.num,
            name: item.gender
        }
    }),
    lineWidth: 25,
    radius: "50%",
    activeRadius: "60%",
    digitalFlopStyle: {
        fontSize: 20,
        fill: "#fff",
    },
    color: pieColor2,
    legend: {
        show: false,
    },

})
// 服务类型--饼图
export const serviceType = (data) => ({
    legend: {
        show: true,
        align: 'auto',
        bottom: 0,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            color: '#C5E4FF',
            fontSize: 16
        }
    },
    series: [{
        // name: "访问来源",
        type: "pie",
        radius: "50%",
        color: ['#6BB5FE', '#FCCE48'],
        data: data.map(item => {
            return {
                value: item.num,
                name: item.serviceTypeName
            }
        }),
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
        },
        // 指示线文字
        label: {
            normal: {
                formatter: "{d}%", //数值和百分比
                fontSize: 16,
            }

        }
    }, ],
})
// 订单金额构成
export const amountComposition = (data) => ({
    grid: {
        left: "6%",
        right: "20%",
        bottom: "5%",
        top: '5%',
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
                fontSize: 16,
            },
        },
        data: data.map(item => item.code),
        // show: false,
    },
    barWidth: 20,
    series: [{
        data: data.map(item => item.value),
        type: 'bar',
        showBackground: true,
        label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: '#C5E4FF',
            fontSize: 16
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
export const newOrderForm = (data) => ({
    header: ['<span style="color:#050D1D;font-weight: 600;font-size:18px"><span style="display: inline-block; vertical-align: middle; background: rgb(252, 206, 72);width: 4px;height: 16px; margin: 0px 10px; "></span>新增订单一览表</span>', '<span style="color:#050D1D">品牌商</span>', '<span style="color:#050D1D">款式</span>', '<span style="color:#050D1D">数量</span>', '<span style="color:#050D1D">下单时间</span>'],
    headerBGC: '#15B1AF',
    columnWidth: [300],
    rowNum: 4,
    data: data.map(item => {
        return [
            item.serialNumber,
            item.customerName,
            item.clazz,
            item.quantity,
            item.addTime
        ]
    })
})
const yellow = `<span class="yellowRound"><img src="${yellowRound}" /></span>`
const green = `<span class="greenRound"><img src="${greenRound}"/></span> `
// 订单进度
export const orderProgress = (data) => ({
    header: ['<span style="color:#050D1D;font-weight: 600;font-size:18px"><span style="display: inline-block; vertical-align: middle; background: rgb(252, 206, 72);width: 4px;height: 16px; margin: 0px 10px; "></span>订单进度</span>',
        '<span style= "color:#050D1D"> 设计</span>',
        '<span style= "color:#050D1D"> 报价</span>',
        '<span style="color:#050D1D">制版</span>',
        '<span style="color:#050D1D">下单</span>',
        '<span style="color:#050D1D">采购</span>',
        '<span style="color:#050D1D">生产</span>',
        '<span style="color:#050D1D">验收</span>',
        '<span style="color:#050D1D">出货</span>',
    ],
    headerBGC: '#15B1AF',
    columnWidth: [240],
    rowNum: 4,
    align: ['left', 'center', 'center', 'center', 'center', 'center', 'center', 'center', 'center', ],
    data: data.map(item => {
        return [
            item.serialNumber,
            item.designFlag ? yellow : green,
            item.quoteFlag ? yellow : green,
            item.sampleFlag ? yellow : green,
            item.demandRequestFlag ? yellow : green,
            item.purchaseFinishFlag ? yellow : green,
            item.productionFlag ? yellow : green,
            item.acceptanceFlag ? yellow : green,
            item.outFlag ? yellow : green,
        ]
    })
})