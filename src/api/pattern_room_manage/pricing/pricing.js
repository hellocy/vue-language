import request from '@/utils/Request'

// 版房-核价-列表数据
const getList = (data) => {
    return request({
        url: '/proofing/craft/pricing/complete/query',
        method: 'post',
        data
    })
}

// 版房-核价-明细
const getDetail = (data) => {
    return request({
        url: '/proofing/craft/pricing/complete/detail',
        method: 'post',
        data
    })
}

// 版房-核价-保存
const updateSave = (data) => {
    return request({
        url: '/proofing/craft/pricing/complete/update',
        method: 'post',
        data
    })
}

// 版房-核价-提交
const updateSubmit = (data) => {
    return request({
        url: '/proofing/craft/pricing/complete/submit',
        method: 'post',
        data
    })
}

// 版房-核价-驳回
const putOverrule = (data) => {
    return request({
        url: '/proofing/craft/pricing/complete/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updateSave,
    updateSubmit,
    putOverrule
}
