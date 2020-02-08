import request from '@/utils/Request'

// 面料管理-版料采购-板料库存异常申请审批-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/materialStockExc/audit/query',
        method: 'post',
        data
    })
}

// 面料管理-版料采购-审核
const audit = (data) => {
    return request({
        url: '/material/materialStockExc/apply/accept',
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
    audit,
    auditRecord
}
