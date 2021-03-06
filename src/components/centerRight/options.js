/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 11:11:21
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-06 10:08:33
 */
import {
    pieColor,
    // pieColor2
} from "@/utils/echartColor";
// 面料供应商--饼图嵌套
export const fabricSupplier = (data) => ({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        show: false
    },
    series: [{
            type: 'pie',
            selectedMode: 'single',
            color: ["#FF7D7F", "#E96074", "#E7A976", "#FCCE48"],
            radius: [0, '50%'],
            label: {
                position: 'inner',
                fontSize: 19,
                show: false
            },
            labelLine: {
                show: false
            },
            data: data.map(item => {
                return {
                    value: item.num,
                    name: item.sampleTypeName
                }
            })
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['65%', '90%'],
            color: pieColor,
            labelLine: {
                length: 30,
            },
            label: {
                show: false,
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            },
            data: data.map(item => {
                return {
                    value: item.num,
                    name: item.sampleTypeName
                }
            })
        }
    ]
})
// 面辅料供应地域分布--柱形图
export const fabricSupplierDistributed = () => ({
    data: [{
            name: '南阳',
            value: 167
        },
        {
            name: '周口',
            value: 123
        },
        {
            name: '漯河',
            value: 98
        },
        {
            name: '郑州',
            value: 75
        },
        {
            name: '西峡',
            value: 66
        },
    ],
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
export const designerRank2 = (data) => ({
    header: ['名称', '满意度'],
    headerBGC: '#67A6E0',
    data: data.map(item => {
        return [
            item.designer,
            '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'
        ]
    })
})
// 工厂接单排名
export const factoryRank = (data) => ({
    header: ['名称', '数量', '排名'],
    headerBGC: '#E7A976',
    data: data.map(item => {
        return [
            item.productionSupplierName,
            item.orderDetailNum,
            item.num,
        ]
    })
})
// 工艺商--饼图
export const craftsman = () => ({
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
    lineWidth: 65,
    radius: "70%",
    activeRadius: "80%",
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
// 分销商
export const sellers = (data, color) => ({
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
                value: data,
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',
                        textStyle: {
                            fontSize: 22,
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