<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12 col-12 pt-3 pt-md-0 right-column">
        <!-- Header section -->
        <header class="font-weight-bold mb-2" style="font-size: larger">PŁATNOŚĆ</header>
        <div class="mt-3 font-italic">
          <!-- Section I -->
          <span>I. Przy odbiorze w salonie</span>
          <p>
            Zapłata kartą lub gotówką przy odbiorze osobistym w jednym z poniższych
            salonów firmowych:
          </p>
          <ul>
            <li>
              Olsztyn, ul. Lubelska 36 A (godziny otwarcia: pon. - pt.: 9.00 - 17.00,
              sob.: 9.00 - 14.00)
            </li>
            <li>
              Iława, ul. Platynowa 1 (godziny otwarcia: pon.-pt.: 8.00 - 17.00, sob.: 9.00
              - 14.00)
            </li>
            <li>
              Grudziądz, ul. Rzemieślnicza 12 (godziny otwarcia: pon.-pt.: 8.00 - 18.00,
              sob.: 8.00 - 14.00)
            </li>
            <li>
              Gdańsk - Bystra, ul. Gdańska 2 (godziny otwarcia: pon.-pt.: 9.00 - 17.00)
            </li>
          </ul>

          <!-- Section II -->
          <span>II. Przedpłata - Przelew na konto przed realizacją zamówienia</span>
          <p>
            Wpłaty należy dokonać na nr konta podany w e-mailu wysłanym przez nas po
            złożeniu zamówienia. W tytule przelewu należy podać nr zamówienia. Płatności
            należy dokonać w ciągu 72 godzin od momentu złożenia zamówienia. Po upływie
            tego terminu zamówienie zostanie anulowane. Po pozytywnej weryfikacji
            płatności zamówienie zostanie skierowane do realizacji. Klient zostanie o tym
            poinformowany za pośrednictwem poczty elektronicznej.
          </p>

          <!-- Section III -->
          <span>III. Płatność elektroniczna - System Przelewy24</span>
          <p>
            System szybkich płatności realizowany jest za pośrednictwem systemu
            Przelewy24. Zapłaty za zamówienie można dokonać za pośrednictwem szybkiego
            przelewu elektronicznego lub z wykorzystaniem karty kredytowej. Realizując tę
            formę płatności Klient zostaje przekierowany na stronę serwisu właściwego dla
            wybranej formy płatności, umożliwiającego dokonanie płatności. Płatność za
            pośrednictwem systemu Przelewy24 powinna być dokonana w ciągu 72 godzin od
            momentu złożenia zamówienia. W przeciwnym wypadku zamówienie zostanie
            anulowane. Informacja o anulowaniu zostanie wysłana na adres mailowy Klienta
            podany podczas rejestracji.
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
