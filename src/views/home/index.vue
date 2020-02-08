<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
    <div class="welcome-text-box">{{$t('localization.welcome')}}{{$t('localization.sysTitle')}}</div>
</template>
<script>
import arrowIcon from '../../../static/images/arrow.svg'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            arrowIcon,
            subRouterList: []
        }
    },
    computed: {
        ...mapGetters({
            menuData: 'menuList'
        })
    },
    created() {},
    methods: {
        linkToPage(item) {
            let url = item.url
            this.$store.dispatch('setOpenedTabsPush', item)
            url && this.$router.push(url)
        }
    }
}
</script>
