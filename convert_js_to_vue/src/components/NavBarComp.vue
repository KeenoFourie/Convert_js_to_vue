<template>
  <div>
    <!-- navbar -->
    <nav id="nav_styling" class="navbar navbar-expand-lg bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <!-- image -->
          <img id="nav_image" src="https://i.postimg.cc/mDpgN4xL/Etsy-Item-Listing-Photo.png" alt="Logo" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/products">PRODUCTS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/admin">ADMIN</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/checkout">CHECKOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/contact">CONTACT US</router-link>
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
#nav_image {
  height: 5rem;
}
#nav_styling {
  box-shadow: 0px 0px 25px black;

}
.nav-link {
  color: rgba(0, 0, 0, 0.501);
  font-weight: bold;
}
.nav-link:hover {
  color: black
}
</style>