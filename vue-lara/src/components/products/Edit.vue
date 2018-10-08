<template>
	<div class="row my-5">
		<div class="col-md-8 mx-auto">
			<div class="card">
				<p class="card-header h3">Edit Product</p>
				<div class="card-body">
					<form @submit.prevent="update">
						<div class="row">
							<div class="form-group col-sm-6">
								<label>Name: </label>
								<input type="text" class="form-control" v-model="product.name">
							</div>

							<div class="form-group col-sm-6">
								<label>Price: </label>
								<input type="number" min="1" step="0.01" class="form-control" v-model="product.price">
							</div>
						</div>

						<div class="form-group">
							<label>Description: </label>
							<textarea rows="4" class="form-control" v-model="product.description"></textarea>
						</div>

						<div class="form-group text-right">
							<button class="btn btn-success px-4" :disabled="!product.name || !product.price || !product.description" type="submit">Save Changes</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.getProduct()
		},

    data() {
    	return {
    		product: {}
    	}
    },

    methods: {
    	getProduct() {
    		this.$http.get('api/products/' + this.$route.params.product)
    		.then(res => {
    			this.product = res.body
    		})
    	},

    	update() {
    		this.$http.put('api/products/' + this.$route.params.product, this.product)
		    .then(res => {
		    	this.$swal({
					  title: "Product Updated!",
					  text: "Please proceed.",
					  type: "success",
					  button: "Ok",
					});
		    	this.$router.push('/feeds');
		    })
    	}
    }
  }
</script>
