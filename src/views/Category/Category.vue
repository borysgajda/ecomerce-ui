<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Nasze kategorie</h3>
        <router-link
          id="add-category"
          :to="{ name: 'addCategory' }"
          v-show="$route.name == 'Category'"
        >
          <button class="btn btn-secondary border-radius" style="float: right">
            Dodaj kategorie
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 d-flex mt-5"
      >
        <CategoryBox :category="category"></CategoryBox>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from '@/components/Category/CategoryBox.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Category',
  components: { CategoryBox },
  props: ['categories'],
  data() {
    return {
      baseURL: 'https://limitless-lake-55070.herokuapp.com',
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
.border-radius {
  border-radius: 20px;
}
</style>
