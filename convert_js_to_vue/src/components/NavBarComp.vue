<template>
  <div>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <!-- image -->
          <img src="https://i.postimg.cc/mDpgN4xL/Etsy-Item-Listing-Photo.png" alt="Logo" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../views/HomeView.vue">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../views/AboutView.vue">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../views/ProductsView.vue">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../views/AdminView.vue">ADMIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../views/CheckoutView.vue">CHECKOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../views/ContactView.vue">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>