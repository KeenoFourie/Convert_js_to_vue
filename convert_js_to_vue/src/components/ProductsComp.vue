<template>
    <div>

        <section id="products">
            <div id="heading_products">FEATURED PRODUCTS:</div>
            <div id="product_list-2">
                <div id="products_page_container">
                    <div class="card" style="width: 18rem;">
                        <img id="car_pics" src="${product.image_url}" class="card-img-top img-fluid" alt="images" loading="lazy">
                        <div class="card-body" id="body_of_card">
                            <h5 class="card-car_title">${product.car_model.slice(0, 18)+" ..."}</h5>
                            <p class="card-text">${product.price}</p>
                            <button class="btn btn-primary" id="cart_add" onclick='addToCheckout(${index})'>+ Cart</button>
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
        
    }
</script>

<style scoped>

</style>