import request from '@/utils/Request'

// 版房管理-版房打版-纸样确认-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/pattern/confirm/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样确认-纸样确认详情
const getDetail = (data) => {
    return request({
        url: '/proofing/pattern/confirm/detail/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样确认-删除文件
const deleteFile = (data) => {
    return request({
        url: '/proofing/pattern/confirm/delete',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样确认-保存
const save = (data) => {
    return request({
        url: '/proofing/pattern/confirm/update',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样确认-驳回
const reject = (data) => {
    return request({
        url: '/proofing/pattern/confirm/reject',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样确认-提交
const submit = (data) => {
    return request({
        url: '/proofing/pattern/confirm/submit',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样确认-纸样模板切换详情
const switchDetail = (data) => {
    return request({
        url: '/proofing/pattern/confirm/template/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    deleteFile,
    save,
    submit,
    reject,
    switchDetail
    
}
