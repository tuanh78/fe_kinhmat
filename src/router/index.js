import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
import NewProduct from '../views/NewProduct.vue'
import Product from '../views/Product.vue'
import Footware from '../views/Footware.vue'
import Accessory from '../views/Accessory.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/new-products',
    name: 'NewProduct',
    component: NewProduct
  },
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/footware',
    name: 'Footware',
    component: Footware
  },
  {
    path: '/accessory',
    name: 'Accessory',
    component: Accessory
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
