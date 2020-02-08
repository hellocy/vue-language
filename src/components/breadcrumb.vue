<template>
    <div class="breadcrumb-box" id="breadcrumb-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <div class="plm-flex align-center">
                <i class="start-icon"></i>
                <div class="ovh">
                    <template v-for="(path, index) in breadcrumb_list">
                        <el-breadcrumb-item
                            v-if="path.url.length !== 0"
                            v-bind:key="index"
                            :to="{ path: path.url }"
                        >{{path.name}}</el-breadcrumb-item>
                        <el-breadcrumb-item v-else v-bind:key="index">{{path.name}}</el-breadcrumb-item>
                    </template>
                </div>
            </div>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        breadcrumb_list: {
            type: Array
        },
        type: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            home: {
                name: '退件平台',
                url: '/home'
            }
        }
    },
    methods: {
        jump(index, item) {
            if (index !== this.breadcrumb_list.length - 1) {
                this.$router.push({ path: item.url })
            }
        }
    }
}
</script>

<style lang="scss">
.breadcrumb-box {
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    font-weight: 400;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #f5f7fa;
    .start-icon {
        width: 3px;
        height: 30px;
        margin-right: 10px;
        background-color: #429efd;
    }
    .el-breadcrumb {
        margin-left: 2px;
        line-height: 30px;
        .el-breadcrumb__inner {
            font-size: 16px;
        }
    }
}
</style>
