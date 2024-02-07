<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edytuj kategorie</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="category">
          <!-- Input field for category name -->
          <div class="form-group">
            <label>Nazwa</label>
            <input
              type="text"
              class="form-control"
              v-model="category.categoryName"
              required
            />
          </div>
          <!-- Input field for category description -->
          <div class="form-group">
            <label>Opis</label>
            <input
              type="text"
              class="form-control"
              v-model="category.description"
              required
            />
          </div>
          <!-- Input field for category image URL -->
          <div class="form-group">
            <label>Image URL</label>
            <input
              type="text"
              class="form-control"
              v-model="category.imageUrl"
              required
            />
          </div>
          <!-- Button to edit the category -->
          <button
            type="button"
            class="btn btn-secondary border-radius"
            @click="editCategory"
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
      category: null,
      id: null,
    };
  },
  props: ['categories'],
  methods: {
    async editCategory() {
      // Remove the 'products' property from the category object
      delete this.category['products'];
      console.log('category', this.category);
      // Send a POST request to update the category
      await axios
        .post(`${this.baseURL}category/update/${this.id}`, this.category)
        .then(() => {
          // Emit an event to fetch updated data
          this.$emit('fetchData');
          // Redirect to the 'Category' route
          this.$router.push({ name: 'Category' });
          // Show a success message
          swal({
            text: 'kateogria została zaktualizowana',
            icon: 'success',
          });
        })
        .catch((err) => console.log('err', err));
    },
  },
  mounted() {
    // Get the category ID from the route parameters
    this.id = this.$route.params.id;
    // Find the category object with the matching ID
    this.category = this.categories.find((category) => category.id == this.id);
  },
};
</script>

<style scoped>
.border-radius {
  border-radius: 20px;
}
</style>
