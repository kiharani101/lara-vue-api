<template>
	<div>
		<nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Laravue</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          
        </ul>

        <ul class="navbar-nav ml-auto" v-if="!isAuth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" >Register</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-if="isAuth">
          <li class="nav-item">
            <router-link to="/feeds" class="nav-link">Feeds</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/products/create" class="nav-link">Create Product</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/logout" class="nav-link">Logout</router-link>
          </li>
        </ul>

      </div>
    </nav>
	</div>
</template>

<script>
	export default {
  data() {
    return {
      isAuth: null,
    }
  },

  created() {
    this.isAuth = this.$auth.isAuthenticated()
    this.setAuthUser()
  },

  methods: {
    setAuthUser() {
      this.$http.get('api/user')
      .then(res => {
        this.$auth.setAuthUser(res.body)
      })
    }
  },
  
}
</script>

<style lang="scss" scoped>
	
</style>
