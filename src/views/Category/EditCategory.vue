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
          <div class="form-group">
            <label>Nazwa</label>
            <input
              type="text"
              class="form-control"
              v-model="category.categoryName"
              required
            />
          </div>
          <div class="form-group">
            <label>Opis</label>
            <input
              type="text"
              class="form-control"
              v-model="category.description"
              required
            />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input
              type="text"
              class="form-control"
              v-model="category.imageUrl"
              required
            />
          </div>
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
      delete this.category['products'];
      console.log('category', this.category);
      await axios
        .post(`${this.baseURL}category/update/${this.id}`, this.category)
        .then(() => {
          this.$emit('fetchData');
          this.$router.push({ name: 'Category' });
          swal({
            text: 'kateogria została zaktualizowana',
            icon: 'success',
          });
        })
        .catch((err) => console.log('err', err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);
  },
};
</script>
<style scoped>
.border-radius {
  border-radius: 20px;
}
</style>
