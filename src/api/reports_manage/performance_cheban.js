import request from '@/utils/Request'

// 报表管理 - 车版师绩效表 - 获取主列表数据
const getList = data => {
    return request({
        url: '/report/preformance/sewing/query',
        method: 'post',
        data
    })
}

// 报表管理 - 车版师绩效表 - 获取三个考核指标数据
const getAvgData = data => {
    return request({
        url: '/report/preformance/sewing/acv/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getAvgData
}