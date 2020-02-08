import request from '@/utils/Request'

const getToken = data => {
    // 登陆
    return request({
        url: '/ssologin',
        method: 'post',
        data
    })
}

// 退出登录
const logout = data => {
    // 登陆
    return request({
        url: '/logout',
        method: 'post',
        data
    })
}

const tokenRefresh = data => {
    return request({
        url: '/sys/tokenRefresh',
        method: 'get',
        data
    })
}

export default {
    getToken,
    logout,
    tokenRefresh
}
