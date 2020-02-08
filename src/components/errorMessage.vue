<template>
    <div v-html="message"></div>
</template>

<script>
export default {
    components: {},
    props: {
        message: {
            type: String
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.step-item {
    position: relative;
    padding-left: 40px;
    height: 34px;
    margin-top: 1px;
}
.step-item.active {
    color: #409eff;
    .step-item-icon {
        border-color: #409eff;
    }
    i.before {
        background: #409eff;
    }
}
.step-item:last-child i.after {
    height: 0;
}
.step-item-icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.step-item-desc {
    padding-top: 3px;
}
.step-item-icon i.before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 12px;
    height: 12px;
    background: #ccc;
    border-radius: 50%;
}

.step-item-icon i.after {
    content: '';
    position: absolute;
    left: 7px;
    top: 20px;
    width: 1px;
    height: 12px;
    background: #ccc;
}

.trace-status {
    display: inline-block;
    margin-left: 20px;
}
</style>
