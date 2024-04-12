import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue'
import About from '@/views/about.vue'
import Contacts from '@/views/contacts.vue'
import Products from '@/views/products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})

export default router
