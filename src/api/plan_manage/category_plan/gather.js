import request from '@/utils/Request'

// 品类规划-品类规划汇总-获取主列表数据
const getList = (data) => {
    return request({
        url: '/productPlanCollect/productPlanCollect/query',
        method: 'post',
        data
    })
}

export default {
    getList
}
