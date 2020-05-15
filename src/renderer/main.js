import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import util from './util/index.js'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.prototype.$axios = axios
Vue.prototype.$util = util
Vue.prototype.$baseUrl = 'http://localhost:3000'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
