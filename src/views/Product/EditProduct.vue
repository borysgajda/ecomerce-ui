<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edytuj produkt</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="product">
          <!-- Form for editing product details -->
          <div class="form-group">
            <label> Kategoria</label>
            <select class="form-control" v-model="product.categoryId" required>
              <option
                v-for="category of categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Nazwa</label>
            <input type="text" class="form-control" v-model="product.name" required />
          </div>
          <div class="form-group">
            <label>Opis</label>
            <input
              type="text"
              class="form-control"
              v-model="product.description"
              required
            />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input type="text" class="form-control" v-model="product.imageURL" required />
          </div>
          <div class="form-group">
            <label>Cena</label>
            <input type="number" class="form-control" v-model="product.price" required />
          </div>
          <button
            type="button"
            class="btn btn-secondary border-radius"
            @click="editProduct"
          >
            Wyślij
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      product: null,
      id: null,
    };
  },
  props: ['categories', 'products'],
  methods: {
    async editProduct() {
      console.log('product', this.product);
      // Send a POST request to update the product
      await axios
        .post(`${this.baseURL}product/update/${this.id}`, this.product)
        .then(() => {
          // Emit an event to fetch updated data
          this.$emit('fetchData');
          // Redirect to the AdminProduct page
          this.$router.push({ name: 'AdminProduct' });
          // Show a success message using SweetAlert
          swal({
            text: 'produkt został zaktualizowany',
            icon: 'success',
          });
        })
        .catch((err) => console.log('err', err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    // Find the product with the specified id
    this.product = this.products.find((product) => product.id == this.id);
  },
};
</script>

<style scoped>
.border-radius {
  border-radius: 20px;
}
</style>
