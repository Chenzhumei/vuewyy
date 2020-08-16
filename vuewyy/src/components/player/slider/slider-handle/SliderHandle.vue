<template>
  <div class="slider-handle" :style = style></div>
</template>

<script>
export default {
  data() {
    return {
        style: {}
    }
  },
  props: {
      vertical: {
          default: false,
          type: Boolean
      },
      offset: {
        type: Number
      }
  },
  watch: {
   offset(newVal) {
     this.style[this.vertical ? 'bottom' : 'left'] = this.offset + '%';
   }
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
</style>
