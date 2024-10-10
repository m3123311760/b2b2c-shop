import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Live from '../views/Live.vue'
import Cart from '../views/Cart.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/category', component: Category },
  { path: '/live', component: Live },
  { path: '/cart', component: Cart },
  { path: '/profile', component: UserProfile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router