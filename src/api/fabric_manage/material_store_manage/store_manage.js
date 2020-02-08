import request from '@/utils/Request'

// 面料管理-版料采购-版料库存管理-获取主列表数据
const getList = (data) => {
    return request({
        url: '/material/stockCollect/query',
        method: 'post',
        data
    })
}
export default {
    getList
}
