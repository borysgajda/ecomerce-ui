<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-6 col-12 pt-3 pt-md-0 right-column">
        <!-- Main section -->
        <header class="font-weight-bold mb-2" style="font-size: larger">
          DANE FIRMY
        </header>
        <div class="mt-3 font-italic">
          <!-- Company information -->
          <span>The Stone Shop Sp. z o.o.</span>
          <span>ul. Krótka 14, 35-103 Rzeszów</span>
          <span>NIP: 123-45-67-899</span>
          <span>REGON: 123456789</span>
          <span>KRS: 1122334455 Sąd Rejonowy w Rzeszowie, VIII Wydział Gospodarczy</span>
          <span>Kapitał Zakładowy: 1.500.000 zł (opłacony w całości)</span>
          <span>Nr konta: 11 2222 3333 4444 5555 6666 7777</span>
          <span>IBAN: PL11 2222 3333 4444 5555 6666 777</span>
          <span>BIC: PPAB PLPK</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
    };
  },
  props: ['products', 'categories'],
  methods: {},
};
</script>

<style scoped>
.font-italic {
  display: flex;
  flex-direction: column;
}

.category {
  font-weight: 400;
}

#wishlist-button {
  background-color: #b9b9b9;
}

#add-to-cart-button {
  background-color: #febd69;
}

.custom-link {
  color: inherit !important;
  text-decoration: none;
}

.right-column {
  border-left: 1px solid grey;
}
</style>
