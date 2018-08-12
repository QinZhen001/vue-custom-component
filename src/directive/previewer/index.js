import Vue from 'vue'
import { merge } from 'lodash'
import imgPreviewer from '../../components/img-previewer.vue'
const ImgPreviewer = Vue.extend(imgPreviewer)

export default {
  install(Vue, options){
    options = options || {}
    Vue.directive('preview', {
      bind(el, binding, vnode){
        binding.value = binding.value || {}
        let {src, background, animate, zIndex, copy} = binding.value
        el.addEventListener('click', handleClick({
          vnode,
          src,
          copy: typeof copy === 'boolean' ? copy : options.copy,
          background: merge(options.background || {}, background || {}),
          animate: merge(options.animate || {}, animate || {}),
          zIndex: zIndex ? Number(zIndex) : options.zIndex
        }))
      }
    })
  }
}

const handleClick = ({
                       vnode,
                       src: bindSrc,
                       copy = false,
                       background,
                       animate = {duration: 500},
                       zIndex
                     }) => {
  return (e) => {
    let instance = new ImgPreviewer()
    let src = bindSrc || vnode.data.attrs.src || vnode.componentInstance.src
    let rect = e.target.getBoundingClientRect()
    let {width, height, top, left} = rect
    instance.pictureSize = {width, height, top, left}
    instance.animate = animate
    instance.zIndex = zIndex
    instance.vm = instance.$mount()
    instance.vm.src = src
    instance.dom = instance.vm.$el
    instance.sourceDom = e.target
    instance.vm.background = background
    instance.vm.$on('close', handleClose(instance.vm, e.target, copy))
    instance.vm.$nextTick(() => {
      setTimeout(() => {
        if (!copy) {
          instance.sourceDom.style.visibility = 'hidden'
        }
        instance.vm.open()
      }, 0)
    })
    document.body.appendChild(instance.dom)
  }
}

const handleClose = (vm, sourceDom, copy) => {
  return () => {
    vm.$destroy()
    if (!copy) {
      sourceDom.style.visibility = ''
    }
    document.body.removeChild(vm.$el)
  }
}
