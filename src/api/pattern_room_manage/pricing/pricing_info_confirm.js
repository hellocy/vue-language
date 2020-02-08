import request from '@/utils/Request'

// 版房管理-核价-核价确认
const getList = data => {
    return request({
        url: '/proofing/craft/pricing/confirm/query',
        method: 'post',
        data
    })
}

// 版房管理-核价-核价确认详情
const getDetail = data => {
    return request({
        url: '/proofing/craft/pricing/confirm/detail',
        method: 'post',
        data
    })
}
// 版房管理-核价-核价确认详情-提交
const submitDetail = data => {
    return request({
        url: '/proofing/craft/pricing/confirm/submit',
        method: 'post',
        data
    })
}

// 版房管理-核价-核价确认详情-保存
const saveDetail = data => {
    return request({
        url: '/proofing/craft/pricing/confirm/update',
        method: 'post',
        data
    })
}

// 版房管理-核价-核价确认详情-获取面料详情
const getMaterialFabricInfo = data => {
    return request({
        url: '/materialFabricInfo/query',
        method: 'post',
        data
    })
}

// 版房管理-核价-核价确认详情-获取二次工艺编码
const getSecondaryCraftsCode = data => {
    return request({
        url: '/fabric/craft/query',
        method: 'post',
        data
    })
}

// 版房管理-核价-核价确认详情-驳回
const confirmReject = data => {
    return request({
        url: '/proofing/craft/pricing/confirm/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    submitDetail,
    saveDetail,
    getMaterialFabricInfo,
    getSecondaryCraftsCode,
    confirmReject
}
