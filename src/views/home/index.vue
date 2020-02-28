<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
    <div>
        <common-header ref="commonHeader"></common-header>
        <left-menu ref="leftMenu"></left-menu>
        <div class="page-content-wraper" v-bind:style="{width: pageContengSize.w + 'px', height: pageContengSize.h + 'px'}">
            <div class="welcome-text-box">{{$t('localization.welcome')}}{{$t('localization.sysTitle')}}</div>
        </div>
    </div>
</template>
<script>
import arrowIcon from '../../../static/images/arrow.svg'
import { mapGetters } from 'vuex'
import commonHeader from '@/components/commonHeader'
import leftMenu from '@/components/leftMenu'
export default {
    name: 'home',
    components: {
        commonHeader,
        leftMenu
    },
    data() {
        return {
            arrowIcon,
            subRouterList: []
        }
    },
    computed: {
        ...mapGetters({
            menuData: 'menuList'
        }),
        pageContengSize () {
            return {
                w: window.innerWidth - 200,
                h: window.innerHeight - 60
            }
        }
    },
    created() {},
    mounted: {

    },
    methods: {
        linkToPage(item) {
            let url = item.url
            this.$store.dispatch('setOpenedTabsPush', item)
            url && this.$router.push(url)
        }
    }
}
</script>
