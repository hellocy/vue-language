export default {
    // 启用命名空间
    namespaced: true,
    state: {
        // 事业部
        department: {},
        // 数据字典
        dict: {},
        designers: [],
        userInfo: '',
        breadcrumbData: []
    },

    actions: {
        department({ commit, state, dispatch }, data) {
            commit('setDepartment', { key: 'department', value: data })
        },
        setDictData({ commit }, data) {
            commit('setDictData', data)
        },
        setDesigners({ commit }, data) {
            commit('setDesigners', data)
        },
        setBreadcrumbData({ commit }, data) {
            commit('updateBreadcrumbData', data)
        }
    },

    mutations: {
        setDepartment(state, { key, value }) {
            state[key] = value
        },
        setDictData: (state, data) => {
            state.dict = data
            sessionStorage.setItem('dictData', JSON.stringify(data))
        },
        setDesigners: (state, data) => {
            state.designers = data
        },
        setUserInfo: (state, data) => {
            state.userInfo = data
        },
        updateBreadcrumbData: (state, data) => {
            state.breadcrumbData = data
        }
    },

    getters: {
        getDepartment: state => state.department,
        dictData: state => {
            const dictData = JSON.parse(sessionStorage.getItem('dictData'))
            return dictData
        },
        designers: state => state.designers,
        userInfo: state => {
            return (
                state.userInfo || JSON.parse(sessionStorage.getItem('userInfo'))
            )
        },
        breadcrumbData: state => state.breadcrumbData
    }
}
