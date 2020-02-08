<template>
  <div class="tab-wrap"
       :class="[isHideTabBar ? 'dn' : 'db']">
    <div class="tab-bar">
      <el-tabs :value="currentTabIndex + ''"
               @tab-click="handleTabClick"
               type="card"
               closable
               @tab-remove="removeTab">
        <el-tab-pane v-for="item in openedTabs"
                     :key="item.menuId"
                     :label="item.title"
                     :name="item.menuId + ''"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="tab-operate">
      <el-dropdown trigger="click"
                   placement="bottom-start">
        <i class="el-icon-menu"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="tabClose('all')">关闭全部</el-dropdown-item>
          <el-dropdown-item @click.native="tabClose('other')">关闭其他标签</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {},
    data () {
        return {}
    },
    computed: {
        ...mapGetters({
            // 当前 tab 项的 name
            currentTabIndex: 'getCurrentTabIndex',
            // 打开的页签列表
            openedTabs: 'getOpenedTabs'
        }),
        isHideTabBar () {
            return this.$route.path === '/' || this.openedTabs.length === 0
        }
    },
    mounted () { },
    methods: {
        handleTabClick (tab, event) {
            let targetName = tab.name
            const tabItem = this.openedTabs.find(
                item => item.menuId === Number(targetName)
            )
            this.$store.dispatch('setCurrentTabIndex', targetName)
            this.$router.replace(tabItem.url)
        },
        removeTab (targetName) {
            this.$store.dispatch('setOpenedTabsRemove', {
                targetName: targetName,
                path: this.$route.path
            })
        },
        tabClose (type) {
            type === 'all'
                ? this.$store.dispatch('setCloseAllTabs')
                : this.$store.dispatch('setCloseOthersTabs', {
                    targetName: this.currentTabIndex,
                    path: this.$route.path
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-wrap {
    background-color: #f5f7fa;
    position: relative;
}
.tab-bar {
    width: calc(100% - 40px);
    background: #f5f7fa;
    height: 41px;
    box-sizing: border-box;
}
.tab-operate {
    position: absolute;
    top: 3px;
    right: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    .el-icon-menu {
        color: #999;
        border: 8px solid transparent;
        cursor: pointer;
    }
}
</style>
