import request from '@/utils/Request'

// 版房管理-核价-排料
const getList = (data) => {
    return request({
        url: '/proofing/craft/pricing/layout/complete/query',
        method: 'post',
        data
    })
}

// 版房管理-核价-排料-详情
const getDetail = (data) => {
    return request({
        url: '/proofing/craft/pricing/layout/complete/detail',
        method: 'post',
        data
    })
}

// 版房管理-核价-排料-提交
const submitDetail = (data) => {
    return request({
        url: '/proofing/craft/pricing/layout/complete/submit',
        method: 'post',
        data
    })
}

// 版房管理-核价-排料-保存
const updateDetail = (data) => {
    return request({
        url: '/proofing/craft/pricing/layout/complete/update',
        method: 'post',
        data
    })
}

// 版房管理-核价-排料-退回助理
const sendBackAssistant = (data) => {
    return request({
        url: '/proofing/craft/pricing/layout/complete/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    submitDetail,
    updateDetail,
    sendBackAssistant
}
