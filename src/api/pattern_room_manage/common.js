/**
 * 版房公共接口
 */

import request from '@/utils/Request'

// 版房管理-板房用户数据
const getUserList = data => {
    return request({
        url: '/proofing/user/query',
        method: 'post',
        data
    })
}

// 版房管理-复版审核人
const getAuditorList = data => {
    return request({
        url: '/proofing/user/confirm/query',
        method: 'post',
        data
    })
}

// 版房管理-操作日志
const getLogList = data => {
    return request({
        url: '/proofing/stage/change/query',
        method: 'post',
        data
    })
}

// 版房管理-纸样
const getPatternList = data => {
    return request({
        url: '/proofing/pattern/form',
        method: 'post',
        data
    })
}

// 版房管理-生产工艺
const getCraft = data => {
    return request({
        url: '/proofing/craft/form',
        method: 'post',
        data
    })
}

// 版房管理-设计版单
const getDesign = data => {
    return request({
        url: '/proofing/design/form',
        method: 'post',
        data
    })
}

// 版房管理-成本报价单
const getCost = data => {
    return request({
        url: '/proofing/cost/form',
        method: 'post',
        data
    })
}
export default {
    getUserList,
    getAuditorList,
    getLogList,
    getPatternList,
    getCraft,
    getDesign,
    getCost
}
