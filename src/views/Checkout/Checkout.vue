<template>
  <div class="div_class">
    <h3>Zostaniesz przekierowany na stronę płatności</h3>
    <div class="alert alert-secondary">
      <p>
        Za 5 sekund zostaniesz przekierowany na stronę płatności. Abym mógł zrealizować
        zamówienie, musisz dokonać płatności.
      </p>
      <p class="mb-2">
        Dokonując płatności użyj numeru karty 4242 4242 4242 4242 i wpisz losową datę oraz
        cvv (3 cyfry).
      </p>
      <a>W momencie braku przekierowania proszę kliknąć przycisk poniżej.</a>
    </div>

    <button class="btn btn-secondary border-radius" @click="goToCheckout">
      Płatność
    </button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      stripeAPIToken:
        'pk_test_51NIFMrBap5w1SKNo1hymdztW82gDaI7g0JR9FIXJbnBePvM7UMOFpAzNQJvsnF6EyiUhy1M61oniSFp2cavlm8iu00BEgcS6v9',
      stripe: '',
      token: null,
      checkoutBodyArray: [],
    };
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Checkout',
  methods: {
    getAllItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((response) => {
          if (response.status == 200) {
            let products = response.data;
            for (let i = 0; i < products.cartItems.length; i++) {
              this.checkoutBodyArray.push({
                price: products.cartItems[i].product.price,
                quantity: products.cartItems[i].quantity,
                productName: products.cartItems[i].product.name,
                productId: products.cartItems[i].product.id,
              });
            }
          }
        })
        .catch((err) => console.log(err));
    },
    goToCheckout() {
      console.log('checkoutBodyArray', this.checkoutBodyArray);
      axios
        .post(`${this.baseURL}order/create-checkout-session`, this.checkoutBodyArray)
        .then((response) => {
          localStorage.setItem('sessionId', response.data.sessionId);
          console.log('session', response.data);
          this.stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
          });
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.stripe = window.Stripe(this.stripeAPIToken);
    this.getAllItems();
    setTimeout(() => {
      this.goToCheckout();
    }, 5000);
  },
};
</script>
>
<style scoped>
.alert {
  width: 50%;
}

.div_class {
  margin-top: 5%;
  margin-left: 30%;
}

.checkout_button {
  background-color: #5d3dec;
  margin: 10px;
}
.border-radius {
  border-radius: 20px;
}
</style>
