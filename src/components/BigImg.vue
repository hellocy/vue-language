<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <!-- <div class="img-layer"></div> -->
      <div class="img">
        <img :src="imgSrc">
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  props: ['imgSrc'],//接受图片地址
  methods: {
    bigImg() {
      // 发送事件
      this.$emit('clickit')
    }
  }
}
</script>

<style scoped  rel="stylesheet/less">
.img-view {
  /* position: inherit; */
  width: 100%;
  height: 100%;
}
.img-view {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img-view .img {
  max-width: 1200px;
  height: auto;
}
.img-view .img img {
  /* max-width: 100%; */
  max-width: 1200px;
  height: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1000;
}
</style>
