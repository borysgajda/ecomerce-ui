<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12 col-12 pt-3 pt-md-0 right-column">
        <header class="font-weight-bold mb-2" style="font-size: larger">
          REGULAMIN SKLEPU
        </header>
        <div class="mt-3 font-italic">
          <span>1. Warunki ogólne</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa ac
            mi suscipit varius.
          </p>
          <span>2. Zasady zakupów</span>
          <p>
            Integer euismod, nisl ac ullamcorper efficitur, odio turpis euismod neque, ut
            accumsan tortor justo vel risus.
          </p>
          <span>3. Płatności</span>
          <p>
            Curabitur sit amet est sit amet justo cursus auctor. Sed ut arcu vel arcu
            vulputate vestibulum.
          </p>
          <span>4. Dostawa</span>
          <p>
            Suspendisse potenti. Sed eu accumsan odio, ut fermentum justo. Nam ac ultrices
            turpis.
          </p>
          <span>5. Reklamacje i zwroty</span>
          <p>
            Phasellus consequat, felis in posuere accumsan, orci justo vestibulum purus,
            ut ultricies arcu justo at metus.
          </p>
          <span>6. Ochrona danych osobowych</span>
          <p>
            Maecenas bibendum massa sed dolor euismod, ut aliquet purus gravida. Fusce
            convallis, elit eu euismod pellentesque, est massa imperdiet risus, ac
            venenatis libero justo id urna.
          </p>
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
<style>
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
