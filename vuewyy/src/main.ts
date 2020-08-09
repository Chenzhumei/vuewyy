import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, message, Form, Input, Icon, Carousel  } from 'ant-design-vue';

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Carousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
