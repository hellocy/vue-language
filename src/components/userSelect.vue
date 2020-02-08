<template>
    <div>
        <el-select
            v-model.trim="selectedValue"
            :multiple="multiple"
            collapse-tags
            filterable
            size="small"
            :disabled="disabled"
            :filter-method="userFilter"
            placeholder="请选择"
            @change="onSelect"
            :style="styles"
            v-scroll="dropDownScroll"
            v-input="onDropDownInput"
        >
            <el-option
                v-for="item in apmUserFilters"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>

<script>
import { debounce } from '@/utils'
export default {
    props: {
        value: {
            type: [String, Array]
        },
        roles: {
            type: Array
        },
        multiple: {
            type: Boolean
        },
        disabled: {
            type: Boolean,
            default: false
        },
        styles: {
            default: '220px',
            type: String
        },
        data: {
            type: Array
        }
    },
    data() {
        return {
            selectedValue: [],
            apmUserOptions: [],
            apmUserFilters: [],
            ajaxFlag: true,
            pageOffset: 1,
            queryString: ''
        }
    },
    mounted() {
        if (this.roles) {
            this.getUsersByRoles()
        } else {
            this.getAllUsers()
        }
        this.selectedValue = this.value
    },
    watch: {
        value: {
            handler(newVal, oldVal) {
                this.selectedValue = newVal
            },
            deep: true
        }
    },
    directives: {
        scroll: {
            bind (el, binding) {
                // 获取滚动页面DOM
                let SCROLL_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
                let scrollPosition = 0
                SCROLL_DOM.addEventListener('scroll', function () {
                    // 当前的滚动位置 减去  上一次的滚动位置
                    // 如果为true则代表向上滚动，false代表向下滚动
                    let flagToDirection = this.scrollTop - scrollPosition > 0
                    // 记录当前的滚动位置
                    scrollPosition = this.scrollTop
                    const LIMIT_BOTTOM = 100
                    // 记录滚动位置距离底部的位置
                    let scrollBottom = this.scrollHeight - (this.scrollTop + this.clientHeight) < LIMIT_BOTTOM
                    // 如果已达到指定位置则触发
                    if (flagToDirection && scrollBottom) {
                        // 将滚动行为告诉组件
                        binding.value(flagToDirection)
                    }
                })
            }
        },
        input: {
            bind (el, binding) {
                // 获取滚动页面DOM
                let INPUT_DOM = el.querySelector('.el-select__input') || el.querySelector('.el-input__inner')
                INPUT_DOM.addEventListener('input', debounce((e) => {
                    let value = e.target.value.replace(/(^\s*)|(\s*$)/g, '')
                    if (value.length >= 1) {
                        binding.value(value)
                    }
                }))
            }
        }
    },
    methods: {
        getUsersByRoles() {
            if (this.data && this.data.length) {
                this.apmUserFilters = this.data
                this.apmUserOptions = this.data
            } else if (!this.data) {
                PLM_INTERFACE.dict
                    .getUsersByRole({ roleCodes: this.roles })
                    .then(res => {
                        if (res && res.data && res.data.code === 0) {
                            res.data.data.forEach(uArr => {
                                uArr.sysUserOutVos.forEach(item => {
                                    let idx = this.apmUserOptions.findIndex(
                                        u => {
                                            return item.id === u.value
                                        }
                                    )
                                    // 去重
                                    if (idx === -1) {
                                        this.apmUserOptions.push({
                                            value: item.id,
                                            label: `${item.name}(${item.username})`,
                                            username: item.username
                                        })
                                    }
                                })
                            })
                            this.apmUserFilters = this.apmUserOptions
                        }
                    })
            }
        },
        userFilter(query) {
            let _query = query.replace(/(^\s*)|(\s*$)/g, '')
            this.apmUserFilters = this.apmUserOptions.filter(option => {
                return (
                    option.value.indexOf(_query) > -1 ||
                    option.label.indexOf(_query) > -1 ||
                    option.username.indexOf(_query) > -1 ||
                    (option.userEnglishName && option.userEnglishName.indexOf(_query) > -1)
                )
            })
        },
        onSelect() {
            this.$emit('change', this.selectedValue)
        },
        getAllUsers (v) {
            PLM_INTERFACE.basicInfoManage.user.getPageList({
                offset: this.pageOffset,
                limit: 20,
                condition: {
                    name: this.queryString
                }
            }).then(res => {
                this.ajaxFlag = true
                const data = res.data
                if (data.code === 0) {
                    if (!data.data) {
                        this.ajaxFlag = false
                    }
                    if (data.data) {
                        data.data.list.forEach(item => {
                            this.apmUserOptions.push({
                                value: item.id,
                                label: `${item.name}(${item.username})`,
                                username: item.username,
                                userEnglishName: item.userEnglishName
                            })
                        })
                        this.apmUserFilters = this.apmUserOptions
                        this.pageOffset++
                    }
                }
            })
        },
        dropDownScroll () {
            if (this.ajaxFlag) { 
                this.ajaxFlag = false           
                this.getAllUsers()
            }
        },
        onDropDownInput (v) {
            if (this.roles) {
                return
            }
            this.pageOffset = 1
            this.apmUserOptions = []
            this.queryString = v
            this.getAllUsers(v)
        }
    }
}
</script>
<style lang="scss" scoped>
.el-select {
    width: 100%;
}
</style>
