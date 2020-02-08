import request from '@/utils/Request'

// 版房管理-打版作废-审核列表
const getList = (data) => {
    return request({
        url: '/proofing/invalid/audit/query',
        method: 'post',
        data
    })
}

// 版房管理-打版作废-审核明细
const getDetail = (data) => {
    return request({
        url: '/proofing/invalid/audit/detail',
        method: 'post',
        data
    })
}

// 版房管理-打版作废-申请通过
const updatePassed = (data) => {
    return request({
        url: '/proofing/invalid/audit/accept',
        method: 'post',
        data
    })
}

// 版房管理-打版作废-申请驳回
const updateReject = (data) => {
    return request({
        url: '/proofing/invalid/audit/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updatePassed,
    updateReject
}
