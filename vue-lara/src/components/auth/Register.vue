<template>
	<div class="row my-5">
		<div class="col-sm-6 mx-auto">
			<div class="card">
				<div class="card-header h3">Signup Today</div>
				<div class="card-body">
					<form>
						<div class="form-group form-row">
							<div class="col-sm-6">
							  <input type="text" class="form-control" placeholder="First name" v-model="fname">
							</div>
							<div class="col-sm-6">
							  <input type="text" class="form-control" placeholder="Last name" v-model="lname">
							</div>
						</div>

						<div class="form-group form">
							<input type="email" class="form-control" placeholder="Email" v-model="email">
						</div>

						<div class="form-group form-row">
							<div class="col-sm-6">
								<input type="password" class="form-control" placeholder="Password" v-model="password">
							</div>
							<div class="col-sm-6">
								<input type="password" class="form-control" placeholder="Confirm password" v-model="cpassword">
							</div>
						</div>

						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-block">Register</button>
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
				fname: '',
				lname: '',
				email: '',
				password: '',
				cpassword: '',
			}
		}
	}
</script>

<style lang="scss" scoped></style>