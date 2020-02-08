import request from '@/utils/Request'

// 版房管理-版房打版-审版-获取主列表数据
const getList = data => {
    return request({
        url: '/proofing/confirm/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-删除图片
const deleteImage = data => {
    return request({
        url: '/proofing/confirm/image/delete',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-审版结果提交
const submit = data => {
    return request({
        url: '/proofing/confirm/accept',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-获取责任人
const getPerson = data => {
    return request({
        url: '/proofing/user/confirm/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-复版提交
const reprintSubmit = data => {
    return request({
        url: '/proofing/confirm/repulse',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-驳回
const reject = (data) => {
    return request({
        url: '/proofing/leader/confirm/reject',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-退回助理
const sendBack = data => {
    return request({
        url: '/proofing/leader/confirm/repulse',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-审版-通过-详情
const getPassDetail = data => {
    return request({
        url: '/proofing/confirm/detail',
        method: 'post',
        data
    })
}
// 版房管理-版房打版-审版-修改评语
const updateComment = data => {
    return request({
        url: '/proofing/confirm/update',
        method: 'post',
        data
    })
}

export default {
    getList,
    deleteImage,
    submit,
    getPerson,
    reject,
    sendBack,
    reprintSubmit,
    getPassDetail,
    updateComment
}
