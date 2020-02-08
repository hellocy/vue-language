import request from '@/utils/Request'

// 报表管理 - 工作表 - 获取主列表数据
const getList = data => {
    return request({
        url: '/report/user/work/query',
        method: 'post',
        data
    })
}

// 报表管理 - 工作表 - 获取审版师主列表数据
const getShenbanList = data => {
    return request({
        url: '/report/type/work/review/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getShenbanList
}
