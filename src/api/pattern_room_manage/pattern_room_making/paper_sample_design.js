import request from '@/utils/Request'

// 版房管理-版房打版-纸样设计-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/pattern/design/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样设计-选择提交裁版获取数据
const getDetail = (data) => {
    return request({
        url: '/proofing/pattern/design/detail/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样设计-版单编辑提交
const submit = (data) => {
    return request({
        url: '/proofing/pattern/design/submit',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样设计-版单编辑保存
const save = (data) => {
    return request({
        url: '/proofing/pattern/design/update',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样设计-退回助理提交
const returnSubmit = (data) => {
    return request({
        url: '/proofing/pattern/design/repulse',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样设计-切换纸样模板详情
const switchDetail = (data) => {
    return request({
        url: '/proofing/pattern/design/template/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样设计-驳回
const rejectPatternDesign = (data) => {
    return request({
        url: '/proofing/pattern/design/reject',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    submit,
    save,
    returnSubmit,
    switchDetail,
    rejectPatternDesign
    
}
