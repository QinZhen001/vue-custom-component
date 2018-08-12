<template>
  <div>
    <img :src="imgSrc"
         width="300"
         height="300"
         v-preview="{src:imgSrc}">
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        imgSrc: '/static/cat.jpg'
      }
    }
  }
</script>

<style lang="" scoped rel="stylesheet">

</style>
