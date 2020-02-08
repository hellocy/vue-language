/**
 *  处理登入/登出跳转回调地址
 *  @param { string } type  类型: login 登陆  logout 登出
 *  @param { boolean } normal 类型: true 正常  false 异常
 */

import servers from '@/servers/index'
import INTERFACE from '@/api'
import login from '@/api/login'
import store from '@/store'

export function handleRedirectUrl(type = 'login', normal) {
    const {
        callbackUrl,
        baseUrl
    } =
    servers.get(location.host) || servers.get('dev')
    const redirectObj = {
        login: `${baseUrl}/sso/?struli=${callbackUrl}&from=plm`,
        logout: `${baseUrl}/loginout/?struli=${callbackUrl}&from=plm`
    }
    // 删除本地相关信息
    setTimeout(() => {
        console.log('logout url: ', redirectObj[type])
        location.href = redirectObj[type]
    }, 1000)
}

export function getBasicData() {
    window.DICTDATA = new Promise((resolve, reject) => {
        INTERFACE.dict.getDictData({}).then(res => {
            if (res && res.data.code === 0) {
                const data = res.data.data.dict
                store.dispatch('common/setDictData', data)
                resolve(data)
            }
        })
    })

    window.PNDATA = new Promise((resolve, reject) => {
        INTERFACE.dict.getPnData({}).then(res => {
            let data = res.data
            let code = data.code
            if (code === 0) {
                resolve(data.data)
            }
        })
    })
}

export function getDesigners() {
    const {
        sampleDevelop: {
            manuscriptUpload: {
                getApmDesigners
            }
        }
    } = PLM_INTERFACE
    getApmDesigners().then(res => {
        if (res && res.data.code === 0) {
            store.dispatch('common/setDesigners', res.data.data)
        }
    })
}

/**
 * 文本换行
 * @param {String} text
 */
export function wordBreak(text) {
    return text && text.replace(/(\r\n|\n|\r)/gm, '<br />')
}

/**
 * 验证是否是正整数与两位以内的小数
 * @param {any} value
 */
export function checkNumber(value) {
    const patrn = /^[0-9](\d+)?(\.\d{1,2})?$/
    return patrn.test(value)
}

export function arrayToObj(arr, keyIsNumber = true) {
    const obj = {}
    if (Array.isArray(arr) && arr.length) {
        arr.forEach(item => {
            keyIsNumber
                ? (obj[Number(item.itemNo)] = item.cnName)
                : (obj[item.itemNo] = item.cnName)
        })
    }
    return obj
}

export function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

// 本地local存/取数据
export function localStore(key) {
    // 存储
    if (typeof arguments[1] !== 'undefined') {
        let objStr = JSON.stringify(arguments[1])
        localStorage.setItem(key, objStr)
        // 获取
    } else {
        let objStr = localStorage.getItem(key)
        if (objStr) {
            try {
                return JSON.parse(objStr)
            } catch (e) {
                return objStr
            }
        }
    }
}

// 本地session存/取数据
export function sessionStore(key) {
    // 存储
    if (typeof arguments[1] !== 'undefined') {
        let objStr = JSON.stringify(arguments[1])
        sessionStorage.setItem(key, objStr)
        // 获取
    } else {
        let objStr = sessionStorage.getItem(key)
        if (objStr) {
            try {
                return JSON.parse(objStr)
            } catch (e) {
                return objStr
            }
        }
    }
}

// 存储列表查询条件
export function storeCondition(vm) {
    let pageUrl = vm.$route.path
    if (!sessionStore('searchFormData')) {
        sessionStore('searchFormData', {})
    }
    let _obj = sessionStore('searchFormData')
    let tabId = _obj[pageUrl] ? _obj[pageUrl].tabId : undefined
    _obj[pageUrl] = {
        searchForm: vm.searchForm,
        tablePage: vm.tablePage,
        tabId: tabId
    }
    sessionStore('searchFormData', _obj)
}

/**
 *  移除列表查询条件
 *  pageUrl: 组件路径
 */
export function removeCondition(pageUrl, type) {
    if (type === 0) {
        sessionStorage.removeItem('searchFormData')
    }
    if (!sessionStore('searchFormData')) {
        sessionStore('searchFormData', {})
    }
    let _obj = sessionStore('searchFormData')
    delete _obj[pageUrl]
    console.log(pageUrl, _obj)
    sessionStore('searchFormData', _obj)
}

export function computedTableHeight(disH = 80) {
    let navH = document.querySelector('.main-header').getBoundingClientRect()
        .height
    let tabRouterWrap = document
        .querySelector('.tab-wrap')
        .getBoundingClientRect().height
    let breadcrumbBox = document
        .querySelector('#breadcrumb-box')
        .getBoundingClientRect().height
    let searchBoxH = document
        .querySelector('.search-wrap')
        .getBoundingClientRect().height
    return (
        window.innerHeight -
        navH -
        tabRouterWrap -
        searchBoxH -
        breadcrumbBox -
        disH
    )
}

export function getFabricColor(param) {
    return new Promise((resolve, reject) => {
        PLM_INTERFACE.dict.getColorData(param).then(res => {
            let data = res.data
            let code = data.code
            if (code === 0) {
                let result = data.data.map(item => {
                    let children = item.colorQueryOutVos.map(list => {
                        return {
                            value: list.id,
                            label: list.nameCn,
                            code: list.colorCode,
                            colorValue: list.colorValue
                        }
                    })
                    return {
                        value: item.id,
                        label: item.nameCn,
                        children: children
                    }
                })
                resolve(result)
            }
        })
    })
}
export function autoLogin() {
    setInterval(() => {
        login.tokenRefresh()
    }, 30 * 60 * 1000)
}

// 获取随机ID
export function randomId() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return s4() + s4() + '-' + s4()
}

export function debounce(fn, delay = 300, immediate) {
    let timer = null
    return function() {
        let context = this
        let arg = arguments
        if (timer) {
            clearTimeout(timer)
        }
        if (immediate) {
            if(!timer) {
                fn.apply(context, arg)
            }
            timer = setTimeout(function() {
                timer = null
            }, delay)
        } else {
            timer = setTimeout(function() {
                fn.apply(context, arg)
            }, delay)
        }
    }
}

export function transformTime(timestamp = +new Date()) {
    if (timestamp) {
        let time = new Date(timestamp)
        let y = time.getFullYear() // getFullYear方法以四位数字返回年份
        let M = time.getMonth() + 1 // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
        let d = time.getDate() // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
        let h = time.getHours() // getHours方法返回 Date 对象的小时 (0 ~ 23)
        let m = time.getMinutes() // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
        let s = time.getSeconds() // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
        M = M < 10 ? '0' + M : M
        d = d < 10 ? '0' + d : d
        h = h < 10 ? '0' + h : h
        m = m < 10 ? '0' + m : m
        s = s < 10 ? '0' + s : s
        return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
    } else {
        return ''
    }
}
