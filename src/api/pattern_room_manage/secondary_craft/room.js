import request from '@/utils/Request'

// 版房管理-二次工艺-版房列表
const getList = data => {
    return request({
        url: '/proofing/secondary/craft/query',
        method: 'post',
        data
    })
}

// 版房管理-二次工艺-版房收样确认
const updateConfirm = data => {
    return request({
        url: '/proofing/secondary/craft/accept',
        method: 'post',
        data
    })
}

// 版房管理-二次工艺-驳回
const reject = data => {
    return request({
        url: '/proofing/secondary/craft/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    updateConfirm,
    reject
}
