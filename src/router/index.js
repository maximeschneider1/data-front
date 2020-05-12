import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../components/Clients/Clients')
  },
  { 
    path: '/404', 
    component: () => import(/* webpackChunkName: "about" */ '../components/AppStructure/404.vue') },
  { 
    path: '*', 
    redirect: '/404' 
  },  
  {
    path: '/clients/detail/:id',
    name: 'ClientDetail',
    component: () => import(/* webpackChunkName: "about" */ '../components/Clients/ClientsDetail')
  },
  {
    path: '/prospects',
    name: 'Prospects',
    component: () => import(/* webpackChunkName: "about" */ '../components/Leads/Prospects.vue')
  },
  {
    path: '/prospects/detail/:id',
    name: 'ProspectDetail',
    component: () => import(/* webpackChunkName: "about" */ '../components/Leads/ProspectDetail.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "about" */ '../components/Documentation/Documents')
  },
  {
    path: '/documentation/article',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "about" */ '../components/Documentation/Article')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../components/settings/Settings')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
