import request from '@/utils/Request'

// 版房管理-退回助理-版房-列表数据
const getList = data => {
    return request({
        url: '/proofing/repulse/leader/query',
        method: 'post',
        data
    })
}

// 版房管理-退回助理-版房-获取明细
const updateConfirm = data => {
    return request({
        url: '/proofing/repulse/leader/accept',
        method: 'post',
        data
    })
}

// 版房管理-退回助理-版房-驳回
const reject = data => {
    return request({
        url: '/proofing/repulse/leader/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    updateConfirm,
    reject
}
