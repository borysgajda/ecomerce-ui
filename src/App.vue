<template>
  <!-- Navbar component with props and event listener -->
  <Navbar
    :cartCount="cartCount"
    :categories="categories"
    :products="products"
    @resetCartCount="resetCartCount"
  />

  <!-- Router view with conditional rendering and props -->
  <router-view
    v-if="categories && products"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  >
  </router-view>

  <!-- Description component -->
  <Description />

  <!-- Footer component with prop -->
  <Footer :baseURL="baseURL" />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer';
import Description from './components/Description';
import axios from 'axios';

export default {
  components: { Navbar, Footer, Description },
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      // Fetch categories data from API
      await axios
        .get(this.baseURL + 'category/')
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log('err', err));

      // Fetch products data from API
      await axios
        .get(this.baseURL + 'product/')
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log('err', err));

      // Fetch cart data if token is available
      if (this.token) {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log('err', err));
      }
    },
    resetCartCount() {
      // Reset cart count
      this.cartCount = 0;
    },
  },
  mounted() {
    // Get token from local storage and fetch data on component mount
    this.token = localStorage.getItem('token');
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
