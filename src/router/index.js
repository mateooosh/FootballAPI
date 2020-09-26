import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/bundesliga',
    name: 'Bundesliga',
    component: () => import('../views/Bundesliga.vue')
  },
  {
    path: '/primera-division',
    name: 'PrimeraDivision',
    component: () => import('../views/PrimeraDivision.vue')
  },
  {
    path: '/ligue-1',
    name: 'Ligue1',
    component: () => import('../views/Ligue1.vue')
  },
  {
    path: '/premier-league',
    name: 'PremierLeague',
    component: () => import('../views/PremierLeague.vue')
  },
  {
    path: '/serie-a',
    name: 'SerieA',
    component: () => import('../views/SerieA.vue')
  },
  {
    path: '/eredivisie',
    name: 'Eredivisie',
    component: () => import('../views/Eredivisie.vue')
  },
  {
    path: '/portugal',
    name: 'Portugal',
    component: () => import('../views/Portugal.vue')
  }, {
    path: '/championship',
    name: 'Championship',
    component: () => import('../views/Championship.vue')
  }, {
    path: '/ekstraklasa',
    name: 'Ekstraklasa',
    component: () => import('../views/Ekstraklasa.vue')
  }, {
    path: '/russian-premier-league',
    name: 'Russia',
    component: () => import('../views/Russia.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
