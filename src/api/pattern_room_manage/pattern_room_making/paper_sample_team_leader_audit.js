import request from '@/utils/Request'

// 版房管理-版房打版-纸样组长审核-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/pattern/review/query',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样组长审核-纸样审核详情
const getDetail = (data) => {
    return request({
        url: '/proofing/pattern/review/detail',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样组长审核-通过
const pass = (data) => {
    return request({
        url: '/proofing/pattern/review/accept',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样组长审核-驳回
const reject = (data) => {
    return request({
        url: '/proofing/pattern/review/repulse',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    pass,
    reject
    
}
