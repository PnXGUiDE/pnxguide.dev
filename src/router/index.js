import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'PnXGUiDE\'s Site',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About PnXGUiDE',
    }
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    meta: {
      title: 'PnXGUiDE\'s Project',
    }
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Activity.vue'),
    meta: {
      title: 'PnXGUiDE\'s Activity',
    }
  },
  {
    path: '/elective',
    name: 'Elective Courses',
    component: () => import('../views/Elective.vue'),
    meta: {
      title: 'CS-KMITL Elective Course',
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
