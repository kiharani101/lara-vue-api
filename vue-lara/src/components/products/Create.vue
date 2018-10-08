<template>
	<div class="row my-5">
		<div class="col-md-8 mx-auto">
			<div class="card">
				<p class="card-header h3">Create Product</p>
				<div class="card-body">
					<form @submit.prevent="create">
						<div class="row">
							<div class="form-group col-sm-6">
								<label>Name: </label>
								<input name="name" type="text" class="form-control" v-validate="'required'" v-model="product.name">

								<div v-show="errors.has('name')" class="alert alert-danger mt-1">
									{{ errors.first('name') }}
								</div>

							</div>

							<div class="form-group col-sm-6">
								<label>Price: </label>
								<input name="price" type="number" step="0.01" class="form-control" v-validate="'required|max_value:50000000|min_value:1'" v-model="product.price">

								<div v-show="errors.has('price')" class="alert alert-danger mt-1">
									{{ errors.first('price') }}
								</div>

							</div>
						</div>

						<div class="form-group">
							<label>Description: </label>
							<textarea name="description" rows="4" class="form-control" v-validate="'required'" v-model="product.description"></textarea>

							<div v-show="errors.has('description')" class="alert alert-danger mt-1">
								{{ errors.first('description') }}
							</div>

						</div>

						<div class="form-group text-right">
							<button class="btn btn-success px-4" type="submit">Save to Database</button>
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
    		product: {
    			name: '',
    			price: 0,
    			description: ''
    		}
    	}
    },

    methods: {
    	create() {
    		this.$validator.validate().then(result => {
    			if(result)
    				this.$http.post('api/products', this.product)
				    .then(res => {
				    	this.$router.push('/feeds');
				    })
    		})
    	}
    }
  }
</script>
