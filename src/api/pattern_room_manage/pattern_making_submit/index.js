import request from '@/utils/Request'

// 版房管理-打版提交-打版提交-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/query',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-选择编辑版单获取数据
const getDetail = (data) => {
    return request({
        url: '/proofing/detail',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-获取尺寸信息规格
const getTemplate = (data) => {
    return request({
        url: '/proofing/dimension/template/query',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-设计版单提交
const submit = (data) => {
    return request({
        url: '/proofing/submit',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-设计版单保存
const save = (data) => {
    return request({
        url: '/proofing/update',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-设计版单作废
const cancel = (data) => {
    return request({
        url: '/proofing/invalid',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-撤回
const retract = (data) => {
    return request({
        url: '/proofing/retract',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-获取产品编码
const getSku = (data) => {
    return request({
        url: '/proofing/sku/query',
        method: 'post',
        data
    })
}

// 版房管理-打版提交-打版提交-选择产品编码获取详情
const chooseSku = (data) => {
    return request({
        url: '/proofing/base/info/query',
        method: 'post',
        data
    })
}
export default {
    getList,
    getDetail,
    getTemplate,
    submit,
    save,
    cancel,
    getSku,
    chooseSku,
    retract
}
