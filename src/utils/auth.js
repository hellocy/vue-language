import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function userCenterLogin() {
    /* 跳转到用户中心登录 */
    const redirect_url = new Buffer(process.env.HOME_PAGE + '/#/')
    const url = process.env.SSO_URL + '/login/index/sso?from=PL-18-002&struli=' + redirect_url.toString('base64')
    // /* 清空token */
    localStorage.clear()
    window.location.href = url
}

export function userCenterLogout() {
    /* 退出登录 */
    const redirect_url = new Buffer(process.env.HOME_PAGE + '/#/')
    const url = process.env.SSO_URL + '/login/index/loginout?from=PL-18-002&struli=' + redirect_url.toString('base64')
    // /* 清空token */
    localStorage.clear()
    window.location.href = url
}
