export default {
    state: {
        currentTabIndex: '', // conf.homeTab.menuId, // 当前显示的 tab
        openedTabs: [] // 当前打开的 tab 列表
    },
    actions: {
        setOpenedTabsPush({
            commit,
            state,
            dispatch
        }, data) {
            commit('openedTabsPush', data)
        },
        setOpenedTabsRemove({
            commit,
            state,
            dispatch
        }, data) {
            commit('openedTabsRemove', data)
        },
        setCurrentTabIndex({
            commit,
            state,
            dispatch
        }, data) {
            commit('setCurrentTabIndex', data)
        },
        setCloseAllTabs({
            commit,
            state,
            dispatch
        }) {
            commit('closeAllTabs')
        },
        setCloseOthersTabs({
            commit,
            state,
            dispatch
        }, data) {
            console.log(data, 77777)
            commit('closeOthersTabs', data)
        }
    },
    mutations: {
        // 设置 当前显示的 tab name
        setCurrentTabIndex(state, data) {
            state.currentTabIndex = data
            sessionStorage.setItem('currentTabIndex', data)
        },
        // 添加 菜单 到 tab 列表
        openedTabsPush(state, item) {
            // 设置当前要显示的 tab name
            state.currentTabIndex = item.id
            sessionStorage.setItem('currentTabIndex', item.id)
            // 判断 tab 项是否已存在
            let tabExsit = state.openedTabs.find(i => i.menuId === item.id)
            if (!tabExsit) {
                state.openedTabs.push({
                    title: item.name, // 显示标题
                    menuId: item.id, // 用于标记当前打开 tab 的 name
                    url: item.url //  tab 对应的组件
                })
            } else if (item.fromHistory) {
                // 点击前进后退按钮
                state.openedTabs.map(i => {
                    if (i.menuId === item.id) {
                        i.url = item.url
                    }
                })
            }
            sessionStorage.setItem(
                'openedTabs',
                JSON.stringify(state.openedTabs)
            )
        },
        // 从 tab 列表 移除 tab
        openedTabsRemove(state, object) {
            const menuId = object.targetName
            const pageUrl = object.path
            console.log(menuId, pageUrl, 9999)
            const openedTabs = state.openedTabs.filter(
                item => item.menuId !== Number(menuId)
            )
            state.openedTabs = openedTabs
            sessionStorage.setItem('openedTabs', JSON.stringify(openedTabs))
            window.removeCondition(pageUrl, 1)
        },
        // 关闭 其他的 tab
        closeOthersTabs(state, object) {
            const pageUrl = object.path
            const openedTabs = state.openedTabs.filter(
                item => item.menuId === state.currentTabIndex
            )
            state.openedTabs = openedTabs
            sessionStorage.setItem('openedTabs', JSON.stringify(openedTabs))
            window.removeCondition(pageUrl, 2)
        },
        // 关闭所有 tab
        closeAllTabs(state) {
            state.openedTabs = []
            sessionStorage.setItem('openedTabs', JSON.stringify([]))
            window.removeCondition('', 0)
        }
    },
    getters: {
        // 获取 当前显示的 tab name
        getCurrentTabIndex(state) {
            let currentTabIndex =
                state.currentTabIndex ||
                sessionStorage.getItem('currentTabIndex')
            state.currentTabIndex = currentTabIndex
            return currentTabIndex
        },
        // 获取 当前打开的 tab 列表
        getOpenedTabs(state) {
            const openedTabs = state.openedTabs.length
                ? state.openedTabs
                : JSON.parse(sessionStorage.getItem('openedTabs')) || []
            state.openedTabs = openedTabs
            return openedTabs
        }
    }
}
