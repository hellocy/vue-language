<style lang="scss">
    .mult-level-select-box{
        position: relative;
        border:1px solid #DCDFE6;
        border-radius: 2px;
        display: inline-block;
        width: 200px;
        height: 32px;
        &:hover{
            border:1px solid #DCDdd0;
        }
    }
    .show-selected-color{
        position: absolute;
        left: 0;
        top: 0;
        display: inline-block;
        padding-left: 5px;
        width: 80%;
        height: 30px;
        text-align: left;
        font-size: 16px;
        line-height: 30px;
    }
    .mult-level-select-poper{
        position: absolute;
        top: 0px;
        left: 0;
        width: 100px;
        height:auto;
        min-height: 30px;
        border:1px solid #DCDFE6;
        border-top:0;
        z-index: 9999;
        background:#fff;
        li{
            font-size: 14px;
            padding: 0 20px;
            position: relative;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #606266;
            height: 34px;
            line-height: 34px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            cursor: pointer;
            &:hover{
                background-color: #F5F7FA;
            }
            .el-icon-arrow-right{
                position:absolute;
                right: 10px;
                top: 8px;
            }
        }
        .sub-level-panel{
            position: absolute;
            right:-102px;
            top:0;
            width: 100px;
            border:1px solid #DCDFE6;
            background:#fff;
        }
    }
    .el-icon-arrow-down{
        position: absolute;
        right: 10px;
        top: 8px;
        font-size: 16px;
        color: #ccc;
    }
</style>

<template>
    <div class="mult-level-select-box" @click.stop="beforeSelect">
        <span class="show-selected-color">{{selectedValue}}</span>
        <i class="el-icon-arrow-down"></i>
        <div class="mult-level-select-poper" v-show="isDropDown">
            <ul>
                <li class="level1" v-for="(item, index) in data" :key="index" @mouseenter="showChildrenData(item)">
                    <span>{{item.nameCn}}</span>
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>
            <div class="sub-level-panel" v-if="isSubShow">
                <ul>
                    <li class="level2" v-for="(color, index) in subData" :key="index" @click="onSelected(color)">{{color.nameCn}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        data: {
            type: Array
        }
    },
    model: {
        prop: 'value', // 绑定的值，通过父组件传递
        event: 'update' // 自定义时间名
    },
    data () {
        return {
            selectedValue: '#ccc',
            subData: [],
            isDropDown: false,
            isSubShow: false
        }
    },
    computed: {
        height () {
            return window.innerHeight - 50
        }
    },
    created () {
        let that = this
        document.body.onclick = function (e) {
            let target = e.target
            if (!that.hasClass(target, 'mult-level-select-box') && !that.hasClass(target, 'mult-level-select-poper') && !that.hasClass(target, 'level1')) {
                that.isDropDown = false
            }
        }
    },
    methods: {
        beforeSelect (e) {
            let box = e.target
            console.log(box, 888)
            let options = document.querySelector('.mult-level-select-poper')
            let selector = document.querySelector('.show-selected-color')
            let boxRect = box.getBoundingClientRect()
            let posRect = selector.getBoundingClientRect()
            if (options.length === 0) {
                document.body.append(options)
            }
            options.style.width = (boxRect.width - 3) + 'px'
            options.style.left = posRect.left + 'px'
            options.style.top = (posRect.top + 31) + 'px'
            this.isDropDown = !this.isDropDown
        },
        showChildrenData (item) {
            this.isSubShow = true
            this.subData = item.colorQueryOutVos
        },
        hasClass (elem, className) {
            let reg = new RegExp('(^|\\s+)' + className + '($|\\s+)')
            return reg.test(elem.className)
        },
        onSelected (color) {
            this.selectedValue = color.nameCn
            this.$emit('update', color.id)
        }
    }
}
</script>
