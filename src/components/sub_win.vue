<template>
  <div class="subwin-outer-box">
    <div class="subwin-mask"
         v-if="visible"></div>
    <div class="subwin-wrapper"
         v-if="visible"
         :style="{height: height + 'px'}">
      <div v-if="$slots.subwinHeader"
           class="subwin-header">
        <slot name="subwinHeader"></slot>
      </div>
      <div v-else
           class="subwin-header">
        <slot name="title">
          <span class="subwin-header-title">{{ title }}</span>
        </slot>
      </div>
      <div class="subwin-body"
           :style="{height: subwinBodyHeight + 'px'}"
           style
           @scroll="contentScroll()">
        <span class="subwin-close-btn"
              ref="subwin-close-btn"
              @click="handleClose">
          <i class="el-icon-circle-close"></i>
        </span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: [Boolean, Number]
        },
        title: {
            type: String
        },
        id: {
            type: String
        }
    },
    data () {
        return {}
    },
    mounted () {
        const subwin = document.querySelector('.subwin-outer-box')
        const body = document.querySelector('body')
        body.appendChild(subwin)
    },
    computed: {
        height () {
            return window.innerHeight - 50
        },
        subwinBodyHeight () {
            return window.innerHeight - 96
        }
    },
    methods: {
        contentScroll () {
            let scrollTop = document.querySelector('.subwin-body').scrollTop
            this.$emit('scroll', scrollTop)
        },
        handleClose () {
            this.$emit('update:visible', false)
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss">
.subwin-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.5);
}
.subwin-wrapper {
    position: absolute;
    right: 0;
    top: 50px;
    bottom: 0;
    background: #fff;
    z-index: 2000;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;
    width: 85vw;
    .subwin-header {
        height: 45px;
        line-height: 45px;
        background: #f2f6fc;
        border-bottom: 1px solid #e4e7ed;
        text-align: center;
        font-size: 24px;
        .subwin-header-title {
            text-align: center;
            font-size: 24px;
        }
    }
    .subwin-body {
        overflow: auto;
        .subwin-content {
            height: calc(100% - 91px);
        }
        .subwin-close-btn {
            position: absolute;
            left: -30px;
            top: 50%;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50%;
            cursor: pointer;
            line-height: 34px;
            text-align: center;
            font-size: 26px;
            z-index: -1;
            .el-icon-circle-close {
                position: absolute;
                top: 11px;
                left: 4px;
                color: #ccc;
                transition: all 0.1s;
                &:hover {
                    color: #888;
                }
            }
        }
        &::-webkit-scrollbar {
            width: 4px;
            background-color: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #a1a2a5;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f5f5f5;
        }
    }
}
</style>
