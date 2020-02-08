import request from '@/utils/Request'

// 版房管理-核价-工艺列表
const getList = data => {
    return request({
        url: '/proofing/craft/bills/query',
        method: 'post',
        data
    })
}

// 版房管理-核价-工艺明细
const getDetail = data => {
    return request({
        url: '/proofing/craft/bills/detail',
        method: 'post',
        data
    })
}

// 版房管理-核价-工艺-修改保存
const updateSave = data => {
    return request({
        url: '/proofing/craft/bills/update',
        method: 'post',
        data
    })
}

// 版房管理-核价-工艺-修改提交
const updateSubmit = data => {
    return request({
        url: '/proofing/craft/bills/submit',
        method: 'post',
        data
    })
}

// 版房管理-核价-工艺-修改驳回
const updateReject = data => {
    return request({
        url: '/proofing/craft/bills/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    updateSave,
    updateSubmit,
    updateReject
}
