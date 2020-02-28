export default [
    {
        path: '/enterprise_audit/publish/life_services',
        meta: {
            title: '生活服务'
        },
        component: () => import('@/views/enterprise_audit/publish/life_services')
    },
    {
        path: '/enterprise_audit/publish/friends',
        meta: {
            title: '交友'
        },
        component: () => import('@/views/enterprise_audit/publish/friends')
    },
    {
        path: '/enterprise_audit/publish/leisure_entertainment',
        meta: {
            title: '休闲娱乐'
        },
        component: () => import('@/views/enterprise_audit/publish/leisure_entertainment')
    },
    {
        path: '/enterprise_audit/publish/cosmetic_medicine',
        meta: {
            title: '医学美容'
        },
        component: () => import('@/views/enterprise_audit/publish/cosmetic_medicine')
    },
    {
        path: '/enterprise_audit/publish/e_commerce',
        meta: {
            title: '电商'
        },
        component: () => import('@/views/enterprise_audit/publish/e_commerce')
    },
    {
        path: '/enterprise_audit/publish/household',
        meta: {
            title: '家用产品'
        },
        component: () => import('@/views/enterprise_audit/publish/household')
    },
    {
        path: '/enterprise_audit/publish/office_work',
        meta: {
            title: '办公用品'
        },
        component: () => import('@/views/enterprise_audit/publish/office_work')
    },
    {
        path: '/enterprise_audit/publish/secondhand',
        meta: {
            title: '二手市场'
        },
        component: () => import('@/views/enterprise_audit/publish/secondhand')
    },
    {
        path: '/enterprise_audit/publish/real_estate',
        meta: {
            title: '房地产'
        },
        component: () => import('@/views/enterprise_audit/publish/real_estate')
    },
    {
        path: '/enterprise_audit/publish/education_training',
        meta: {
            title: '教育培训'
        },
        component: () => import('@/views/enterprise_audit/publish/education_training')
    },
    {
        path: '/enterprise_audit/publish/industry_agriculture',
        meta: {
            title: '工农业'
        },
        component: () => import('@/views/enterprise_audit/publish/industry_agriculture')
    },
    {
        path: '/enterprise_audit/publish/tourist_hotel',
        meta: {
            title: '旅游&酒店'
        },
        component: () => import('@/views/enterprise_audit/publish/tourist_hotel')
    }
]
