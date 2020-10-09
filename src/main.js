import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  VueAxios,
  VueResource,
  store,
  render: h => h(App)
}).$mount('#app')
const auth = axios.create({
  baseURL: "https://e503eef4-bd94-4dd6-9fb0-d6719bc06ea7.mock.pstmn.io/products"
})
auth.defaults.headers.common['auth'] = 'products'
export default auth
