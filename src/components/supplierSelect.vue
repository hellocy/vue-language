<template>
    <div>
        <el-select
            v-model.trim="selectedValue"
            :multiple="multiple"
            collapse-tags
            filterable
            size="small"
            :disabled="disabled"
            :filter-method="supplierFilter"
            placeholder="请选择"
            @change="onSelect"
            :style="styles"
        >
            <el-option
                v-for="item in supplierFilters"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>

<script>
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
            supplierOptions: [],
            supplierFilters: []
        }
    },
    mounted() {
        this.getSupplier()
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
    methods: {
        getSupplier() {
            ZT_INTERFACE.purchaesCoordination.duplicatePattern.producePatternViewBoard
                .getSupplier()
                .then(res => {
                    if (res && res.data && res.data.code === 0) {
                        // res.data.data.forEach(uArr => {
                        //     uArr.sysUserOutVos.forEach(item => {
                        //         let idx = this.supplierOptions.findIndex(u => {
                        //             return item.id === u.value
                        //         })
                        //         if (idx === -1) {
                        //             this.supplierOptions.push({
                        //                 value: item.id,
                        //                 label: `${item.name}(${item.username})`,
                        //                 username: item.username
                        //             })
                        //         }
                        //     })
                        // })

                        this.supplierOptions = res.data.data.map(item => {
                            return {
                                value: item.providerSn,
                                label: `${item.providerName}(${item.providerSn})`
                            }
                        })
                        this.supplierFilters = this.supplierOptions
                    }
                })
        },
        supplierFilter(query) {
            let _query = query.replace(/(^\s*)|(\s*$)/g, '').toLowerCase()
            this.supplierFilters = this.supplierOptions.filter(option => {
                return (
                    option.value.toLowerCase().indexOf(_query) > -1 ||
                    option.label.toLowerCase().indexOf(_query) > -1
                )
            })
        },
        onSelect() {
            this.$emit('change', this.selectedValue)
        }
    }
}
</script>
<style lang="scss" scoped>
.el-select {
    width: 100%;
}
</style>
