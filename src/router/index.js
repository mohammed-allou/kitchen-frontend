import Vue from 'vue'
import VueRouter from 'vue-router'
import products from '../components/products'
import addProduct from '../components/addProduct'
import deleteProduct from '../components/deleteProduct'
import editProduct from '../components/editProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: products
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: addProduct
  },
  {
    path: '/deleteProduct',
    name: 'deleteProduct',
    component: deleteProduct
  },
  {
    path: '/editProduct',
    name: 'editProduct',
    component: editProduct
  },
]

const router = new VueRouter({
  routes
})

export default router
