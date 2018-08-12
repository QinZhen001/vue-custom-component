<template>
  <div>
    1111
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'ScrollBar',
    data(){
      return {
        sizeWidth: '0',
        sizeHeight: '0',
        moveX: 0,
        moveY: 0
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @mixin scroll-bar {
    $--scrollbar-thumb-background: #b4bccc;
    $--scrollbar-track-background: #fff;
    &::-webkit-scrollbar {
      z-index: 11;
      width: 6px;
      &:horizontal {
        height: 6px;
      }
      &-thumb {
        border-radius: 5px;
        width: 6px;
        background: $--scrollbar-thumb-background;
      }
      &-corner {
        background: $--scrollbar-track-background;
      }
      &-track {
        background: $--scrollbar-track-background;

        &-piece {
          background: $--scrollbar-track-background;
          width: 6px;
        }
      }
    }
  }
</style>
