import request from '@/utils/Request'

// 面料管理-版料采购-板料库存异常申请管理-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/materialStockExc/apply/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购--板料库存异常申请管理-删除
const deleteRows = (data) => {
    return request({
        url: '/material/materialStockExc/apply/delete',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-新增/编辑保存
const save = (data) => {
    return request({
        url: '/material/materialStockExc/apply/add',
        method: 'post',
        data
    })
}

// 面料管理-版料采购--库存异常申请管理/审批详情
const auditRecord = (data) => {
    return request({
        url: '/productAudit/getRecord/query',
        method: 'post',
        data
    })
}
export default {
    getList,
    deleteRows,
    save,
    auditRecord
}
