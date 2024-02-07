<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Twoja lista życzeń</h4>
      </div>
    </div>
    <div class="row">
      <!-- Iterating over each product in the products array -->
      <div
        v-for="product of products"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex mt-5"
      >
        <!-- Delete button for each product -->
        <a class="text-right mr-2" @click="deleteItem(product.id)"
          ><i class="bi bi-trash"></i>
        </a>
        <!-- Rendering the ProductBox component with the current product -->
        <ProductBox :product="product"> </ProductBox>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductBox from '../../components/Category/ProductBox.vue';

export default {
  components: { ProductBox },
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      token: null,
      products: null,
    };
  },
  methods: {
    // Fetches the wishlist data from the server
    fetchWishList() {
      axios
        .get(`${this.baseURL}wishlist/${this.token}`)
        .then((data) => {
          this.products = data.data;
        })
        .catch((err) => {
          console.log('err', err);
        });
    },
    // Deletes an item from the wishlist
    deleteItem(itemId) {
      axios
        .delete(`${this.baseURL}wishlist/delete/${itemId}?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            // Refreshes the page after successful deletion
            this.$router.go(0);
          }
        })
        .catch((err) => console.log('err', err));
    },
  },

  mounted() {
    // Retrieves the token from local storage
    this.token = localStorage.getItem('token');
    // Fetches the wishlist data on component mount
    this.fetchWishList();
  },
};
</script>
