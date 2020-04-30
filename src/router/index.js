import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clients')
  },
  {
    path: '/client-detail/:id',
    name: 'ClientDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientsDetail')
  },
  {
    path: '/prospects/detail',
    name: 'ProspectDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProspectDetail.vue')
  },
  {
    path: '/prospects',
    name: 'Prospects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Prospects.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    component: () => import(/* webpackChunkName: "about" */ '../views/Planning')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Documents')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
