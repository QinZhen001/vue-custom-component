<template>
  <div id="app">
    <p>这个项目放置自己写的一些vue封装组件</p>
    <ul class="nav">
      <li>
        <router-link to="/select">select</router-link>
      </li>
      <li>
        <router-link to="/scroll-bar">scroll-bar</router-link>
      </li>
      <li>
        <router-link to="/slider">slider</router-link>
      </li>
      <li>
        <router-link to="/previewer">previewer</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style type="text/less" lang="less" scoped>
  #app {
    padding: 10px;
  }

  .nav {
    height: 50px;
    width: 100%;
    &::after {
      //为了li垂直居中 设置一个伪类元素撑开父元素
      display: inline-block;
      vertical-align: middle;
      content: '';
      height: 100%;
    }
    li {
      //只有display: inline-block,vertical-align才会起作用
      display: inline-block;
      vertical-align: middle;
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      background: #ddd;
      .router-link-active {
        color: mediumvioletred;
      }
    }
  }
</style>
