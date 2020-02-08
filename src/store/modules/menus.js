// 每一级的id必须唯一(当前最大值 1054 chenyi)
const menus = {
    state: {
        menuList: []
    },
    actions: {
        setRoleMenu({
            commit,
            state,
            dispatch
        }, data) {
            commit('setRoleMenu', data)
        }
    },
    mutations: {
        // 设置当前角色的主菜单
        setRoleMenu(state, data) {
            state.menuList = data
        }
    },
    getters: {
        menuList: state => {
            return state.menuList.length
                ? state.menuList
                : JSON.parse(sessionStorage.getItem('menuData'))
        }
    }
}

export default menus
