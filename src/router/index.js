import Vue from 'vue'
import VueRouter from 'vue-router'
import products from '../components/products'
// import addProduct from '../components/addProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: products
  },
  // {
  //   path: '/addProduct',
  //   name: 'addProduct',
  //   component: addProduct
  // },
]

const router = new VueRouter({
  routes
})

export default router
