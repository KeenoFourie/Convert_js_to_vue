<template>
    <div>

        <section id="products">
            <div id="heading_products">FEATURED PRODUCTS:</div>
            <div id="product_list-2">
                <div id="products_page_container" v-for="featured_products in featured_products" :key="featured_products.ID">
                    <div class="card" style="width: 18rem;">
                        <img v-bind:src="featured_products.image_url" class="card-img-top img-fluid" v-bind:alt="featured_products.car_model">
                        <div class="card-body" id="body_of_card">
                            <h5 class="card-car_title">{{ featured_products.car_model.slice(0, 18)+" ..." }}</h5>
                            <p class="card-text">{{ featured_products.price }}</p>
                            <div id="buttons_products_display">
                                <button class="btn btn-primary" id="cart_add" onclick='addToCheckout({index})'>+ Cart</button>
                                <button class="btn btn-primary" id="view_more">View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="space"></div>
        </section>
        
    </div>
</template>

<script>
  export default {
  computed: {
      featured_products() {
          return this.$store.state.featured_products
      },
  },
      mounted() {
          this.$store.dispatch('fetchFeaturedproducts')
      }
};
</script>

<style scoped>

</style>