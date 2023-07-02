<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3">
        <img id="logo" src="../assets/logos.png" class="logo-signup" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 justify-content-center d-flex pt-3">
        <div id="signup" class="flex-item border">
          <h2 class="pt-4 pl-4">Stwórz konto</h2>
          <form @submit="signup" class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label for="Email">Email</label>
              <input type="email" v-model="email" class="form-control" required />
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label>Imie</label>
                  <input type="text" v-model="firstName" class="form-control" required />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Nazwisko</label>
                  <input type="text" v-model="lastName" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="Password">Hasło</label>
              <input type="password" v-model="password" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="Password">Potwierdź hasło</label>
              <input
                type="password"
                v-model="confirmPassword"
                class="form-control"
                required
              />
            </div>

            <button class="btn btn-primary mt-2">Stwórz konto</button>
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
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        };
        console.log('user', user);
        await axios
          .post(`${this.baseURL}/user/signup`, user)
          .then(() => {
            this.$router.replace('/');
            swal({
              text: 'Użytkownik pomyślnie zarejestrowany, proszę zaloguj się',
              icon: 'success',
            });
          })
          .catch((err) => console.log('err', err));
      } else {
        swal({
          text: 'hasła nie pasują do siebie',
          icon: 'error',
        });
      }
    },
  },
};
</script>
<style scoped>
.logo-signup {
  width: 200px;
}
.btn-primary {
  background-color: #f0c14b;
  color: #000;
}

@media screen and (min-width: 992px) {
  #signup {
    width: 40%;
  }
}
</style>
