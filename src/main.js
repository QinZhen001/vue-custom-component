// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import ImgPreviewerDirective from './directive/previewer/index'

import 'element-ui/lib/theme-chalk/index.css'
import './common/reset.styl'

Vue.use(ElementUI)
Vue.use(ImgPreviewerDirective, {
  background: {color: 'rgba(0, 0, 0, 0.5)'},
  animate: {
    duration: 1000,
    func: 'ease'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
