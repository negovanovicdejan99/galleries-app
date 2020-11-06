import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../components/AppAllGalleries'
import CreateNewGallery from '../components/AppCreateNewGallery'
import SingleGallery from '../components/AppSingleGallery'
import Author from '../components/AppAuthor'
import Login from '../components/AppLogin'
import Register from '../components/AppRegister'
import MyGalleries from '../components/AppMyGalleries'
import EditGallery from '../components/AppEditGallery'

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
    component: CreateNewGallery,
    meta: { isAuthRequired: true }
  },
  {
    path: '/galleries/:id',
    name: 'SingleGallery',
    component: SingleGallery,
  },
  {
    path: '/author/:id',
    name: 'Author',
    component: Author,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')) {
        next('/galleries');
      }else {
        next();
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')) {
        next('/galleries');
      }else {
        next();
      }
    },
  },
  {
    path: '/my-galleries',
    name: 'MyGalleries',
    component: MyGalleries,
    meta: { isAuthRequired: true }
  },
  {
    path: '/edit-gallery/:id',
    name: 'EditGallery',
    component: EditGallery,
    meta: { isAuthRequired: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.isAuthRequired && !localStorage.getItem('token')) {
    next('/galleries');
  } else {
    next();
  }
})

export default router
