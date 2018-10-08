<template>
	<div class="col-md-4">
		<div class="card card-body">
			<img class="img-fluid" src="https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426">
			<div class="caption">
				<h3>{{ product.name }}</h3>
				<p>{{ product.price }}</p>
				<hr>
				<p>
					<a href="#" class="btn btn-info btn-sm">Wishlist</a>
					<a href="#" class="btn btn-success btn-sm">Add to Cart</a>
				</p>
        <hr>
				<p v-if="product.user_id == authUser.id">
					<router-link :to="'/products/' + product.id +'/edit'" class="btn btn-info btn-sm">Edit</router-link>
					<a href="#" class="btn btn-danger btn-sm" @click="$emit('delete-product')">Delete</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    props: ['product', 'authUser']
  }
</script>
