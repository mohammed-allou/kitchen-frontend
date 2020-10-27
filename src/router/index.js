import Vue from 'vue'
import VueRouter from 'vue-router'
import products from '../components/products'
import Ajouter from '../components/Ajouter'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: products
  },

  {
    path: '/Ajouter',
    name: 'Ajouter',
    component: Ajouter
  },
]

const router = new VueRouter({
  routes
})

export default router
