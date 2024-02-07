<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Dodaj nową kategorie</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form>
          <!-- Input field for category name -->
          <div class="form-group">
            <label>Nazwa</label>
            <input type="text" class="form-control" v-model="categoryName" required />
          </div>
          <!-- Input field for category description -->
          <div class="form-group">
            <label>Opis</label>
            <input type="text" class="form-control" v-model="description" required />
          </div>
          <!-- Input field for category image URL -->
          <div class="form-group">
            <label>Image URL</label>
            <input type="url" class="form-control" v-model="imageURL" required />
          </div>
          <!-- Button to add the category -->
          <button
            type="button"
            class="btn btn-secondary border-radius"
            @click="addCategory"
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
var axios = require('axios');
import swal from 'sweetalert';
export default {
  data() {
    return {
      categoryName: null,
      description: null,
      imageURL: null,
    };
  },
  methods: {
    // Function to add a new category
    async addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageURL,
      };
      const baseURL = 'http://localhost:8080/';
      // Send a POST request to create a new category
      await axios({
        method: 'post',
        url: baseURL + 'category/create',
        data: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          // Show a success message using SweetAlert
          swal({
            text: 'Kategoria dodana',
            icon: 'success',
            closeOnClickOutside: false,
          });
        })
        .catch((err) => console.log(err));
    },
  },
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
