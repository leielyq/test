import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  './assets/reset.css'
import VDistpicker from 'v-distpicker' // 引入省市选择器

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('v-distpicker', VDistpicker) // 注册组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
