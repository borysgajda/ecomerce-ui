<template>
  <div>
    <nav class="navbar-wrapper navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img id="logo" src="../assets/logos.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline ml-auto mr-auto" @submit.prevent="searchProducts">
          <div class="input-group">
            <input
              size="100"
              type="text"
              class="form-control"
              v-model="searchQuery"
              placeholder="Szukaj"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                id="search-button-navbar"
                @click="performSearch"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link text-light dropdown-toggle"
              href="#"
              id="navbarAccount"
              data-toggle="dropdown"
            >
              Wyszukaj
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarAccount">
              <router-link class="dropdown-item" :to="{ name: 'home' }"
                >Główna strona
              </router-link>
              <router-link class="dropdown-item" :to="{ name: 'Product' }"
                >Produkty
              </router-link>
              <router-link class="dropdown-item" :to="{ name: 'CategoryNoAdmin' }"
                >Kategorie
              </router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link mr-4 dropdown-toggle text-light"
              href="#"
              id="navbarAccount"
              data-toggle="dropdown"
            >
              Konto
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarAccount">
              <router-link v-if="token" class="dropdown-item" :to="{ name: 'WishList' }"
                >Lista życzeń
              </router-link>
              <router-link v-if="!token" class="dropdown-item" :to="{ name: 'Signup' }"
                >Zarejestruj się
              </router-link>
              <router-link v-if="!token" class="dropdown-item" :to="{ name: 'Signin' }">
                Zaloguj się
              </router-link>
              <a class="dropdown-item" v-if="token" href="#" @click="signout"
                >Wyloguj się
              </a>
            </div>
          </li>
          <li class="nav-item">
            <div id="cart" style="position: relative" class="mr-3">
              <router-link class="text-light" :to="{ name: 'Cart' }">
                <span id="nav-cart-count">{{ cartCount }}</span>
                <i class="fa fa-shopping-cart" style="font-size: 36px"></i>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="categories-wrapper">
      <ul class="categories-list">
        <li v-for="(category, index) in categories" :key="index" class="list-group-item">
          <router-link :to="{ name: 'ListProducts', params: { id: category.id } }">
            {{ category.categoryName }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  props: ['cartCount', 'categories', 'products'],
  data() {
    return {
      token: null,
      searchQuery: '',
      searchResults: [],
    };
  },
  methods: {
    signout() {
      localStorage.removeItem('token');
      this.token = null;
      swal({
        text: 'Zostałeś wylogowany, do zobaczenia!',
        icon: 'success',
      });
      this.$emit('resetCartCount');
      this.$router.push({ name: 'home' });
    },
    performSearch() {
      this.$router.push({
        name: 'Product',
        query: { prod: this.searchQuery.toLowerCase() },
      });
    },
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name && to.params.id !== from.params.id) {
        this.$router.go();
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
  },
};
</script>
<style scoped>
#logo {
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link {
  color: rgba(255, 255, 255);
}
#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 10px;
}
.navbar-wrapper {
  background-color: #111111;
}
.categories-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111111;
  padding-bottom: 5px;
}

.categories-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.list-group-item {
  display: inline-block;
  background-color: #111111 !important;
  color: #fff;
  padding: 10px;
  border-right: 1px solid #fff;
}
.list-group-item ::v-deep a {
  text-decoration: none !important;
  color: #fff !important;
}
.categories-list .list-group-item:last-child {
  border-right: none;
}
.form-control {
  margin-left: 170px;
}
</style>
