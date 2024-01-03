<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="conatiner">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flext-item border">
          <h2 class="pt-4 ml-4">Zaloguj się</h2>
          <form @submit="signin" class="form-group pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>Email </label>
              <input v-model="email" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Hasło</label>
              <div class="input-group">
                <input
                  :type="passwordVisibility ? 'text' : 'password'"
                  v-model="password"
                  class="form-control"
                />
                <div class="input-group-append">
                  <span class="input-group-text" @click="togglePasswordVisibility">
                    <i :class="passwordVisibility ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                  </span>
                </div>
              </div>
            </div>
            <button class="btn btn-secondary mt-2 py-0 border-radius">Kontynuuj</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      email: null,
      password: null,
      passwordVisibility: false,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const body = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post(`${this.baseURL}user/signin`, body)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          swal({
            text: 'Logowanie pomyślne',
            icon: 'success',
          });
          this.$emit('fetchData');
          this.$router.push({ name: 'home' });
        })
        .catch((err) => console.log('err', err));
    },
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility;
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #f0c14b;
  color: black;
}

@media screen and (min-width: 992px) {
  #signin {
    width: 40%;
  }
}
.border-radius {
  border-radius: 20px;
}
</style>
