<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">{{ category.categoryName }}</h4>
        <h5 style="font-weight: 300; color: #686868">{{ msg }}</h5>
      </div>
    </div>

    <div class="row">
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
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);
    this.product = this.products.filter((product) => product.categoryId == this.id);
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
