import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import FormView from '../views/FormView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'FormView',
    component: FormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
