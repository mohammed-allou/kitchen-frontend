import Vue from 'vue'
import VueRouter from 'vue-router'
import products from '../components/products'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: products
  },
]

const router = new VueRouter({
  routes
})

export default router
