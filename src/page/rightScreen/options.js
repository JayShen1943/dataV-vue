/*
 * @Descripttion: 右侧副屏数据
 * @Author: JayShen
 * @Date: 2021-03-02 15:17:50
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-06 11:51:17
 */
// 设计打版进度一览表
export const designTable = (data) => ({
    header: ['款号', '分类', '季节', '设计', '日期'],
    headerBGC: '#15B1AF',
    data: data.map(item => {
        return [
            item.serialNumber,
            item.productionSupplierName,
            '夏季',
            item.designName,
            item.startRobDate
        ]
    })
})
// 面辅料采购一览表
export const purchaseTable = (data) => ({
    header: ['订单编号', '供应商', '面辅料', '数量', '下单时间', '订单状态', ],
    headerBGC: '#15B1AF',
    data: data.map(item => {
        return [
            item.serialNumber,
            item.fabricSupplierName,
            item.sampleTypeName,
            item.quantity,
            `${item.addTime&&item.addTime.month}-${item.addTime&&item.addTime.day}`,
            item.serialNumber
        ]
    })
})

// 新增订单一览表
export const newOrderTable = (data) => ({
    header: ['订单编号', '工厂', '货号', '名称', '货期', '数量', '外发时间'],
    headerBGC: '#67A6E0',
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