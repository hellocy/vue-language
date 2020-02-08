import request from '@/utils/Request'

// 版房管理-版房打版-裁版-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/crop/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-裁版-选择裁版人
const editorAssign = (data) => {
    return request({
        url: '/proofing/crop/assign',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-裁版-提交车缝
const submit = (data) => {
    return request({
        url: '/proofing/crop/submit',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-裁版-退回助理
const assignSubmit = (data) => {
    return request({
        url: '/proofing/crop/repulse',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-裁版-驳回
const rejectCrop = (data) => {
    return request({
        url: '/proofing/crop/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    editorAssign,
    submit,
    assignSubmit,
    rejectCrop
}
