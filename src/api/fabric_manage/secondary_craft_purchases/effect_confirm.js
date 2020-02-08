import request from '@/utils/Request'

// 面料管理-二次工艺采购-二次工艺效果确认获取列表
const getList = (data) => {
    return request({
        url: '/craft/confirm/query',
        method: 'post',
        data
    })
}
// 面料管理-二次工艺采购-提交
const submit = (data) => {
    return request({
        url: '/craft/confirm/complete',
        method: 'post',
        data
    })
}
// 面料管理-二次工艺采购-退回
const sendBack = (data) => {
    return request({
        url: '/craft/confirm/repulse',
        method: 'post',
        data
    })
}
// 面料管理-版料采购-审核查询
const auditFabricApply = (data) => {
    return request({
        url: '/craft/apply/audit/query',
        method: 'post',
        data
    })
}
export default {
    getList,
    submit,
    sendBack,
    auditFabricApply
}
