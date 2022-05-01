import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import List from '../views/List.vue'
import TemplateSyntax from '../views/Docs/TemplateSyntax.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  // Docs
  {
    path: '/template-syntax',
    name: 'TemplateSyntax',
    component: TemplateSyntax
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
