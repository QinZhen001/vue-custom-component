<template>
  <div ref="previewer" class="previewer" :v-show="showFlag" :style="{zIndex}">
    <!--遮罩层-->
    <div class="previewer-background" @click.stop="close" :style="bgStyle"></div>
    <!--图片主体-->
    <div class="previewer-body">
      <img class="picture"
           ref="picture"
           :src="src"
           :style="imgStyle"
           @click.stop="close">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from '../js/dom'

  export default{
    name: 'previewer',
    props: {
      zIndex: {
        type: Number,
        default: 1
      },
      src: {
        type: String,
        default: '/static/cat.jpg'
      },
      background: {
        type: String || Object,
        default: 'rgba(0, 0, 0, 0.5)'
      },
      // 原始的dom，也就是加上了指令的dom
      sourceDom: {},
      animate: {
        type: Object,
        default: () => ({duration: 500})
      }
    },
    data(){
      return {
        showFlag: false,
        pictureSize: {},
        imgStyle: {}
      }
    },
    mounted(){
      window.addEventListener('resize', () => {
        this.setPictureSize()
      })
    },
    methods: {
      open(){
        this.showFlag = true
        this.setPictureSize()
      },
      close(){
        this.setPictureBegin()
        let totalTime = (this.animate.duration || 0) + (this.animate.delay || 0)
        setTimeout(() => {
          this.$emit('close')
          this.showFlag = false
        }, totalTime)
      },
      // 设置展示完成的状态
      setPictureSize(){
        let result = {}
        let picture = this.$refs.picture
        let pictureRatio = picture.naturalWidth / picture.naturalHeight
        let windowRatio = picture.innerWidth / window.innerHeight
        const percent = 0.8
        if (pictureRatio >= windowRatio) {
          let width = window.innerWidth * percent
          result.width = parseInt(width)
          result.height = parseInt(width / pictureRatio)
        } else {
          let height = window.innerHeight * percent
          result.height = parseInt(height)
          result.width = parseInt(height * pictureRatio)
        }
        result.top = (window.innerHeight - result.height) / 2
        result.left = (window.innerWidth - result.width) / 2
        this.pictureSize = result
      },
      // 设置开始和结束时的状态(也就是挂载指令的元素的size的信息)
      setPictureBegin(){
        let rect = this.sourceDom.getBoundingClientRect()
        let {width, height, top, left} = rect
        this.pictureSize = {width: width, height: height, top: top, left: left}
      },
      handleTransition({duration, delay, func}){
        return `${duration || 0}ms ${delay || 0}ms ${func || ''}`
      }
    },
    computed: {
      bgStyle(){
        let backgroundStyle = typeof this.background === 'string' ? {
          backgroundColor: this.background
        } : {
          ...this.background
        }
        backgroundStyle.transition = this.handleTransition(this.animate)
        return backgroundStyle
      }
    },
    watch: {
      pictureSize: {
        deep: true,
        handler(val){
          ['top', 'left', 'width', 'height'].forEach(key => {
            this.$set(this.imgStyle, key, val[key] + 'px')
          })
          this.$set(this.imgStyle, prefixStyle('transition'), this.handleTransition(this.animate))
          this.$set(this.imgStyle, 'cursor', 'pointer')
        }
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .previewer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    &-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &-body {
      width: 100%;
      height: 100%;
      z-index: 3;
      img {
        position: absolute;
        z-index: 3;
      }
    }
  }
</style>
