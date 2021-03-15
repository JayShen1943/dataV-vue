/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 11:11:21
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-15 20:06:45
 */
import {
    pieColor,
    // pieColor2
} from "@/utils/echartColor";
// 面料供应商--饼图嵌套
export const fabricSupplier = (data) => ({
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        right: 10,
        bottom: 0,
        itemWidth: 4,
        itemHeight: 16,
        textStyle: {
            color: '#C5E4FF',
            fontSize: 16
        }

    },
    series: [{
        // name: "访问来源",
        type: "pie",
        radius: "80%",
        color: ['#FF7D7F', '#FCCE48', '#664CC7'],
        data: data.map(item => {
            return {
                value: item.percent,
                name: item.sampleTypeName
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
// 面辅料供应地域分布--柱形图
export const fabricSupplierDistributed = (data) => ({
    data: data.map(item => {
        return {
            name: item.code,
            value: Number(item.value)
        }
    }),
    colors: ['#FCCE48', '#FCCE48', '#FCCE48', '#FCCE48', '#FCCE48'],
    // unit: '单位',
    showValue: true
})
// 设计师满意度排名1
export const designerRank = (data) => ({
    header: ['姓名', '满意度'],
    headerBGC: '#15B1AF',
    // oddRowBGC: '#0B86C2',
    // evenRowBGC: '',
    data: data.map(item => {
        return [
            item.designer,
            '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'
        ]
    })
})
// 设计师满意度排名2
export const designerRank2 = (data = [{
        name: '智通生产基地',
        area: '广州',
        html: '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'
    }, {
        name: '三鑫生产基地',
        area: '杭州',
        html: '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'
    },
    {
        name: '于都生产基地',
        area: '赣州',
        html: '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'
    },
    {
        name: '千百万生产基地',
        area: '杭州',
        html: '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'
    },
]) => ({
    header: ['名称', '区域', '满意度'],
    headerBGC: '#67A6E0',
    rowNum: 4,
    data: data.map(item => {
        return [
            item.name,
            item.area,
            item.html
        ]
    })
})
// 工厂接单排名
export const factoryRank = (data) => ({
    header: ['名称', '数量', '排名'],
    headerBGC: '#E7A976',
    data: data.map((item, index) => {
        return [
            item.productionSupplierName,
            item.orderDetailNum,
            index + 1,
        ]
    }),
    columnWidth: [250]
})
// 工艺商--饼图
export const craftsman = (data) => ({
    data: data.map(item => {
        return {
            name: item.codeName,
            value: Number(item.value)
        }
    }),
    lineWidth: 20,
    radius: "70%",
    activeRadius: "80%",
    digitalFlopStyle: {
        fontSize: 20,
        fill: "#fff",
    },
    color: pieColor,
})
// 分销商
export const sellers = (data, color) => ({
    color: color,
    legend: {
        show: false
    },

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '80%'],
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
                value: data,
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bolder',
                        },
                    }
                },
            },
            {
                value: 118,
                name: '邮件营销'
            }
        ]
    }]

});
// 各地区域工厂产能分布
export const factoryDistribution = (data) => ({
    header: ['区域', '企业数量', '总产能(件)', '设备联网数(台)', '就业人数'],
    headerBGC: '#15B1AF',
    data: data.map(item => {
        return [
            item.area,
            item.companyNum,
            item.totalCapacity,
            item.deviceNum,
            item.employeeNum,
        ]
    })
})