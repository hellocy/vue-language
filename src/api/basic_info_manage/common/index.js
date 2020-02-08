import request from '@/utils/Request'

// 基础信息-通用配置-列表
const getList = (data) => {
    return request({
        url: '/biz/dict/query',
        method: 'post',
        data
    })
}

// 基础信息-通用配置-提交
const submit = (data) => {
    return request({
        url: '/biz/dict/submit',
        method: 'post',
        data
    })
}

// 基础信息-通用配置-获取获取编辑明细
const getDetail = (data) => {
    return request({
        url: '/biz/dict/edit',
        method: 'post',
        data
    })
}

// 基础信息-通用配置-获取日志
const getLogData = (data) => {
    return request({
        url: '/biz/dict/log/query',
        method: 'post',
        data
    })
}

// 基础信息-通用配置-获取日志明细
const getLogDetail = (data) => {
    return request({
        url: '/biz/dict/log/edit',
        method: 'post',
        data
    })
}

// 基础信息-通用配置-图片删除
const deleteImg = (data) => {
    return request({
        url: '/biz/dict/image/delete',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    getLogData,
    getLogDetail,
    deleteImg,
    submit
}
