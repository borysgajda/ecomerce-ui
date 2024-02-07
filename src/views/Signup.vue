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
            <!-- Email input -->
            <div class="form-group">
              <label for="Email">Email</label>
              <input type="email" v-model="email" class="form-control" required />
            </div>
            <!-- First name and last name inputs -->
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
            <!-- Password input -->
            <div class="form-group">
              <label for="Password">Hasło</label>
              <div class="input-group">
                <input
                  :type="passwordVisibility ? 'text' : 'password'"
                  v-model="password"
                  class="form-control"
                  required
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                    @click="togglePasswordVisibility('password')"
                  >
                    <i :class="passwordVisibility ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- Confirm password input -->
            <div class="form-group">
              <div class="input-group">
                <input
                  :type="passwordVisibility ? 'text' : 'password'"
                  v-model="confirmPassword"
                  class="form-control"
                  required
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                    @click="togglePasswordVisibility('confirmPassword')"
                  >
                    <i :class="passwordVisibility ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                  </span>
                </div>
              </div>
            </div>

            <button class="btn btn-secondary mt-2 mb-2 border-radius">
              Stwórz konto
            </button>
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
      passwordVisibility: false,
    };
  },
  methods: {
    async signup(e) {
      e.preventDefault();

      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;

      if (this.password === this.confirmPassword && passwordRegex.test(this.password)) {
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        };

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
          text:
            'Hasło nie spełnia wymagań: 8 znaków, jedna wielka litera, jeden znak specjalny',
          icon: 'error',
        });
      }
    },
    togglePasswordVisibility(inputField) {
      // Update the respective password visibility state based on the input field
      if (inputField === 'password') {
        this.passwordVisibility = !this.passwordVisibility;
      } else if (inputField === 'confirmPassword') {
        this.confirmPasswordVisibility = !this.confirmPasswordVisibility;
      }
    },
  },
};
</script>

<style scoped>
.logo-signup {
  width: 200px;
}

@media screen and (min-width: 992px) {
  #signup {
    width: 40%;
  }
}
.border-radius {
  border-radius: 20px;
}
</style>
