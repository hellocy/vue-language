import Vue from 'vue'
import Router from 'vue-router'

// 规划管理-品类规划
import systemUser from './system_manage/user'
import systemRoleGroup from './system_manage/role_group'

Vue.use(Router)

const mainRouter = [{
    path: '/',
    name: 'index',
    component: resolve => {
        require.ensure(
            [],
            function () {
                resolve(require('@/views/home/index'))
            },
            'index'
        )
    },
    hidden: true,
    meta: {
        title: '首页'
    }
},
{
    path: '*',
    hidden: true,
    component: resolve => {
        require.ensure([], function () {
            resolve(require('@/views/404'))
        })
    }
}
]

export const constantRouterMap = mainRouter.concat([
    ...systemUser,
    ...systemRoleGroup,
])
export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
