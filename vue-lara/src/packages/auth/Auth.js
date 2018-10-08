export default function(Vue) {
  let authUser = {}
  Vue.auth = {
    // Is authenticated
    isAuthenticated() {
      if (this.getToken())
        return true
      else
        return false
    },

    // Set token
    setToken(token, expiration) {
      localStorage.setItem('token', token)
      localStorage.setItem("expiration", expiration)
    },

    // Get token
    getToken() {
      var token = localStorage.getItem('token')
      var expiration = localStorage.getItem('expiration')

      if(!token || !expiration)
        return null
      if(Date.now() > parseInt(expiration)) {
        this.destroyToken();
        return null;
      }else{
        return token;
      }
    },

    // Destroy token
    destroyToken() {
      localStorage.removeItem('token')
      localStorage.removeItem('expiration')
    },

    // Set authenticated user
    setAuthUser(data) {
      authUser = data
    },

    // Get authenticated user
    getAuthUser() {
      return authUser
    }

  }

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth
      }
    }
  })
}
