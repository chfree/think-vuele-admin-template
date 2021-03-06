// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TennetcnUI from 'tennetcn-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'tennetcn-ui/lib/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'remixicon/fonts/remixicon.css'
import '@/styles/index.scss'
Vue.config.productionTip = false

Vue.use(TennetcnUI)

import '@/mock'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
