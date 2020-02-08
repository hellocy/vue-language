import request from '@/utils/Request'

// 版房管理-打版作废-申请列表
const getList = (data) => {
    return request({
        url: '/proofing/invalid/apply/query',
        method: 'post',
        data
    })
}

// 版房管理-打版作废-申请明细
const getDetail = (data) => {
    return request({
        url: '/proofing/invalid/supply/detail',
        method: 'post',
        data
    })
}

// 版房管理-打版作废-申请提交
const submit = (data) => {
    return request({
        url: '/proofing/invalid/supply/submit',
        method: 'post',
        data
    })
}

// 版房管理-打版作废-申请保存
const save = (data) => {
    return request({
        url: '/proofing/invalid/supply/accept',
        method: 'post',
        data
    })
}
// 版房管理-打版作废-申请作废
const invalid = (data) => {
    return request({
        url: '/proofing/invalid/supply/invalid',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    save,
    submit,
    invalid
}
