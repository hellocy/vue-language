<template>
    <div class="pedding-wrapper">
        <span class="pedding-text" @click="handlerClick($event)">待处理: {{peddingTaskNum}}</span>
    </div>
</template>
<script>
export default {
    props: {
        peddingTaskNum: {
            type: [Number, String],
            default: 0
        }
    },
    data() {
        return {}
    },
    methods: {
        handlerClick(event) {
            this.$emit('click', event)
        }
    }
}
</script>
<style lang="scss" scoped>
.pedding-wrapper {
    line-height: 45px;
}
.pedding-text {
    margin: 8px 8px 8px 20px;
    color: #f59a23;
    cursor: pointer;
}
</style>
