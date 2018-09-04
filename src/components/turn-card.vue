<template>
  <div class="page">
    3d卡片翻转效果
    <ul class="card-wrapper">
      <li class="card-item" ref="cardItem" v-for="(item,index) in cardData" :key="index">
        <div class="card" ref="card" :class="{change:curIndex===index}" @click="chooseCard(index)">
          <div class="front">
            {{item.front}}
          </div>
          <div class="back">
            {{item.back}}
          </div>
        </div>
      </li>
    </ul>
    <div class="footer">
      <button @click="restart">重置数据</button>
      <button @click="allMove">全部移动</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import animations from 'create-keyframe-animation'

  export default {
    data(){
      return {
        curIndex: -1,
        cardData: [
          {
            animationData: {},
            front: '正面1',
            back: '反面1'
          },
          {
            animationData: {},
            front: '正面2',
            back: '反面2'
          },
          {
            animationData: {},
            front: '正面3',
            back: '反面3'
          },
          {
            animationData: {},
            front: '正面4',
            back: '反面4'
          },
          {
            animationData: {},
            front: '正面5',
            back: '反面5'
          },
          {
            animationData: {},
            front: '正面6',
            back: '反面6'
          },
          {
            animationData: {},
            front: '正面7',
            back: '反面7'
          },
          {
            animationData: {},
            front: '正面8',
            back: '反面8'
          },
          {
            animationData: {},
            front: '正面9',
            back: '反面9'
          }
        ]
      }
    },
    mounted(){
//      const total = 9 // 总数
      const line = 3 // 行数
      const unitWidth = this.$refs.cardItem[0].offsetWidth
      const unitHeight = this.$refs.cardItem[0].offsetHeight
      this.cardData = this.cardData.map((item, index) => {
        // 形成九宫格布局，二维布局 最中间的坐标是(1,1)
        let x = index % line
        let y = parseInt(index / line)
        item.location = {x, y}
        let animation = {
          0: {
            transform: `translate3d(0,0,0)`
          },
          80: {
            transform: `translate3d(${unitWidth * (1 - item.location.x)}px,${unitHeight * (1 - item.location.y)}px,0)`
          },
          100: {
            transform: `translate3d(${unitWidth * (1 - item.location.x)}px,${unitHeight * (1 - item.location.y)}px,0)`
          }
        }
        animations.registerAnimation({
          name: `move${index}`,
          animation,
          presets: {
            duration: 1000,
            easing: 'ease-in-out',
            iterations: 2,
            direction: 'alternate'
          }
        })

        return item
      })
    },
    methods: {
      chooseCard(curIndex){
        this.curIndex = curIndex
        this.cardData = this.cardData.map((item, index) => {
          item.back = index === curIndex ? 'iphone x' : `反面${index + 1}`
          return item
        })
      },
      restart(){
        this.curIndex = -1
        this.cardData = [
          {
            animationData: {},
            front: '正面1',
            back: '反面1'
          },
          {
            animationData: {},
            front: '正面2',
            back: '反面2'
          },
          {
            animationData: {},
            front: '正面3',
            back: '反面3'
          },
          {
            animationData: {},
            front: '正面4',
            back: '反面4'
          },
          {
            animationData: {},
            front: '正面5',
            back: '反面5'
          },
          {
            animationData: {},
            front: '正面6',
            back: '反面6'
          },
          {
            animationData: {},
            front: '正面7',
            back: '反面7'
          },
          {
            animationData: {},
            front: '正面8',
            back: '反面8'
          },
          {
            animationData: {},
            front: '正面9',
            back: '反面9'
          }
        ]
      },
      allMove(){
        console.log(this.$refs.cardItem[0].offsetWidth)
        console.log(this.$refs.card[0].offsetWidth)

        const len = this.$refs.card.length
        for (let i = 0; i < len; i++) {
          animations.runAnimation(this.$refs.card[i], `move${i}`, () => {
            this.$refs.card[i].style['animation'] = ''
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .page {
    width: 100%;
    .card-wrapper {
      overflow: hidden;
      .card-item {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 33.333333%;
        height: 150px;
        .card {
          flex: 0 0 100px;
          width: 100px;
          height: 120px;
          line-height: 120px;
          text-align: center;
          box-sizing: border-box;
          transform-style: preserve-3d;
          .front, .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all .5s ease-in-out;
            backface-visibility: hidden;
          }
          .front {
            background-color: red;
            z-index: 2;
            transform: rotateY(0deg);
          }
          .back {
            background-color: #009fff;
            z-index: 1;
            transform: rotateY(180deg);
          }
          &.change {
            .front {
              z-index: 1;
              transform: rotateY(180deg);
            }
            .back {
              z-index: 2;
              transform: rotateY(0deg);
            }
          }
        }
      }
    }
    .footer {
      margin-top: 10px;
      text-align: center;
    }
  }
</style>
