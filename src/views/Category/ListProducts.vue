<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <!-- Displaying category name -->
        <h4 class="pt-3">{{ category.categoryName }}</h4>
        <!-- Displaying message -->
        <h5 style="font-weight: 300; color: #686868">{{ msg }}</h5>
      </div>
    </div>

    <div class="row">
      <!-- Iterating over products and displaying ProductBox component -->
      <div
        v-for="product of product"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
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
  data() {
    return {
      id: null,
      category: {},
      product: [],
      msg: '',
    };
  },
  props: ['products', 'categories'],
  mounted() {
    // Getting category id from routing parameters
    this.id = this.$route.params.id;
    // Finding category with given id
    this.category = this.categories.find((category) => category.id == this.id);
    // Filtering products by categoryId
    this.product = this.products.filter((product) => product.categoryId == this.id);
    // Setting message based on the number of found products
    if (!this.product) {
      this.msg = 'Nie znaleziono produktów w tej kategorii';
    } else if (this.product.length === 1) {
      this.msg = 'Znaleziono tylko jeden produkt w tej kategorii';
    } else {
      this.msg = this.product.length + ' znalezionych produktów';
    }
  },
};
</script>
