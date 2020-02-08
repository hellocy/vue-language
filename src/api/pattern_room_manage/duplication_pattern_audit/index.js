import request from '@/utils/Request'

// 版房管理-复版审核-列表
const getList = data => {
    return request({
        url: '/proofing/confirm/repattern/query',
        method: 'post',
        data
    })
}

// 版房管理-复版审核--获取明细
const getDetail = data => {
    return request({
        url: '/proofing/confirm/repattern/detail',
        method: 'post',
        data
    })
}

// 版房管理-复版审核--获取复版责任人
const getPersonLiable = data => {
    return request({
        url: '/proofing/user/confirm/query',
        method: 'post',
        data
    })
}

// 版房管理-复版审核-通过
const updatePassed = data => {
    return request({
        url: '/proofing/confirm/repattern/accept',
        method: 'post',
        data
    })
}

// 版房管理-复版审核-通过
const updateRejected = data => {
    return request({
        url: '/proofing/confirm/repattern/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    getPersonLiable,
    updatePassed,
    updateRejected
}
