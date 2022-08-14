import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SecondHome from '../views/SecondHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/second',
    name: 'Second Home',
    component: SecondHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
