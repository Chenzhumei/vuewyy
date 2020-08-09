import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filter/filter.index'

import { Button, message, Form, Input, Icon, Carousel  } from 'ant-design-vue';

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Carousel)

// 全局注册过滤器
Object.keys(filters).forEach( key  => { Vue.filter(key, filters[key]) })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
