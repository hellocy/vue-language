import request from '@/utils/Request'

// 面料企划-面料及工艺供应商档案-获取主列表数据
const getList = (data) => {
    return request({
        url: '/supplier/query',
        method: 'post',
        data
    })
}

// 面料企划-面料及工艺供应商档案-获取详情
const getDetail = (data) => {
    return request({
        url: '/supplier/edit',
        method: 'post',
        data
    })
}

// 面料企划-面料及工艺供应商档案-新增
const add = (data) => {
    return request({
        url: '/supplier/add',
        method: 'post',
        data
    })
}

// 面料企划-面料及工艺供应商档案-编辑保存
const edit = (data) => {
    return request({
        url: '/supplier/update',
        method: 'post',
        data
    })
}

// 面料企划-面料及工艺供应商档案-删除
const deleteRows = (data) => {
    return request({
        url: '/supplier/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料供应商管理-检查品名是否重复
const checkExist = (data) => {
    return request({
        url: '/supplier/name/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    add,
    edit,
    deleteRows,
    checkExist
}
