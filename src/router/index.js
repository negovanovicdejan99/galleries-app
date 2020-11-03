import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../components/AppAllGalleries'
import CreateNewGallery from '../components/AppCreateNewGallery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/galleries'
  },
  {
    path: '/galleries',
    name: 'AllGalleries',
    component: AllGalleries
  },
  {
    path: '/create',
    name: 'CreateNewGallery',
    component: CreateNewGallery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
