import request from '@/utils/Request'

// 品类规划-品类规划管理-获取主列表数据
const getList = (data) => {
    return request({
        url: '/productManage/query',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-获取明细详情
const getDetail = (data) => {
    return request({
        url: '/productManageDetail/query',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-新增
const add = (data) => {
    return request({
        url: '/productManage/add',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-编辑保存
const edit = (data) => {
    return request({
        url: '/productManage/update',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-提交
const submit = (data) => {
    return request({
        url: '/fabric/apply/submit',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-删除
const deleteRows = (data) => {
    return request({
        url: '/productManage/delete',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-获取Pn
const getPnData = (data) => {
    return request({
        url: '/biz/productPlanCategory/query',
        method: 'post',
        data
    })
}

// 品类规划-品类规划管理-审批详情
const auditRecord = (data) => {
    return request({
        url: '/productAudit/getRecord/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    add,
    edit,
    submit,
    deleteRows,
    auditRecord,
    getPnData
}
