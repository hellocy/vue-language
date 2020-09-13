export default [
    {
        path: '/recomand/supply',
        meta: {
            title: '供需'
        },
        component: () => import('@/views/recomand/supply/list')
    },
    {
        path: '/enterprise_audit/yellow_page/food_industry',
        meta: {
            title: '食品工业'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/food_industry')
    },
    {
        path: '/enterprise_audit/yellow_page/energy_source_metal',
        meta: {
            title: '能源/原料/金属加工'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/energy_source_metal')
    },
    {
        path: '/enterprise_audit/yellow_page/machinery_industry',
        meta: {
            title: '机械/工业制造'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/machinery_industry')
    },
    {
        path: '/enterprise_audit/yellow_page/vehicle_trans',
        meta: {
            title: '车辆/运输'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/vehicle_trans')
    },
    {
        path: '/enterprise_audit/yellow_page/chemical_pharmaceutical_health',
        meta: {
            title: '化学/制药/保健'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/chemical_pharmaceutical_health')
    },
    {
        path: '/enterprise_audit/yellow_page/building_materials_furniture',
        meta: {
            title: '建筑/建材/家具'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/building_materials_furniture')
    },
    {
        path: '/enterprise_audit/yellow_page/electronic_information',
        meta: {
            title: '电信工业/信息技术/电子设备'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/electronic_information')
    },
    {
        path: '/enterprise_audit/yellow_page/pack_printing_publish',
        meta: {
            title: '包装/印刷/出版'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/pack_printing_publish')
    },
    {
        path: '/enterprise_audit/yellow_page/leather_home_luxury',
        meta: {
            title: '皮革/家居用口/奢侈品'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/leather_home_luxury')
    },
    {
        path: '/enterprise_audit/yellow_page/tour_sightseeing',
        meta: {
            title: '旅行观光/休闲娱乐'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/tour_sightseeing')
    },
    {
        path: '/enterprise_audit/yellow_page/tourist_hotel',
        meta: {
            title: '旅游&酒店'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/tourist_hotel')
    },
    {
        path: '/enterprise_audit/yellow_page/bank_finance_insure',
        meta: {
            title: '银行/金融理财/保险'
        },
        component: () => import('@/views/enterprise_audit/yellow_page/bank_finance_insure')
    }
]
