import Vue from 'vue'
import Router from 'vue-router'

// 系统管理-用户
import systemUser from './system_manage/user'
// 系统管理-角色组
import systemRoleGroup from './system_manage/role_group'

// 审核管理-企业注册审核
import enterpriseAuditRegist from './enterprise_audit/regist/list'

// 审核管理-企业黄页审核
import enterpriseAuditYelloPage from './enterprise_audit/yellow_page/index'

// 审核管理-企业发布审核
import enterpriseAuditPublish from './enterprise_audit/publish/index'

// 推荐企业、供需、展会-推荐企业
import recomand from './recomand/company/index'
// 推荐企业、供需、展会-供需
import supply from './recomand/supply/index'
// 推荐企业、供需、展会-展会
import exhibit from './recomand/exhibit/index'

// 广告
import adv from './adv/index'

Vue.use(Router)

const mainRouter = [
    {
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
        path: '/login',
        name: 'login',
        component: resolve => {
            require.ensure(
                [],
                function () {
                    resolve(require('@/views/login/index.vue'))
                },
                'index'
            )
        },
        meta: {
            title: '登录'
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
    ...enterpriseAuditRegist,
    ...enterpriseAuditYelloPage,
    ...enterpriseAuditPublish,
    ...recomand,
    ...supply,
    ...exhibit,
    ...adv
])
export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
