import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/select'
    },
    {
      path: '/select',
      component: () => import('../components/custom-select.vue')
    },
    {
      path: '/scroll-bar',
      component: () => import('../components/scroll-bar.vue')
    },
    {
      path: '/slider',
      component: () => import('../components/slider.vue')
    },
    {
      path: '/previewer',
      component: () => import('../components/previewer.vue')
    },
    {
      path: '/turn-card',
      component: () => import('../components/turn-card.vue')
    }
  ]
})
