<style lang="scss" scoped>
.row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
}
.col {
    margin: 0;
    margin-top: 5px;
    padding: 10px;
    width: 50%;
    border: 1px solid #ddd;
    box-sizing: border-box;
}
.from-control {
    width: 100%;
}
</style>

<template>
    <div>
        <div class="row">
            <div class="col">
                <el-select class="from-control">
                    <el-option label="1111">1111</el-option>
                    <el-option label="1111">1111</el-option>
                    <el-option label="1111">1111</el-option>
                    <el-option label="1111">1111</el-option>
                </el-select>
            </div>
            <div class="col">
                <el-select class="from-control">
                    <el-option label="1111">1111</el-option>
                    <el-option label="1111">1111</el-option>
                    <el-option label="1111">1111</el-option>
                    <el-option label="1111">1111</el-option>
                </el-select>
            </div>
            <div class="col">4</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            arrowIcon,
            subRouterList: []
        }
    },
    computed: {},
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
