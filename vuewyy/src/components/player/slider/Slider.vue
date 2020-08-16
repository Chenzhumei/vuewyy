<template>
  <div class="slider" ref="slider" v-mousemove >
      <slider-track></slider-track>
      <slider-handle></slider-handle>
  </div>
</template>

<script>
import SliderTrack from './slider-track/SliderTrack';
import SliderHandle from './slider-handle/SliderHandle'
export default {
  data() {
    return {
        
    }
  },
  props: {
      vertical: {
          default: false,
          type: Boolean
      },
      min: {
          default: 0,
          type: Number
      },
      max: {
          default: 100,
          type: Number
      }
  },
  created() {
   
  },
  methods: {
      getPosition() {
        const slider = this.$refs.slider;
        console.log(slider);
      }
  },
  directives: {
     mousemove: {
        bind(el, binding) {
         el.addEventListener('mousedown', event => {
            event.stopPropagation();
            event.preventDefault();
            console.log(event);
        })
        el.addEventListener('mouseup', event => {
            event.stopPropagation();
            event.preventDefault();
            console.log(event);
        })
        }
     }
  },
  components: {
      SliderTrack,
      SliderHandle
  }
}
</script>

<style lang='scss'>
@import '@assets/scss/mixins';
.slider{
  height: 9px;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  position: relative;
  background: url('../../../assets/images/statbar.png') right 0;
  cursor: pointer;



  .slider-track{
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    background: url('../../../assets/images/statbar.png') left -66px;
    &.buffer{
      background-position: right -30px;
    }
  }


  .slider-handle{
    position: absolute;
    margin-top: -7px;
    margin-left: -12px;
    @include icon('../../../assets/images/iconall.png', 22px, 24px);
    background-position: 0 -250px;
  }


  /* 垂直 */
  &.slider-vertical{
    width: 4px;
    height: 100%;
    background-color: #000000a6;
    background-image: none;


    .slider-track{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      background: url('../../../assets/images/playbar.png') -40px bottom;
    }


    .slider-handle{
      margin-bottom: -10px;
      margin-left: -7px;
      bottom: 0;
      @include icon('../../../assets/images/iconall.png', 18px, 20px);
      background-position: -40px -280px;
    }
  }
}
</style>
