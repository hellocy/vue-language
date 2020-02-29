<style lang="scss" scoped>
    .main-left-menu {
        width: 220px;
        overflow-y: auto;
        overflow-x: hidden;
        background: rgb(84, 92, 100);
    }
</style>
<template>
  <div class="main-left-menu" v-bind:style="{height: menuHeight + 'px' }">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span slot="title">个人管理</span>
                </template>
                <el-menu-item index="/system_manage/user/list">用户信息管理</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">个人商品</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span slot="title">企业管理</span>
                </template>
                <el-menu-item index="/system_manage/user/list">企业黄页</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list2">企业商铺</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-ticket"></i>
                    <span slot="title">发布管理</span>
                </template>
                <el-menu-item index="/system_manage/user/list">招聘</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">生活服务</el-menu-item>
                <el-menu-item index="/system_manage/user/list">伴侣交友</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">休闲娱乐</el-menu-item>
                <el-menu-item index="/system_manage/user/list">医疗美容/丽人</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">电商</el-menu-item>
                <el-menu-item index="/system_manage/user/list">家居用品</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">办公用品</el-menu-item>
                <el-menu-item index="/system_manage/user/list">二手市场</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">房产</el-menu-item>
                <el-menu-item index="/system_manage/user/list">教育培训</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">工业/农业</el-menu-item>
                <el-menu-item index="/system_manage/user/list">旅行</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-check"></i>
                    <span slot="title">审核管理</span>
                </template>
                <el-menu-item index="/enterprise_audit/regist">企业注册审核</el-menu-item>
                <el-submenu index="42">
                    <template slot="title">
                        <span slot="title">企业黄页审核</span>
                    </template>
                    <el-menu-item index="/enterprise_audit/yellow_page/agriculture_breading">农业/养殖业</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/food_industry">食品工业</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/energy_source_metal">能源/原料/金属加工</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/machinery_industry">机械/工业制造</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/vehicle_trans">车辆/运输</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/chemical_pharmaceutical_health">化学/制药/保健</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/building_materials_furniture">建筑/建材/家具</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/electronic_information">电信工业/信息技术/电子设备</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/pack_printing_publish">包装/印刷/出版</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/leather_home_luxury">皮革/家居用口/奢侈品</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/tour_sightseeing">旅行观光/休闲娱乐</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/tourist_hotel">旅游&酒店</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/bank_finance_insure">银行/金融理财/保险</el-menu-item>
                </el-submenu>
                <el-submenu index="43">
                    <template slot="title">
                        <span slot="title">企业发布审核</span>
                    </template>
                    <el-menu-item index="/enterprise_audit/yellow_page/agriculture_breading">生活服务</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/food_industry">交友</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/energy_source_metal">休闲娱乐</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/machinery_industry">医学美容</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/vehicle_trans">电商</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/chemical_pharmaceutical_health">家用产品</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/building_materials_furniture">办公用品</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/electronic_information">二手市场</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/pack_printing_publish">房地产</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/leather_home_luxury">教育培训</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/tour_sightseeing">工农业</el-menu-item>
                    <el-menu-item index="/enterprise_audit/yellow_page/tourist_hotel">旅游&酒店</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-top"></i>
                    <span slot="title">置顶管理</span>
                </template>
                <el-menu-item index="/system_manage/user/list">刷新</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">
                <i class="el-icon-s-comment"></i>
                <span slot="title">点评管理</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-wallet"></i>
                <span slot="title">支付管理</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-sugar"></i>
                <span slot="title">权益管理</span>
            </el-menu-item>
            <el-menu-item index="9">
                <i class="el-icon-s-tools"></i>
                <span slot="title">系统消息</span>
            </el-menu-item>
            <el-menu-item index="10">
                <i class="el-icon-s-data"></i>
                <span slot="title">统计报表</span>
            </el-menu-item>
            <el-submenu index="11">
                <template slot="title">
                    <i class="el-icon-office-building"></i>
                    <span slot="title">系统管理</span>
                </template>
                <el-menu-item index="/system_manage/user/list">系统用户</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">角色组管理</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">角色管理</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">权限管理</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">菜单管理</el-menu-item>
                <el-menu-item index="/system_manage/role_group/list">api</el-menu-item>
            </el-submenu>
            <el-menu-item index="12">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">员工操作日志</span>
            </el-menu-item>
            <el-menu-item index="13">
                <i class="el-icon-s-grid"></i>
                <span slot="title">模块管理</span>
            </el-menu-item>
            <el-menu-item index="14">
                <i class="el-icon-s-shop"></i>
                <span slot="title">销售管理</span>
            </el-menu-item>
            <el-menu-item index="15">
                <i class="el-icon-s-flag"></i>
                <span slot="title">活动管理</span>
            </el-menu-item>
            <el-menu-item index="16">
                <i class="el-icon-user-solid"></i>
                <span slot="title">员工管理</span>
            </el-menu-item>
            <el-menu-item index="17">
                <i class="el-icon-s-finance"></i>
                <span slot="title">财务管理</span>
            </el-menu-item>
            <el-menu-item index="18">
                <i class="el-icon-guide"></i>
                <span slot="title">培训管理</span>
            </el-menu-item>
            <el-menu-item index="19">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="20">
                <i class="el-icon-s-goods"></i>
                <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="21">
                <i class="el-icon-ship"></i>
                <span slot="title">物流管理</span>
            </el-menu-item> <!-- -->
        </el-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    mounted () {
    },
    computed: {
        menuHeight () {
            return window.innerHeight - 60
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
            this.$router.push({ path: key })
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>