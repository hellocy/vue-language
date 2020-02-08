<template>
    <div class="print-root">
        <slot>
            <el-button type="primary" size="mini" plain @click="handlePrint()">{{text}}</el-button>
        </slot>
        <iframe id="printf" src width="0" height="0" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {
    props: {
        startPrint: {
            type: [String, Number]
        },
        text: {
            type: String
        },
        // 需要打印的 DOM 节点。
        // 可传入一个 DOM 对象或字符串；
        // 若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点
        target: {
            type: String,
            default() {
                return '.print-root'
            }
        },
        // 纸张设置
        pageOptions: {
            type: String,
            default: 'A4 portrait'
        }
    },
    data() {
        return {
            buttonText: ''
        }
    },
    watch: {
        startPrint(newVal) {
            if (newVal) {
                this.handlePrint()
            }
        }
    },
    methods: {
        handlePrint() {
            let target = this.target
            if (typeof this.target === 'string') {
                target = document.querySelector(target)
            }
            // 获取打印区域的html代码
            let printhtml = target && target.innerHTML
            if (printhtml) {
                // 生成并打印ifrme
                let f = document.getElementById('printf')
                f.contentDocument.write(
                    `<style type="text/css">
                    @media print {
                        @page {
                            size: ${this.pageOptions};
                        }
                    }
                    table{font-size:8px; border:1px solid #000;border-collapse: collapse;}
                    table td{border:1px solid #000;}
                    img {max-width: 100% !important;}
                </style>`
                )
                f.contentDocument.write(printhtml)
                f.contentDocument.close()
                try {
                    const images = target.querySelectorAll('img')
                    const imageArr = [].slice.call(images)
                    const imgLength = imageArr.length
                    if (imgLength) {
                        let imgStart = 0
                        imageArr.forEach(item => {
                            const img = new Image()
                            img.src = item.getAttribute('src')
                            img.onload = () => {
                                imgStart++
                                if (imgStart === imgLength) {
                                    f.contentWindow.print()
                                }
                            }
                        })
                    } else {
                        f.contentWindow.print()
                    }
                } catch (error) {
                    setTimeout(() => {
                        f.contentWindow.print()
                    }, 500)
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.print-root {
    display: inline-block;
    background-color: #fff;
}
</style>
