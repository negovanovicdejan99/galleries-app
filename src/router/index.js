import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../components/AppAllGalleries'
import CreateNewGallery from '../components/AppCreateNewGallery'
import SingleGallery from '../components/AppSingleGallery'
import Author from '../components/AppAuthor'
import Login from '../components/AppLogin'
import Register from '../components/AppRegister'
import MyGalleries from '../components/AppMyGalleries'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/my-galleries',
    name: 'MyGalleries',
    component: MyGalleries
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
