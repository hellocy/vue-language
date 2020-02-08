import router from './router'
import store from '@/store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import {
    handleRedirectUrl,
    getQueryString,
    getBasicData,
    getDesigners
} from '@/utils'
import INTERFACE from '@/api/index'
const {
    login: {
        getToken
    }
} = INTERFACE
router.beforeEach(async (to, from, next) => {
    let sid = getQueryString('sid') || sessionStorage.getItem('sid')
    NProgress.start()
    if (sid) {
        let userInfo = sessionStorage.getItem('userInfo')
        if (userInfo) {
            // 获取基础字典数据
            await getBasicData()
            await getDesigners()
            next()
            NProgress.done()
        } else {
            sessionStorage.setItem('sid', sid)
            await getToken({
                sid
            })
                .then(res => {
                    if (res) {
                        const data = res.data.data
                        const {
                            accessToken,
                            menus
                        } = data
                        const menuData = menus.map(item => {
                            const list = item.list
                            const sec = list.map(subMenu => {
                                if (subMenu.list.length) {
                                    return {
                                        name: subMenu.name,
                                        list: subMenu.list
                                    }
                                } else {
                                    return {
                                        id: subMenu.id,
                                        name: subMenu.name,
                                        url: subMenu.url
                                    }
                                }
                            })
                            return {
                                id: item.id,
                                name: item.name,
                                list: sec
                            }
                        })
                        sessionStorage.setItem('userInfo', JSON.stringify(data))
                        sessionStorage.setItem('accessToken', accessToken)
                        sessionStorage.setItem(
                            'menuData',
                            JSON.stringify(menuData)
                        )
                        store.commit('setRoleMenu', menuData)
                        store.commit('common/setUserInfo', data)
                        location.href = location.origin + '/' + location.hash
                    }
                })
                .catch(() => {
                    NProgress.done()
                })
            // 获取基础字典数据
            await getBasicData()
            next()
            NProgress.done()
        }
    } else {
        // handleRedirectUrl()
    }
    next()
    NProgress.done()
})

router.afterEach((to, from) => {
    document.title = to.meta.title ? to.meta.title : 'home'
    NProgress.done()
})
