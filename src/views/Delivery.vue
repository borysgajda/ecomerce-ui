<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12 col-12 pt-3 pt-md-0 right-column">
        <header class="font-weight-bold mb-2" style="font-size: larger">DOSTAWA</header>
        <div class="mt-3 font-italic">
          <span>I. Odbiór osobisty</span>
          <p>
            Bezpłatny odbiór osobisty można zrealizować w jednym z poniższych magazynów
            firmowych:
          </p>
          <ul>
            <li>
              Bystra k. Gdańska, ul. Gdańska 2 (godziny otwarcia: pon.-pt.: 9.00 - 17.00)
            </li>
            <li>
              Olsztyn, ul. Lubelska 36 A (godziny otwarcia: pon. - pt.: 9.00 - 17.00)
            </li>
            <li>
              Grudziądz, ul. Rzemieślnicza 12 (godziny otwarcia: pon.-pt.: 8.00 - 18.00,
              sob.: 8.00 - 14.00)
            </li>
            <li>
              Iława, ul. Platynowa 1 (godziny otwarcia: pon.-pt.: 8.00 - 17.00, sob.: 9.00
              - 14.00)
            </li>
          </ul>
          <p>
            Podczas składania zamówienia wybrać jeden z w/w magazynów jako miejsce
            odbioru.
          </p>

          <span>II. Przesyłki paletowe</span>
          <p>Parametry i ceny:</p>
          <ul>
            <li>waga przesyłki do 400 kg - cena 215 zł</li>
            <li>waga przesyłki od 401 do 1000 kg - cena 250 zł</li>
          </ul>
          <p>
            Cena uzależniona jest nie tylko od wagi przesyłki ale również od ilości
            użytych palet. Powyższe ceny dotyczą jednej palety. Dla kolejnych palet ceny
            naliczane są analogicznie.
          </p>
          <p>
            Do przesyłek doliczany jest koszt użytych palet - cena jednej palety 30 zł
          </p>
          <p>
            Przesyłki paletowe stosujemy dla wszystkich towarów kruchych np. kamienie
            naturalne, płytki ceramiczne, ceramika łazienkowa.
          </p>

          <span>III. Przesyłki kurierskie</span>
          <p>Parametry i ceny:</p>
          <ul>
            <li>waga przesyłki - do 30 kg</li>
            <li>rozmiar najdłuższego boku przesyłki - do 70 cm</li>
            <li>cena przesyłki - 40 zł</li>
          </ul>
          <p>
            Przesyłki kurierskie stosujemy jedynie dla towarów, które nie są kruche np.
            chemia budowlana.
          </p>
          <p>
            W przypadku płytek kamiennych i ceramicznych przesyłką kurierską wysyłamy
            tylko pojedyncze sztuki - jako próbki.
          </p>

          <span>IV. Przesyłki zagraniczne</span>
          <p>
            Nasze towary wysyłamy również za granicę. Koszty takich dostaw są kalkulowane
            indywidualnie. Cena uzależniona jest od wagi przesyłki oraz miejsca dostawy.
            Do wyceny potrzebna jest informacja o rodzaju i ilości wybranego towaru oraz
            adres dostawy (wystarczy kod pocztowy). Aby uzyskać wycenę dostawy
            zagranicznej prosimy o kontakt z nami.
          </p>

          <span>V. Odbiór przesyłek</span>
          <p>
            Paczki nadawane są jako ubezpieczone. Przy odbiorze należy koniecznie
            sprawdzić stan przesyłki w obecności kuriera. Jeżeli paczka będzie nosiła
            ślady uszkodzenia informacja o tym musi znaleźć się na liście przewozowym przy
            odbiorze przesyłki. W takim przypadku należy również spisać protokół szkodowy.
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
