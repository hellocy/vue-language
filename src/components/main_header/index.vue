<template>
  <div class="main-header"
       :class="[isAddHeaderBg ? 'main-header-bg' : '']">
    <div class="nav">
      <img :src="logoIcon"
           class="ml8 mr24 poi"
           @click="goHome" />
      <div class="system-name dn"
           @click="goHome"></div>
      <div class="menu-bar">
        <el-menu :default-active="$route.path"
                 class="main-menu"
                 mode="horizontal"
                 active-text-color="#fff"
                 @select="handleSelect">
          <el-submenu v-for="(first, idx) in menuData"
                      :key="idx"
                      :index="String(idx)">
            <template slot="title">{{first.name}}</template>
            <template v-for="(second, sec) in first.list">
              <el-menu-item @click="openTab(second)"
                            v-if="!second.list"
                            :key="second.url"
                            :index="second.url">{{second.name}}</el-menu-item>
              <el-submenu v-else
                          :key="idx + '-' + sec"
                          :index="idx + '-' + sec">
                <template slot="title">{{second.name}}</template>
                <el-menu-item @click="openTab(third)"
                              v-for="third in second.list"
                              :key="third.url"
                              :index="third.url">{{third.name}}</el-menu-item>
              </el-submenu>
            </template>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="login-info"
         v-if="userInfo">
      <div class="user-info">
        <i class="el-icon-user"></i>
        欢迎您，{{userInfo.name}}
        <a class="poi"
           @click="logout">[退出]</a>
      </div>
    </div>
  </div>
</template>

<script>
import logoIcon from '../../../static/images/logo.png'
import { mapGetters } from 'vuex'
import { handleRedirectUrl, getQueryString } from '@/utils'
export default {
    data () {
        return {
            logoIcon
        }
    },
    computed: {
        ...mapGetters({
            // 当前 tab 项的 name
            currentTabIndex: 'getCurrentTabIndex',
            // 打开的页签列表
            openedTabs: 'getOpenedTabs',
            menuData: 'menuList',
            userInfo: 'common/userInfo'
        }),
        isAddHeaderBg () {
            if (this.$route.path !== '/') {
                return true
            }
            return false
        },
        sid () {
            return getQueryString('sid') || sessionStorage.getItem('sid')
        }
    },
    methods: {
        openTab (item) {
            this.$store.dispatch('setOpenedTabsPush', item)
        },
        getParent (item) {
            const menuData = this.menuData
            let nodeId = item.id
            let arrRes = []
            const rev = (data, nodeId) => {
                for (let i = 0, length = data.length; i < length; i++) {
                    let node = data[i]
                    if (node.id === nodeId) {
                        arrRes.unshift(node.name)
                        rev(menuData, node.id)
                        break
                    } else {
                        if (node.list) {
                            rev(node.children, nodeId)
                        }
                    }
                }
                return arrRes
            }
            arrRes = rev(menuData, nodeId)
        },
        goHome () {
            this.$router.push('/')
        },
        handleSelect (key, keyPath) {
            this.$router.push({ path: key })
        },
        // 退出登录
        logout () {
            PLM_INTERFACE.login.logout({ sid: this.sid }).then(res => {
                if (res && res.data.code === 0) {
                    sessionStorage.removeItem('userInfo')
                    sessionStorage.removeItem('sid')
                    sessionStorage.removeItem('accessToken')
                    sessionStorage.removeItem('menuData')
                    handleRedirectUrl('logout')
                } else {
                    this.$message({
                        showClose: true,
                        message: '退出失败',
                        type: 'error'
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss">
.el-menu.el-menu--horizontal {
    border-bottom: none;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: initial;
    line-height: 40px;
    i {
        color: #fff;
    }
    &:hover {
        background-color: #fff0;
    }
}
.el-menu {
    background-color: #fff0;
}
.el-menu--popup {
    background-color: #f5f7fa;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.el-submenu__title {
    padding: 0 10px;
    i {
        color: #fff;
    }
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
    color: #fff !important;
    &:hover {
        color: #fff !important;
    }
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
    color: #2d2d2d !important;
    background-color: #f5f7fa;
    i {
        color: #2d2d2d !important;
    }
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: none;
}
</style>

<style lang="scss" scoped>
.main-header {
    display: flex;
    align-items: center;
    color: #fff;
    line-height: 50px;
    & > .nav {
        display: flex;
        align-items: center;
    }
    .system-name {
        margin-left: 20px;
        margin-right: 70px;
        text-align: center;
        cursor: pointer;
        & > p {
            line-height: normal;
        }
        .chinese-text {
            text-justify: inter-ideograph;
            text-align: justify;
            letter-spacing: 2px;
            font-size: 18px;
        }
    }
    .login-info {
        margin-left: auto;
        margin-right: 5px;
    }
}
.main-header-bg {
    background: #399cff;
}
</style>
