import request from '@/utils/Request'

// 品类规划-品类规划审批-获取主列表数据
const getList = (data) => {
    return request({
        url: '/productAudit/query',
        method: 'post',
        data
    })
}

// 品类规划-品类规划审批-审批
const audit = (data) => {
    return request({
        url: '/productAudit/accept',
        method: 'post',
        data
    })
}

// 品类规划-品类规划审批-审批记录
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
