import request from '@/utils/Request'

// 版房管理-二次工艺-助理列表
const getList = (data) => {
    return request({
        url: '/proofing/secondary/craft/assistant/query',
        method: 'post',
        data
    })
}

// 版房管理-二次工艺-退样认领
const updateClaimed = (data) => {
    return request({
        url: '/proofing/secondary/craft/assistant/accept',
        method: 'post',
        data
    })
}

// 版房管理-二次工艺-详情
const getDetail = (data) => {
    return request({
        url: '/proofing/secondary/craft/assistant/detail',
        method: 'post',
        data
    })
}

// 版房管理-二次工艺-驳回
const reject = (data) => {
    return request({
        url: '/proofing/secondary/craft/assistant/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updateClaimed,
    reject
}
