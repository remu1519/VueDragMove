import VueDrag from './components/VueDrag'

export const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true
  Vue.component('vue-drag', VueDrag)
}

const plugin = {
  install
}

const GlobalVue = (() => {
  if (typeof window !== 'undefined') {
    return window.Vue
  }
  if (typeof global !== 'undefined') {
    return global.Vue
  }
  return null
})()

if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default VueDrag
