<template>
    <div>


        <main class="container-fluid">
            <div id="heading">ADMIN:</div>
            <div id="sorting_search_add_button">
              <div id="modal-add">
                <button type="button" class="btn btn-primary" id="button_add_car" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD NEW CAR</button>
      
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Create Your Product:</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                            <div class="modal-body">
                              <p>Car model:</p>
                                <input type="text" class="modal-input" id="input_1" placeholder="Tesla..">
                                <p>Image:</p>
                                <input type="text" class="modal-input" id="input_2" placeholder="Insert image..">
                                <p>Description:</p>
                                <input type="text" class="modal-input" id="input_3" placeholder="It's a car on 4 wheels..">
                                <p>Price:</p>
                                <input type="text" class="modal-input" id="input_4" placeholder="R20 000...">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-dark" id="new_product">Add New Product</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                
                <!-- sorting button -->
                <div id="sorting_button">
                  <button id="sort_button">SORT ITEMS</button>
                </div>
                
      
                <!-- search buttons -->
                <div id="search_result">
                  
                </div>
                
                <div id="reload">
                  <i class="bi bi-arrow-clockwise" onclick="reload()" id="reload_button"></i>
                </div>
                
                <!-- search results -->
                <div id="filter_results">
                  <div class="dropdown">
                      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="filter"><i class="bi bi-funnel" id="filter_b"> FILTER </i></button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" id="price_filter_1">Price (Lowest - Highest)</a></li>
                        <li><a class="dropdown-item" href="#" id="price_filter_2">Price (Highest - Lowest)</a></li>
                      </ul>
                    </div>
                </div>
              </div>
              
              <div id="bottom_spacing_2">
                
      
              </div>
              
              <!-- table -->
              <div id="admin_table">
              <table class="container-fluid-2">
                <thead id="headings_for_table">
                  <th id="id" class="list">ID:</th>
                  <th id="car_model_width" class="list">Car Model:</th>
                  <th id="image" class="list">Image:</th>
                  <th class="list">Price:</th>
                        <th id="edit" class="list">Edit:</th>
                        <th class="list">Delete:</th>
                    </thead>
                    <tbody id="product_list">
                        <tr class="list" v-for="featured_products in featured_products" :key="featured_products.ID">
                            <td id="product_item_id" class="list">{{ featured_products.id }}</td>
                            <td id="product_car_model" class="list">{{ featured_products.car_model }}</td>
                            <td id="product_image" class="list"><img id="images_of_cars_in_javascript" v-bind:src="featured_products.image_url" class="card-img-top img-fluid" v-bind:alt="featured_products.car_model"></td>
                            <td id="product_prices" class="list">{{ featured_products.price }}</td>
                            <td id="product_edit_button" class="list">
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary list" data-bs-toggle="modal" data-bs-target="#staticBackdrop">EDIT</button>
                            
                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Your Product:</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                          <p>Car model:</p>
                                          <input type="text" class="modal-input" placeholder="Tesla..">
                                          <p>Image:</p>
                                          <input type="text" class="modal-input" placeholder="Insert image..">
                                          <p>Description:</p>
                                          <input type="text" class="modal-input" placeholder="It's a car on 4 wheels..">
                                          <p>Price:</p>
                                          <input type="text" class="modal-input" placeholder="R20 000...">
                                      </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" id="edit_products_button">Edit</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            </td>
                            <td id="product_delete_"><button type="button" class="btn btn-primary" id="delete_button" @click="deleteButton(event)">DELETE</button></td>
                         </tr>
                    </tbody>
                </table>
                <div id="bottom_spacing"></div>
            </div>
      
      
        </main>



    </div>
  </template>
  
  <script>
  // displaying products
  export default {
    methods: {
      async deleteButton(event) {
        return this.featured_products.splice(event, 1);
      }
    },
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