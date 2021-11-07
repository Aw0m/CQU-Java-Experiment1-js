import Vue from 'vue'
import App from './App.vue'
// import VueCookies from 'vue-cookies'

import router from './router/index'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

// import ElementPlus from "element-plus";
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

Vue.use(ElementUI) //使用elementUI
Vue.use(mavonEditor)
// Vue.use(VueCookies)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
