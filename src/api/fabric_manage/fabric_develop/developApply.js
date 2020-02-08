import request from '@/utils/Request'

// 面料企划-面料开发申请-获取主列表数据
const getList = (data) => {
    return request({
        url: '/fabric/apply/query',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-获取详情
const getDetail = (data) => {
    return request({
        url: '/fabric/apply/edit',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-新增
const add = (data) => {
    return request({
        url: '/fabric/apply/add',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-编辑保存
const edit = (data) => {
    return request({
        url: '/fabric/apply/update',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-提交
const submit = (data) => {
    return request({
        url: '/fabric/apply/submit',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-删除
const deleteRows = (data) => {
    return request({
        url: '/fabric/apply/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-图片上传
const imageUpload = (data) => {
    return request({
        url: '/fabric/apply/upload',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-图片删除
const imageDelete = (data) => {
    return request({
        url: '/fabric/apply/image/delete',
        method: 'post',
        data
    })
}

// 面料企划-面料开发申请-面料名称重名校验
const checkExist = (data) => {
    return request({
        url: '/fabric/apply/check/name/query',
        method: 'post',
        data
    })
}

export default {
    getList,
    getDetail,
    add,
    edit,
    submit,
    deleteRows,
    imageUpload,
    imageDelete,
    checkExist
}
