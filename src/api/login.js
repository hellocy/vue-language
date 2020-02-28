import request from '@/utils/Request'

const getVcode = data => {
    // 登陆
    return request({
        url: '/captcha',
        method: 'get',
        data
    })
}

const refreshVcode = data => {
    // 登陆
    return request({
        url: `/captcha/flush?id=${data.id}'`,
        method: 'get',
        data
    })
}

const login = data => {
    console.log(data, 8888)
    // 登陆
    return request({
        url: `/login?id=${data.id}&digits=${data.digits}`,
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
    getVcode,
    login,
    refreshVcode,
    logout,
    tokenRefresh
}
