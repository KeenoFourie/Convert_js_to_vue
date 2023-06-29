<template>
    <div>

        <section id="products">
            <div id="heading_products">FEATURED PRODUCTS:</div>
            <div id="product_list-2">
                <div id="products_page_container" v-for="featured_products in data" :key="featured_products.ID">
                    <div class="card" style="width: 18rem;">
                        <img v-bind:src="featured_products.image_url" class="card-img-top img-fluid" v-bind:alt="featured_products.car_model">
                        <div class="card-body" id="body_of_card">
                            <h5 class="card-car_title">{{ featured_products.car_model.slice(0, 18)+" ..." }}</h5>
                            <p class="card-text">{{ featured_products.price }}</p>
                            <button class="btn btn-primary" id="cart_add" onclick='addToCheckout({index})'>+ Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="space"></div>
        </section>
        
    </div>
</template>

<script>

// displaying products
export default {
    data() {
        return {
            data: []
        }
    },
    methods: {
        async fetchData() {
            const res = await fetch("https://keenofourie.github.io/Json-Server-for-JSeomp-products/index.json");
            let parsedData = await res.json()
            this.data = parsedData.featured_products;
        }
    },
    mounted() {
        this.fetchData()
    }
}

</script>

<style scoped>

</style>