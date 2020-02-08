import request from '@/utils/Request'

// 版房管理-版房打版-车缝质检-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/sewing/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-车缝质检-指派车缝师
const assign = (data) => {
    return request({
        url: '/proofing/sewing/assign',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-车缝质检-提交审版
const submit = (data) => {
    return request({
        url: '/proofing/sewing/submit',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-车缝质检-退回助理
const repulse = (data) => {
    return request({
        url: '/proofing/sewing/repulse',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-车缝质检-驳回
const rejectSewing = (data) => {
    return request({
        url: '/proofing/sewing/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    assign,
    submit,
    repulse,
    rejectSewing
    
}
