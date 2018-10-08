<template>
	<div>
		<div class="container my-5">
      <h1 class="display-4">Listed Products</h1>
      <my-products></my-products>
    </div>
	</div>
</template>

<script>
import Products from './products/Products.vue'
	export default {
    components: {
      'my-products': Products
    }
  }
</script>

<style lang="scss" scoped>
	//
</style>
