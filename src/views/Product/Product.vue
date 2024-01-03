<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Nasze produkty</h3>
        <router-link :to="{ name: 'AddProduct' }" style="float: right">
          <button class="btn" v-show="$route.name == 'AdminProduct'">
            Dodaj produkt
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="product of products"
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
};
</script>
