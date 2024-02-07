<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Nasze produkty</h3>
        <!-- Link to AddProduct component -->
        <router-link
          :to="{ name: 'AddProduct', query: { prod: $route.query.prod } }"
          style="float: right"
        >
          <button
            class="btn btn-secondary border-radius"
            v-show="$route.name == 'AdminProduct'"
          >
            Dodaj produkt
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <!-- Loop through products and render ProductBox component -->
      <div
        v-for="product in localProd"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 d-flex mt-5"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '../../components/Category/ProductBox.vue';

export default {
  components: { ProductBox },
  props: ['products'],
  data() {
    return {
      localProd: null,
    };
  },
  watch: {
    // Watch for changes in the route query parameter 'prod'
    $route(to, from) {
      if (to.query.prod !== from.query.prod) {
        this.filterProducts();
      }
    },
  },
  mounted() {
    // Call filterProducts method on component mount
    this.filterProducts();
  },
  methods: {
    // Filter products based on the route query parameter 'prod'
    filterProducts() {
      const queryProd = this.$route.query.prod
        ? this.$route.query.prod.toLowerCase()
        : '';
      this.localProd = queryProd
        ? this.products.filter((product) =>
            product.name.toLowerCase().includes(queryProd)
          )
        : this.products;
      console.log(this.localProd);
    },
  },
};
</script>

<style scoped>
.border-radius {
  border-radius: 20px;
}
</style>
