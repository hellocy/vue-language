import request from '@/utils/Request'

// 版房管理-退回助理-助理-列表数据
const getList = (data) => {
    return request({
        url: '/proofing/repulse/assist/query',
        method: 'post',
        data
    })
}

// 版房管理-退回助理-助理-获取明细
const updateConfirm = (data) => {
    return request({
        url: '/proofing/repulse/assist/accept',
        method: 'post',
        data
    })
}

// 版房管理-退回助理-助理-驳回
const reject = (data) => {
    return request({
        url: '/proofing/repulse/assist/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    updateConfirm,
    reject
}
