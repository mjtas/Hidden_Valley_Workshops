import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/workshops',
    name: 'workshops',
    component: () => import(/* webpackChunkName: "workshops" */ '../views/WorkshopView.vue')
  },
  {
    path: '/buildingWeekends',
    name: 'buildingWeekends',
    component: () => import(/* webpackChunkName: "buildingWeekends" */ '../views/BuildingWeekendsView.vue')
  },
  {
    path: '/giftVouchers',
    name: 'giftVouchers',
    component: () => import(/* webpackChunkName: "giftVouchers" */ '../views/GiftVouchersView.vue')
  },
  {
    path: '/consulting',
    name: 'consulting',
    component: () => import(/* webpackChunkName: "consulting" */ '../views/ConsultingView.vue')
  },
  {
    path: '/howToGuides',
    name: 'howToGuides',
    component: () => import(/* webpackChunkName: "howToGuides" */ '../views/HowToView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
