<template>
	<div class="row my-5">
		<div class="col-md-4 col-sm-6 mx-auto">
			<div class="card">
				<div class="card-header h3">Login Now</div>
				<div class="card-body">
					<form @submit.prevent="login">
						<div class="form-group">
							<input type="email" class="form-control" placeholder="Email" v-model="email">
						</div>

						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" v-model="password">
						</div>

						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-block">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
        password: '',
        loggedIn : false,
			}
    },

    methods: {
      login(){
        var data = {
          client_id: 2,
          client_secret: 'ChNyL3li30sNapQCFswxeyv573BJcUvaeJIZ6rDD',
          grant_type: 'password',
          username: this.email,
          password: this.password,
        }
        this.$http.post("oauth/token", data)
            .then(res => {
              this.$auth.setToken(res.body.access_token, res.body.expires_in + Date.now())
              this.loggedIn = true
              this.$router.push('/feeds')
            })
      }
    }
	}
</script>

<style lang="scss" scoped></style>
