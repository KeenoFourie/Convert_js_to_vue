<template>
    <div>
        <div class="container-fluid">
            <div id="checkout_content">
                <div id="products_page_container" v-for="featured_products in data" :key="featured_products.ID">
                    <div class="card" style="width: 18rem;" id="card_checkout">
                        <img id="car_pics" v-bind:src="featured_products.image_url" class="card-img-top img-fluid" v-bind:alt="featured_products.car_model">
                        <div class="card-body" id="body_of_card">
                            <h5 class="card-car_title">{{featured_products.car_model.slice(0, 18)+" ..."}}</h5>
                            <p class="card-text">{{featured_products.price}}</p>
                        </div>
                    </div>
            </div>
                <!-- <div id="thanks_for_buyng">
                    <div id="reload">
                            <i class="bi bi-x-circle" onclick="reload()" id="close_button"></i>
                        </div>
                        <p>THANKS FOR YOUR PURCHASE. IT WILL BE ATTENDED TO SOON.</p>
                        <p>YOUR PURCHASE WILL COST R549,890</p>
                        <p><button onclick="reload()" id="pay">PAY</button></p>
                    </div> -->
            </div>
            <div id="button_checkout">
              <button id="checkout_button">PURCHASE</button>
              <button id="delete_cart_item">CLEAR ALL</button>
            </div>
          </div>
          
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>