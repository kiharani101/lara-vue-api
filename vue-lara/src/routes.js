import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import MainContent from './components/MainContent.vue'
import Feeds from './components/Feeds.vue'
import Create from './components/products/Create.vue'
import Edit from './components/products/Edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: MainContent
    },
    {
      path: "/feeds",
      component: Feeds,
      meta: {
        forAuth: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        forGuest: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        forGuest: true
      }
    },

    {
      path: "/products/create",
      component: Create,
      meta: {
        forAuth: true
      }
    },

    {
      path: "/products/:product/edit",
      component: Edit,
      meta: {
        forAuth: true
      }
    },

  ],

  linkExactActiveClass: 'active',
  mode: "history",
});

export default router
