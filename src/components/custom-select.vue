<template>
  <div class="custom-select">
    <div class="select">
      <input type="text"
             autocomplete="off"
             placeholder="请选择"
             readonly="readonly"
             :value="selectVal"
             @click.stop="toogleDropdown"
             class="select-input">
    </div>
    <div class="menu-wrapper" v-show="showFlag">
      <div class="menu">
        <div class="list-wrapper" ref="listWrapper">
          <ul>
            <li v-for="(item,index) in cities" :key="index" @click.stop="clickItem(item.label)">{{item.label}}</li>
          </ul>
        </div>
        <div class="footer">
          <span>+ </span>
          <span>新增用户</span>
        </div>
        <div class="scroll-bar">
          <div class="scroll-bar-thumb"></div>
        </div>
      </div>
      <div class="menu-triangle">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        selectVal: '',
        showFlag: false
      }
    },
    methods: {
      toogleDropdown(){
        this.showFlag = !this.showFlag
      },
      clickItem(val){
        this.selectVal = val
        this.toogleDropdown()
        // 还要把menu 还原成原来位置
        this.$refs.listWrapper.scrollTop = 0
//        console.log(this.$refs.listWrapper.scrollTop)
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet">
  .menu-item() {
    padding: 0 20px;
    width: 100%;
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    color: #606266;
  }

  .el-select-dropdown .el-popper {
    display: none;
  }

  .custom-select {
    position: relative;
    width: 220px;
    .select {
      position: relative;
      width: 100%;
      display: inline-block;
      input {
        display: inline-block;
        padding-right: 30px;
        padding-left: 15px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        font-size: inherit;
        outline: 0;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        &:hover {
          border-color: #409EFF;
        }
      }
    }
    .menu-wrapper {
      position: absolute;
      top: 54px;
      width: 100%;
      min-width: 217px;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      border: 1px solid #e4e7ed;
      transform-origin: center top;
      border-radius: 4px;
      background: #fff;
      z-index: 2009;
      transition: all 2s ease;
      .menu {
        // overflow: hidden; 为了隐藏掉右边和下边的滚动条
        // 这样外面的menu-wrapper层 就不用设置overflow: hidden (三层div都用用处 并不是过度包装)
        overflow: hidden;
        position: relative;
        &:hover {
          .scroll-bar {
            opacity: 1
          }
        }
        .list-wrapper {
          margin-bottom: -17px;
          margin-right: -17px;
          overflow: scroll;
          height: 100%;
          max-height: 274px;
          ul {
            padding-bottom: 34px;
            list-style: none;
            box-sizing: border-box;
            li {
              position: relative;
              .menu-item();
              &:hover {
                background: #f5f7fa;
              }
            }
          }
        }
        .footer {
          position: absolute;
          bottom: 0;
          background: #ddd;
          .menu-item();
        }
        .scroll-bar {
          position: absolute;
          top: 2px;
          bottom: 2px;
          right: 2px;
          width: 6px;
          opacity: 0;
          transition: opacity .12s ease-out;
          .scroll-bar-thumb {
            transform: translateY(0%);
            height: 61.1905%;
            position: relative;
            transition: .3s background-color;
            background-color: rgba(144, 147, 153, .3);
            border-radius: 4px;
          }
        }
      }
      .menu-triangle {
        left: 35px;
        top: -6px;
        margin-right: 3px;
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top-width: 0;
        border-bottom-color: #ebeef5;
        &::after {
          top: 1px;
          margin-left: -6px;
          content: " ";
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-top-width: 0;
          border-bottom-color: #fff;
        }
      }
    }
  }
</style>
