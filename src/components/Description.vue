<template>
  <div class="col-12 pt-3 mt-5 mx-auto">
    <div class="header">
      <div class="line"></div>
      <h3>Stone Shop - z nami kupisz najtaniej</h3>
      <div class="line"></div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="item ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-filter-square icon"></i>
            <p class="title">SZEROKA OFERTA</p>
          </div>

          <a
            >Największy wybór kamieni naturalnych. Kolekcje z całego świata. Bezpośredni
            importer.</a
          >
        </div>
      </div>
      <div class="item ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-bookmark-check icon"></i>
            <p class="title">WIEDZA I DOŚWIADCZENIE</p>
          </div>

          <a
            >Ogólnokrajowa sieć punktów handlowych. Fachowe doradztwo. 30 lat na rynku.</a
          >
        </div>
      </div>
      <div class="item ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-truck icon"></i>
            <p class="title">PEWNA DOSTAWA</p>
          </div>

          <a
            >Bezpieczne przesyłki paletowe. Dostawy na terenie całego kraju. Możliwy
            odbiór osobisty w wybranych magazynach.</a
          >
        </div>
      </div>
      <div class="ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-wallet2 icon"></i>
            <p class="title">WYGODNE PŁATNOŚCI</p>
          </div>

          <a
            >Szybkie płatności online. Wysyłki za pobraniem. Płatność przy odbiorze
            osobistym.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Description',
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
}

.item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
}

.title-icon {
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 20px;
  transform: scale(1.5); /* Skalowanie o 50% */
}

.title {
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
