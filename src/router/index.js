import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../components/AppAllGalleries'
import CreateNewGallery from '../components/AppCreateNewGallery'
import SingleGallery from '../components/AppSingleGallery'
import Author from '../components/AppAuthor'

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
  },
  {
    path: '/galleries/:id',
    name: 'SingleGallery',
    component: SingleGallery
  },
  {
    path: '/author/:id',
    name: 'Author',
    component: Author
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
