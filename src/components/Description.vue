<template>
  <div class="col-12 pt-3 mt-5 mx-auto">
    <div class="header">
      <div class="line"></div>
      <!-- Line separating the header -->
      <h3>Stone Shop - z nami kupisz najtaniej</h3>
      <!-- Header -->
      <div class="line"></div>
      <!-- Line separating the header -->
    </div>
    <div class="d-flex justify-content-center">
      <div class="item ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-filter-square icon"></i>
            <!-- Filter icon -->
            <p class="title">SZEROKA OFERTA</p>
            <!-- Section title -->
          </div>

          <a
            >Największy wybór kamieni naturalnych. Kolekcje z całego świata. Bezpośredni
            importer.</a
          >
          <!-- Section content -->
        </div>
      </div>
      <div class="item ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-bookmark-check icon"></i>
            <!-- Checkmark icon -->
            <p class="title">WIEDZA I DOŚWIADCZENIE</p>
            <!-- Section title -->
          </div>

          <a
            >Ogólnokrajowa sieć punktów handlowych. Fachowe doradztwo. 30 lat na rynku.</a
          >
          <!-- Section content -->
        </div>
      </div>
      <div class="item ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-truck icon"></i>
            <!-- Truck icon -->
            <p class="title">PEWNA DOSTAWA</p>
            <!-- Section title -->
          </div>

          <a
            >Bezpieczne przesyłki paletowe. Dostawy na terenie całego kraju. Możliwy
            odbiór osobisty w wybranych magazynach.</a
          >
          <!-- Section content -->
        </div>
      </div>
      <div class="ml-5 mr-5">
        <div class="content">
          <div class="title-icon">
            <i class="bi bi-wallet2 icon"></i>
            <!-- Wallet icon -->
            <p class="title">WYGODNE PŁATNOŚCI</p>
            <!-- Section title -->
          </div>

          <a
            >Szybkie płatności online. Wysyłki za pobraniem. Płatność przy odbiorze
            osobistym.</a
          >
          <!-- Section content -->
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
  transform: scale(1.5); /* Scaling by 50% */
}

.title {
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
