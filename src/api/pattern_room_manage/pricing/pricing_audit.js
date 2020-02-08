import request from '@/utils/Request'

// 版房管理-核价-审核列表
const getList = (data) => {
    return request({
        url: '/proofing/craft/pricing/leader/audit/query',
        method: 'post',
        data
    })
}

// 版房管理-核价-审核详情
const getDetail = (data) => {
    return request({
        url: '/proofing/craft/pricing/leader/audit/detail',
        method: 'post',
        data
    })
}

// 版房管理-核价-审核通过
const updatePass = (data) => {
    return request({
        url: '/proofing/craft/pricing/leader/audit/submit',
        method: 'post',
        data
    })
}

// 版房管理-核价-审核驳回
const updateReject = (data) => {
    return request({
        url: '/proofing/craft/pricing/leader/audit/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updatePass,
    updateReject
}
