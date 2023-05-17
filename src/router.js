import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from './components/ProductsList.vue'
import ProductDetail from './components/ProductDetail.vue'
import Checkout from './components/Checkout.vue'

const routes = [
  { path: '/', component: ProductsList },
  { path: '/products', component: ProductDetail },
  { path: '/checkout', component: Checkout }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
