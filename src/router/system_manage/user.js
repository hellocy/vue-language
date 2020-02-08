export default [
    {
        path: '/system_manage/user/list',
        meta: {
            title: '用户管理'
        },
        component: () => import('@/views/system_manage/user/list')
    }
]