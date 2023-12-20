<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12 col-12 pt-3 pt-md-0 right-column">
        <header class="font-weight-bold mb-2" style="font-size: larger">
          Polityka Prywatności
        </header>
        <div class="mt-3 font-italic">
          Polityka Prywatności określa zasady ochrony prywatności Osób korzystających z
          Portalu "The Stone Shop" i zarejestrowanych Użytkowników, a w szczególności
          zasady ochrony danych osobowych i zasady przechowywania i dostępu do informacji
          na urządzeniach za pomocą Plików Cookies. Polityka prywatności określa również
          zasady ochrony prywatności osób niekorzystających z Portalu, ale pozostających w
          stosunkach prawnych z "The Stone Shop" w związku z prowadzeniem działalności
          handlowej i współpracą z kontrahentami. "The Stone Shop" dokłada wszelkich
          starań w celu zapewnienia odpowiedniej prywatności i ochrony danych osobowych.
          1. DEFINICJE Fanpage – strony internetowe prowadzone przez "The Stone Shop" na
          portalu https://www.facebook.com/ pod adresem:
          https://www.facebook.com/TheStoneShop/ Osoba korzystająca z Portalu – osoba
          fizyczna, która korzysta z Portalu. Pliki Cookies – drobne pliki tekstowe
          umieszczane na dysku twardym komputera lub innego urządzenia elektronicznego –
          trwale lub tymczasowo – podczas odwiedzin strony internetowej, powiadamiające
          serwer, że w przeszłości wysyłano już z tego samego urządzenia zapytanie o dany
          adres strony internetowej. Portal – internetowy serwis pod adresem
          https://www.thestoneshop.com/ Polityka prywatności – niniejszy dokument
          regulujący ochronę prywatności. RODO – rozporządzenie Parlamentu Europejskiego i
          Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z
          przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
          oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
          (Dz.Urz. UE L 119, s.1). "The Stone Shop" – "THE STONE SHOP" SPÓŁKA Z
          OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ z siedzibą w [MIEJSCOWOŚĆ], ul. [ULICA] [NUMER],
          [KOD POCZTOWY] [MIEJSCOWOŚĆ], numer KRS: [NUMER KRS], NIP: [NUMER NIP], której
          akta rejestrowe prowadzi Sąd Rejonowy w [MIEJSCOWOŚĆ], [NUMER] Wydział
          Gospodarczy Krajowego Rejestru Sądowego. Urządzenie – urządzenie, za pomocą
          którego Użytkownik i Osoba korzystająca z Portalu korzystają z Portalu, w
          szczególności komputer, telefon komórkowy, tablet. Użytkownik – osoba fizyczna,
          zarejestrowana na Portalu, posiadająca konto Użytkownika. ...
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
