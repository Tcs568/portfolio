import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/components/TheTop'
import About from '@/components/TheAbout'
import Work from '@/components/TheWork'
import Contact from '@/components/TheContact'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
  {
    path: '/works',
    name: 'Work',
    component: Work,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router