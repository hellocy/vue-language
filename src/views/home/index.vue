<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
    <div>
        <div class="welcome-text-box">{{$t('localization.welcome')}}{{$t('localization.sysTitle')}}</div>
    </div>
</template>
<script>
import arrowIcon from '../../../static/images/arrow.svg'
export default {
    name: 'home',
    data() {
        return {
            arrowIcon,
            subRouterList: []
        }
    },
    computed: {
    },
    created() {
        this.$store.dispatch('common/leftMenuVisible', true)
    },
    mounted: {},
    methods: {
        linkToPage(item) {
            let url = item.url
            this.$store.dispatch('setOpenedTabsPush', item)
            url && this.$router.push(url)
        }
    }
}
</script>
