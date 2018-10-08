<template>
	<div class="row">
    <my-product class="mt-3" v-for="product in products" @delete-product="deleteProduct(product)" v-bind:key="product.id" :product="product" :authUser="authUser">

    </my-product>
	</div>
</template>

<script>
import Product from './Product.vue'
	export default {
    data() {
      return {
        products: [],
      }
    },

    computed: {
      authUser() {
        return this.$auth.getAuthUser()
      }
    },

    components: {
      'my-product': Product
    },

    created() {
      this.$http.get('api/products')
      .then(res => {
        this.products = res.body
      })
    },

    methods: {
      deleteProduct(product) {
        this.$swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this product!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        })
        .then((result) => {
          if (result.value) {
            this.$http.delete('api/products/' + product.id)
            .then(res => {
              let index = this.products.indexOf(product)
              this.products.splice(index, 1)
              this.$swal({
                title: "Proof!",
                text: "The product was deleted.",
                type: "success",
              })
            })
          } else {
            this.$swal({
              title: 'Cancelled',
              text: 'The product was not deleted :)',
              type: 'error',
            });
          }
        });
      }
    },


  }
</script>
