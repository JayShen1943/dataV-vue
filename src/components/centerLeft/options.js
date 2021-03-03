/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-01 20:05:08
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-03 11:43:01
 */
// import echarts from "echarts";
import {
    pieColor,
    pieColor2
} from "@/utils/echartColor";
// 品牌商类型--饼图
export const brandType = () => ({
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
    lineWidth: 50,
    radius: "70%",
    activeRadius: "75%",
    digitalFlopStyle: {
        fontSize: 0,
        fill: "#fff",
    },
    color: pieColor,
    legend: {
        type: "plain",
        show: "true",
        data: ["西凉", "益州", "兖州", "荆州", "幽州"],
    },
})
// 品牌商规模--柱状图
export const brandSize = () => ({
    data: [{
            name: "南阳",
            value: 167,
        },
        {
            name: "周口",
            value: 123,
        },
        {
            name: "漯河",
            value: 98,
        },
        {
            name: "郑州",
            value: 75,
        },
        {
            name: "西峡",
            value: 66,
        },
        {
            name: "西峡1",
            value: 66,
        },
    ],
    color: pieColor2,
    unit: "占比",
    showValue: true,
})
// 地域分布--饼图
export const geographicalDistribution = () => ({
    radius: "70%",
    activeRadius: "80%",
    data: [{
            name: "南阳",
            value: 167,
        },
        {
            name: "周口",
            value: 123,
        },
        {
            name: "漯河",
            value: 98,
        },
        {
            name: "郑州",
            value: 75,
        },
        {
            name: "西峡",
            value: 66,
        },
    ],
    color: pieColor2,
})
// 款式分类--百分比环图
export const styleClassification = (data, color) => ({
    color: color,
    legend: {
        show: false
    },

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
        },
        labelLine: {
            show: false
        },
        data: [{
                value: 5,
                name: '直接访问',
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',
                        textStyle: {
                            fontSize: 36,
                            fontWeight: 'bolder',
                        },
                    }
                },
            },
            {
                value: 120,
                name: '邮件营销'
            }
        ]
    }]

});
// 订单金额--柱状图
export const orderAmount = () => ({
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 32,
            },
        },
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },  
    //设置柱的宽度，要是数据太少，柱子太宽不美观~
    barWidth: 30,
    series: [{
        data: [120, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
            normal: {
                color: function (params) {
                    var colorList = ['#C76668', '#6BB5FE', '#2CCEAF', '#E7A976'];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}'
                }
            }
        },
    }]
})
// 订单增长情况
export const orderGrowth = () => ({
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 32,
            },
        },
        // 坐标轴设置
        axisLine: {
            show: true,
            lineStyle: {
                color: "#010A1C",
                width: 3, //这里是为了突出显示加上的
            },
        }
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: true,
            lineStyle: {
                color: "#010A1C",
                width: 2, //这里是为了突出显示加上的
            },
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 32,
            },
        },
        // 背景分割线
        splitLine: {
            show: true,
            interval: 0,
            lineStyle: {
                color: "#010A1C"
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        color: "#60CAAE",
        barWidth: 12,
        borderRadius: [3, 3, 0, 0],
    }, ]
})
// 订单生产类型--饼图
export const orderProductionType = () => ({
    tooltip: {
        trigger: "item",
    },
    legend: {
        show: false,
    },
    series: [{
        name: "访问来源",
        type: "pie",
        radius: "80%",
        color: pieColor,
        data: [{
                value: 1048,
                name: "搜索引擎"
            },
            {
                value: 735,
                name: "直接访问"
            },
            {
                value: 580,
                name: "邮件营销"
            },
            {
                value: 484,
                name: "联盟广告"
            },
            {
                value: 300,
                name: "视频广告"
            },
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
        },
    }, ],
})

// 服务类型 雷达图
export const serviceType = () => ({
    axisLine: {
        lineStyle: {
            color: 'green',
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#C5E4FF',
                fontSize: 32
            }
        },
        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea: {
            show: false,
            areaStyle: {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#1765A5', // 设置网格的颜色
            },
        },
        indicator: [{
                name: '设计',
                max: 6500
            },
            {
                name: '其他',
                max: 16000
            },
            {
                name: '成衣',
                max: 30000
            },
            {
                name: '加工',
                max: 38000
            },
            {
                name: '板房 ',
                max: 52000
            },
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        //  color:'red',
        areaStyle: {
            normal: {
                color: '#FF7D7F' // 填充的颜色。[ default: "#000" ]
            }
        },

        data: [{
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）',
        }, ]
    }]
})
// 颜色构成--柱形图
export const colorComposition = () => ({
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
    },
    grid: {
        left: "10%",
        right: "10%",
        bottom: "8%",
        top: 0,
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
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        // 柱形图数据展示
        label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: '#C5E4FF'
        },
        // 柱形图背部阴影
        showBackground: true,
        backgroundStyle: {
            color: '#0b1838'
        }
    }, ],
    color: "#3DAAEB",
    barWidth: 19,
})