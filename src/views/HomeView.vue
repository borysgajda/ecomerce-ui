<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(image, index) in galleryImages" :key="index" class="swiper-slide">
            <img :src="image" alt="Gallery Image" class="img-fluid" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
    <div class="container">
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Najlepsze kategorie</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.categorySize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]" />
        </div>
      </div>
    </div>
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Najlepsze produkty</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.productSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from '../components/Category/CategoryBox';
import ProductBox from '../components/Category/ProductBox.vue';
import Swiper from 'swiper/bundle';
import photo2 from '@/assets/photo2.jpg';
import photo3 from '@/assets/photo3.jpg';
import photo4 from '@/assets/photo4.gif';
import photo6 from '@/assets/photo6.jpg';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { ProductBox, CategoryBox },
  props: ['categories', 'products'],
  data() {
    return {
      categorySize: 0,
      productSize: 0,
      galleryImages: [photo2, photo3, photo4, photo6],
    };
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length);
    this.productSize = Math.min(9, this.products.length);
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
    });
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-slide {
  max-height: 500px;
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  display: none;
}

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  font-size: 18px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: '›';
  font-family: 'swiper-icons';
}

.swiper-button-prev::after {
  content: '‹';
}
</style>
