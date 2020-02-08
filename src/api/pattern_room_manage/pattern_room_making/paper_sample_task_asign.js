import request from '@/utils/Request'

// 版房管理-版房打版-获取主列表数据
const getList = (data) => {
    return request({
        url: '/proofing/pattern/query',
        method: 'post',
        data
    })
}
// 版房管理-版房打版-纸样任务分派
const taskAssign = (data) => {
    return request({
        url: '/proofing/pattern/assign',
        method: 'post',
        data
    })
}

// 版房管理-版房打版-纸样任务分派驳回
const rejectTaskPatternAssign = (data) => {
    return request({
        url: '/proofing/pattern/reject',
        method: 'post',
        data
    })
}
export default {
    getList,
    taskAssign,
    rejectTaskPatternAssign
}
