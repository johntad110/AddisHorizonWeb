import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import PropertyListing from '../views/PropertyListing.vue'
import PropertyDetails from '../views/PropertyDetails.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/property-listing',
    name: 'poperty-listing',
    component: PropertyListing
  },
  {
    path: '/property-details/:id',
    name: 'property-details',
    component: PropertyDetails
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
