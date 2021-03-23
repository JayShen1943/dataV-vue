/*
 * @Descripttion: 右侧副屏数据
 * @Author: JayShen
 * @Date: 2021-03-02 15:17:50
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-23 11:49:02
 */
import greenRound from "@/assets/image/icon/greenRound.png"
import yellowRound from "@/assets/image/icon/yellowRound.png"
// 设计打版进度一览表
export const designTable = (data) => ({
    header: ['款号', '分类', '季节', '日期', '打版状态', '工艺状态', '核价状态'],
    headerBGC: '#15B1AF',
    columnWidth: [90, 160, 50, 100],
    rowNum: 3,
    data: data.map(item => {
        return [
            item.designCode,
            `${item.gender}-${item.category}-${item.suitType}-${item.clazz}`,
            item.season,
            item.addTime,
            item.makeFlag ? '已打版' : '未打版',
            item.techniqueFlag ? '已完成' : '未完成',
            item.pricingFlag ? "已核价" : "未核价",

        ]
    })
})
// 面辅料采购一览表
export const purchaseTable = (data) => ({
    header: ['订单编号', '供应商', '面辅料', '数量', '下单时间', '订单状态', ],
    headerBGC: '#15B1AF',
    columnWidth: [220, 200, 80, 60, 100],
    rowNum: 3,
    data: data.map(item => {
        return [
            item.serialNumber,
            item.fabricSupplierName,
            item.sampleTypeName,
            item.quantity,
            item.addTime,
            '完成'
        ]
    })
})

// 新增订单一览表
export const newOrderTable = (data) => ({
    header: ['订单编号', '工厂', '货号', '名称', '货期', '数量', '外发时间'],
    headerBGC: '#67A6E0',
    columnWidth: [250],
    rowNum: 4,
    data: data.map(item => {
        return [
            item.serialNumber,
            item.productionSupplierName,
            item.itemCode,
            item.designName,
            item.deliveryDate,
            item.quantity,
            item.startRobDate,
        ]
    })
})
const yellow = `<span class="yellowRound"><img src="${yellowRound}" /></span>`
const green = `<span class="greenRound"><img src="${greenRound}"/></span> `
// 打版进度
export const makingProgress = (data) => ({
    header: ['<span style="color:#050D1D;font-weight: 600;font-size:18px"><span style="display: inline-block; vertical-align: middle; background: rgb(252, 206, 72);width: 4px;height: 16px; margin: 0px 10px; "></span>打版进度</span>',
        '<span  style=" color: #050D1D">采购</span>',
        '<span style= "color:#050D1D">制版</span>',
        '<span style="color:#050D1D">样衣</span>',
        '<span style="color:#050D1D">工艺</span>',
        '<span style="color:#050D1D">核价</span>',
    ],
    headerBGC: '#15B1AF',
    columnWidth: [120],
    rowNum: 3,
    align: ['left', 'center', 'center', 'center', 'center', 'center'],
    data: data.map(item => {
        return [
            item.designCode,
            item.purchaseFlag ? yellow : green,
            item.makeFlag ? yellow : green,
            item.sampleDressFlag ? yellow : green,
            item.techniqueFlag ? yellow : green,
            item.pricingFlag ? yellow : green,
        ]

    })
})


// 生产进度
export const productionProgress = (data) => ({
    header: ['<span style="color:#050D1D;font-weight: 600;font-size:18px"><span style="display: inline-block; vertical-align: middle; background: rgb(252, 206, 72);width: 4px;height: 16px; margin: 0px 10px; "></span>生产进度</span>',
        '<span style= "color:#050D1D">采购</span>',
        '<span style="color:#050D1D">接单</span>',
        '<span style="color:#050D1D">裁数</span>',
        '<span style="color:#050D1D">出货</span>',
        '<span style="color:#050D1D">验收</span>',
        '<span style="color:#050D1D">交付</span>',
    ],
    headerBGC: '#15B1AF',
    columnWidth: [240],
    rowNum: 3,
    align: ['left', 'center', 'center', 'center', 'center', 'center', 'center', ],
    data: data.map(item => {
        return [
            item.serialNumber,
            item.purchaseFinishFlag ? yellow : green,
            item.robFlag ? yellow : green,
            item.tailorFlag ? yellow : green,
            item.factoryOutFlag ? yellow : green,
            item.acceptanceFlag ? yellow : green,
            item.outFlag ? yellow : green,
        ]
    })
})