/*
 * @Descripttion: 右侧副屏数据
 * @Author: JayShen
 * @Date: 2021-03-02 15:17:50
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-17 16:41:27
 */
// 设计打版进度一览表
export const designTable = (data) => ({
    header: ['款号', '分类', '季节', '日期', '打版状态', '工艺状态', '核价状态'],
    headerBGC: '#15B1AF',
    columnWidth: [90, 160, 50, 100],
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
    columnWidth: [220,200,80,60,100],
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