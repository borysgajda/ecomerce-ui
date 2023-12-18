<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12 col-12 pt-3 pt-md-0 right-column">
        <header class="font-weight-bold mb-2" style="font-size: larger">O NAS</header>
        <div class="mt-3 font-italic">
          Firma The Stone Shop to jeden z wiodących polskich importerów i dystrybutorów
          kamienia naturalnego. Zajmujemy się handlem kamieniem od ponad ćwierćwiecza,
          oferując bogaty wybór granitów, marmurów, łupków, kwarcyty, wapieni,
          trawertynów, piaskowców. Nasza oferta obejmuje różnorodne produkty, takie jak
          płytki, mozaiki, stopnice, parapety, panele, forniry, palisady, kostki,
          krawężniki, bloki, pasy i płyciny. Importujemy kamienie z różnych zakątków
          świata, dostosowując się do indywidualnych zamówień naszych klientów.
          Współpracujemy zarówno z inwestorami prywatnymi, jak i instytucjonalnymi,
          firmami wykonawczymi, kamieniarzami, architektami oraz projektantami wnętrz i
          krajobrazu. Regularnie uczestniczymy w międzynarodowych targach, co pozwala nam
          na bieżące dostosowanie oferty do światowych trendów. Nasze materiały są
          dostępne w 19 salonach firmowych, a także online w naszym sklepie internetowym
          „thestoneshop.pl”.
        </div>
        <div class="mt-3"></div>

        <div>
          <ul style="list-style-type: none" class="pl-0 mt-3">
            <li>
              <a class="font-weight-light">
                <i class="bi bi-geo-alt"></i>
              </a>
              <a class="font-weight-light"> Ul. Krótka 14 </a>
              <a class="font-weight-light"> 35-103 Rzeszów </a>
            </li>
            <li>
              <a class="font-weight-light">
                <i class="bi bi-telephone"></i> 123-456-789
              </a>
            </li>
            <li>
              <a class="font-weight-light"> (Pon - Pt) 8:00 - 17:00 </a>
            </li>
          </ul>
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
