<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Twój koszyk</h3>
      </div>
    </div>
    <div
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <img
          :src="cartItem.product.imageURL"
          alt=""
          class="w-100 card-image-top embed-responsive-item"
          style="object-fit: cover"
        />
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
            >
              {{ cartItem.product.name }}
            </router-link>
          </h6>

          <p class="mb-0 font-weight-bold" id="item-price">
            {{ cartItem.product.price }} zł za sztukę
          </p>
          <p class="mb-0" style="float: left">Ilość: {{ cartItem.quantity }}</p>
        </div>
        <p class="mb-0" style="float: right">
          Suma:
          <span class="font-weight-bold">
            {{ cartItem.product.price * cartItem.quantity }} zł
          </span>
        </p>
        <br />
        <a class="text-right ml-3 mr-2" @click="deleteItem(cartItem.id)"
          ><i class="bi bi-trash"></i>
        </a>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>
    <div class="total-cost pt-2 text-right">
      <h5>Suma : {{ totalCost.toFixed(2) }} zł</h5>
      <button type="button" class="btn btn-dark confirm" @click="checkout">
        Potwierdź zamówienie
      </button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      cartItems: [],
      token: null,
      totalCost: 0,
    };
  },
  methods: {
    listCartItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => console.log('err', err));
    },
    deleteItem(itemId) {
      axios
        .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => console.log('err', err));
    },

    checkout() {
      this.$router.push({ name: 'Checkout' });
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.listCartItems();
  },
};
</script>
<style scoped>
h4,
h5 {
  color: #484848;
  font-size: 700;
}
.confirm {
  border-radius: 20px;
}
.card-title ::v-deep a {
  text-decoration: none !important;
  color: #000 !important;
}
</style>
