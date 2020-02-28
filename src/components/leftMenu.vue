<style lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .main-headbar {
        width: 100%;
        height: 60px;
        background: #545c64;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .left {
        padding-left: 10px;
        display: flex;
        align-items: center;
        font-size: 30px;
        color: #fff;
    }
    .right-box {
        display: flex;
        color: #fff;
        align-items: center;
        padding-right: 10px;
    }
    .language-box {
        position: relative;
        display: inline-block;
        margin-right: 20px;
        color: #ddd;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
    }
    .lang-list-box {
        position: absolute;
        top: 150px;
        left: -40px;
        width: 200px;
        height: 300px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        display: none;
        transition: all 0.2s;
        z-index: 99999;
    }
    .language-box:hover {
        color: #fff;
        .lang-list-box {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
            display: block;
            top: 60px;
        }
    }
    .v-line {
        color: #ccc;
    }
    .zone-box {
        line-height: 20px;
        color: #666;
        margin-top: 10px;
    }
    .lang-box {
        margin-top: 10px;
        line-height: 20px;
        color: #666;
    }
    .current-lang-box {
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
    }
    .lang-item {
        line-height: 20px;
        margin-top: 2px;
    }
    .lang-item:hover {
        color: #000;
    }
    .user-info-box {
        color: #ddd;
        cursor: pointer;
        margin-left: 20px;
    }
    .user-info-box:hover {
        color: #fff;
    }
    .a-logout {
        display: inline-block;
        margin-left: 10px;
        color: #f5f5f5;
    }
    .main-content {
        display: flex;
    }
    .main-left-menu {
        width: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        background: rgb(84, 92, 100);
    }
    .page-container {
        width: 500px;
        padding: 5px;
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
                    <el-menu-item index="/system_manage/user/list">企业信息审核</el-menu-item>
                    <el-menu-item index="/system_manage/role_group/list">个人信息审核</el-menu-item>
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
        const subwin = document.querySelector('.subwin-outer-box')
        const body = document.querySelector('body')
        body.appendChild(subwin)
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
<style lang="scss">
.subwin-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.5);
}
.subwin-wrapper {
    position: absolute;
    right: 0;
    top: 50px;
    bottom: 0;
    background: #fff;
    z-index: 2000;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;
    width: 85vw;
    .subwin-header {
        height: 45px;
        line-height: 45px;
        background: #f2f6fc;
        border-bottom: 1px solid #e4e7ed;
        text-align: center;
        font-size: 24px;
        .subwin-header-title {
            text-align: center;
            font-size: 24px;
        }
    }
    .subwin-body {
        overflow: auto;
        .subwin-content {
            height: calc(100% - 91px);
        }
        .subwin-close-btn {
            position: absolute;
            left: -30px;
            top: 50%;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50%;
            cursor: pointer;
            line-height: 34px;
            text-align: center;
            font-size: 26px;
            z-index: -1;
            .el-icon-circle-close {
                position: absolute;
                top: 11px;
                left: 4px;
                color: #ccc;
                transition: all 0.1s;
                &:hover {
                    color: #888;
                }
            }
        }
        &::-webkit-scrollbar {
            width: 4px;
            background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #a1a2a5;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f5f5f5;
        }
    }
}
</style>
