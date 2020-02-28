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
    <div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted: function() {
        // this.getLoginSid()
        // let mainContent = document.querySelector('.main-content')
        // let pageContainer = document.querySelector('.page-container')
        // mainContent.style.height = window.innerHeight - 60 + 'px'
        // pageContainer.style.width = window.innerWidth - 200 + 'px'
    }
}
</script>
