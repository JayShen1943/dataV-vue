/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-02 11:11:21
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-03 09:39:17
 */
import {
    pieColor,
    // pieColor2
} from "@/utils/echartColor";
// 面料供应商--饼图嵌套
export const fabricSupplier = () => ({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        show: false
    },
    series: [{
            name: '访问来源',
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
            data: [{
                    value: 1548,
                    name: '搜索引擎'
                },
                {
                    value: 775,
                    name: '直达'
                },
                {
                    value: 679,
                    name: '营销广告',
                }
            ]
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
            data: [{
                    value: 1048,
                    name: '百度'
                },
                {
                    value: 335,
                    name: '直达'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 251,
                    name: '谷歌'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 147,
                    name: '必应'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 102,
                    name: '其他'
                }
            ]
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
export const designerRank = () => ({
    header: ['姓名', '擅长方向', '满意度'],
    headerBGC: '#15B1AF',
    // oddRowBGC: '#0B86C2',
    // evenRowBGC: '',
    data: [
        ['行1列1', '行1列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行2列1', '行2列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行3列1', '行3列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行4列1', '行4列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行5列1', '行5列2', '<span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行6列1', '行6列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行7列1', '行7列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行8列1', '行8列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行9列1', '行9列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行10列1', '行10列2', '<span class="iconfont icon-wujiaoxing"></span>']
    ]
})
// 设计师满意度排名2
export const designerRank2 = () => ({
    header: ['名称', '区域', '满意度'],
    headerBGC: '#67A6E0',
    data: [
        ['行1列1', '行1列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行2列1', '行2列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行3列1', '行3列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行4列1', '行4列2', '<span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行5列1', '行5列2', '<span class="iconfont icon-wujiaoxing"></span> <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行6列1', '行6列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行7列1', '行7列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行8列1', '行8列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行9列1', '行9列2', ' <span class="iconfont icon-wujiaoxing"></span><span class="iconfont icon-wujiaoxing"></span>'],
        ['行10列1', '行10列2', '<span class="iconfont icon-wujiaoxing"></span>']
    ]
})
// 工厂接单排名
export const factoryRank = () => ({
    header: ['名称', '区域', '排名'],
    headerBGC: '#E7A976',
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
// 各地区域工厂产能分布
export const factoryDistribution = () => ({
    header: ['名称', '区域', '排名'],
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