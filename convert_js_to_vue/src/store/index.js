import { createStore } from 'vuex'

const dataUrl = "https://keenofourie.github.io/Json-Server-for-JSeomp-products/index.json";


export default createStore({
  state: {
    featured_products: null,
  },
  getters: {
  },
  mutations: {
    setFeaturedproducts(state, featured_products) {
      state.featured_products = featured_products
    }
  },
  actions: {
    async fetchFeaturedproducts(context) {
      try {
        let res = await fetch(dataUrl)
        console.log(res);
        let {featured_products} = await res.json()
        console.log(featured_products);
        context.commit('setFeaturedproducts', featured_products)
      } catch (e) {
        console.log(e.message);
      }
    }
},
  modules: {
  }
})