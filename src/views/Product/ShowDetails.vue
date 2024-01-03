<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" class="img-fluid" />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">{{ product.price }} zł</h6>
        <p>
          {{ product.description }}
        </p>
        <button
          class="btn btn-outline-dark radius mr-3 p-1 py-0"
          @click="addToWishlist()"
        >
          Ulubione <i class="bi bi-heart"></i>
        </button>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Ilość</span>
            </div>
            <input type="number" class="form-control" v-model="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button class="btn button-container" type="button" @click="addToCart">
              Dodaj do koszyka
            </button>
          </div>
        </div>
        <div class="features pt-3">
          <h5><strong>Cechy</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      product: {},
      category: {},
      quantity: 1,
      wishListString: 'Dodaj do listy życzeń',
    };
  },
  props: ['products', 'categories'],
  methods: {
    addToWishlist() {
      if (!this.token) {
        swal({
          text: 'Proszę zaloguj się aby dodać produkt do listy życzeń',
          icon: 'error',
        });
        return;
      }
      axios
        .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
          id: this.product.id,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishListString = 'Produkt dodany do listy życzeń';
            swal({
              text: 'Produkt dodany do listy życzeń',
              icon: 'success',
            });
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    },

    addToCart() {
      if (!this.token) {
        swal({
          text: 'Proszę zaloguj się aby dodać produkt do koszyka',
          icon: 'error',
        });
        return;
      }

      axios
        .post(`${this.baseURL}/cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status == 201) {
            swal({
              text: 'Produkt dodany do koszyka',
              icon: 'success',
            });
            this.$emit('fetchData');
          }
        })
        .catch((err) => console.log('err', err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem('token');
  },
};
</script>
<style>
.category {
  font-weight: 400;
}

#wishlist-button {
  background: none !important;
  border-radius: 20px;
}

.button-container {
  background-color: #343a40 !important;
  color: #fff;
  border-radius: 20px;
}
.radius {
  border-radius: 30px;
  padding: 10px !important;
}
</style>
