import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css' //重置默认样式
import 'styles/border.css' //解决1px边框问题
import 'styles/iconfont.css' //自体图标CSS

Vue.config.productionTip = false
fastClick.attach(document.body) //解决300ms点击问题
Vue.use(VueAwesomeSwiper) //引用VueAwesomeSwiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
