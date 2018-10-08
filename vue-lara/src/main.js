import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import VueSweetalert2 from 'vue-sweetalert2'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(VeeValidate)
Vue.use(VueSweetalert2)
Vue.use(Auth)

Vue.http.options.root = "http://127.0.0.1:8000"
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
Vue.http.interceptors.push((request, next) => {
  next(res => {
    if(res.status == 404)
      Vue.swal({
        title: res.status.toString(),
        text: res.body.error,
        type: "error",
        button: "Ok",
      });

    else if(res.status == 500)
      Vue.swal({
        title: res.status.toString(),
        text: 'We are experiencing a problem in our servers!',
        type: "error",
        button: "Ok",
      });
  })
})

Router.beforeEach(
  (to, from, next) => {

    if(to.matched.some(record => record.meta.forGuest)) {
      if(Vue.auth.isAuthenticated()) {
        next({
          path: '/feeds'
        })
      } else next()
    }

    else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    }

    else next()
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
