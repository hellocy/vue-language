<template>
    <div v-viewer="{movable: false}">
        <img
            v-if="id"
            :width="width + 'px'"
            :height="height + 'px'"
            :src="serverHost + 'image/downLoad?imageId=' + id"
        />
        <img v-else :width="width + 'px'" :height="height + 'px'" :src="src" />
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: [Number, String]
        },
        src: {
            type: String
        },
        isSetServerHost: {
            type: Boolean,
            default: true
        },
        height: {
            type: [Number],
            default() {
                return 180
            }
        },
        width: {
            type: [Number],
            default() {
                return 180
            }
        }
    },
    data() {
        return {
            serverHost: window.SERVERHOST
        }
    }
}
</script>
