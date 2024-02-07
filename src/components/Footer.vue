<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-3 col-6">
          <!-- Footer section 1 -->
          <!-- Section with company logo and links -->
          <ul style="list-style-type: none" class="footer-link">
            <li class="text-light font-weigh-bold pb-2">
              <!-- Link to home page -->
              <router-link :to="{ name: 'home' }">
                <img id="logo" class="footer-brand" src="../assets/logos.png" />
              </router-link>
            </li>
            <li class="text-light font-weigh-bold pb-2">
              <!-- Link to ask a question page -->
              <router-link :to="{ name: 'Ask' }" class="custom-link">
                <i class="bi bi-envelope"></i><a class="ml-1"> Zadaj pytanie </a>
              </router-link>
            </li>
            <li class="text-light font-weigh-bold pb-2">Sklep stacjonarny</li>
            <li>
              <!-- Company address -->
              <a class="font-weight-light">
                <i class="bi bi-geo-alt"></i>
              </a>
              <a class="font-weight-light"> Ul. Krótka 14 </a>
              <a class="font-weight-light"> 35-103 Rzeszów </a>
            </li>
            <li>
              <!-- Company phone number -->
              <a class="font-weight-light">
                <i class="bi bi-telephone"></i> 123-456-789
              </a>
            </li>
            <li>
              <!-- Company working hours -->
              <a class="font-weight-light"> (Pon - Pt) 8:00 - 17:00 </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <!-- Footer section 2 -->
          <!-- Section with company information links -->
          <ul style="list-style-type: none" class="footer-link">
            <li class="text-light font-weigh-bold pb-2">Firma</li>
            <li>
              <!-- Link to about us page -->
              <router-link :to="{ name: 'About' }" class="custom-link">
                <a class="font-weight-light"> O nas </a>
              </router-link>
            </li>
            <li>
              <!-- Link to company data page -->
              <router-link :to="{ name: 'CompanyData' }" class="custom-link">
                <a class="font-weight-light"> Dane firmy </a>
              </router-link>
            </li>
            <li>
              <!-- Link to career page -->
              <router-link :to="{ name: 'Carier' }" class="custom-link">
                <a class="font-weight-light"> Kariera </a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <!-- Footer section 3 -->
          <!-- Section with shopping-related links -->
          <ul style="list-style-type: none" class="footer-link">
            <li class="text-light font-weigh-bold pb-2">Zakupy</li>
            <li>
              <!-- Link to terms and conditions page -->
              <router-link :to="{ name: 'Statue' }" class="custom-link">
                <a class="font-weight-light"> Regulamin </a>
              </router-link>
            </li>
            <li>
              <!-- Link to delivery page -->
              <router-link :to="{ name: 'Delivery' }" class="custom-link">
                <a class="font-weight-light"> Dostawa </a>
              </router-link>
            </li>
            <li>
              <!-- Link to payment page -->
              <router-link :to="{ name: 'Payment' }" class="custom-link">
                <a class="font-weight-light"> Płatność </a>
              </router-link>
            </li>
            <li>
              <!-- Link to privacy policy page -->
              <router-link :to="{ name: 'Privacy' }" class="custom-link">
                <a class="font-weight-light"> Polityka prywatności </a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <!-- Footer section 4 -->
          <!-- Section with newsletter subscription and social media links -->
          <ul style="list-style-type: none" class="footer-link">
            <li>
              <!-- Text prompting to subscribe to the newsletter -->
              <a class="font-weight-light">
                Subskrybuj newsletter i bądź na bieżąco z nowościami i wyjątkowymi
                okazjami
              </a>
            </li>
            <li>
              <!-- Button to open newsletter subscription modal -->
              <button
                class="btn btn-secondary mb-0"
                data-toggle="modal"
                data-target="#newsletterModal"
              >
                NEWSLETTER
              </button>
            </li>
            <li>
              <!-- Social media links -->
              <a class="font-weight-light">
                <a href="https://www.facebook.com" target="_blank" class="custom-link">
                  <i class="bi bi-facebook ml-2"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" class="custom-link">
                  <i class="bi bi-youtube ml-2"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="custom-link">
                  <i class="bi bi-instagram ml-2"></i>
                </a>
              </a>
            </li>
          </ul>
        </div>
        <!-- Bootstrap Modal -->
        <!-- Modal for newsletter subscription -->
        <div
          class="modal fade"
          id="newsletterModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="newsletterModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="newsletterModalLabel">
                  Subskrybuj newsletter
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <!-- Input field for entering email address -->
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="newsletterEmail"
                      placeholder="Podaj swój adres email"
                    />
                  </div>
                  <!-- Button to subscribe to the newsletter -->
                  <button
                    type="button"
                    class="btn btn-secondary mb-0"
                    @click="subscribeNewsletter"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';

export default {
  props: ['baseURL'],
  data() {
    return {
      newsletterEmail: '',
    };
  },
  methods: {
    subscribeNewsletter() {
      const email = this.newsletterEmail;
      axios
        .post(`${this.baseURL}subscribe-newsletter`, { email })
        .then((res) => {
          if (res.status === 200) {
            this.subscriptionMessage = 'Twój e-mail już jest zapisany do newslettera.';
          } else {
            this.subscriptionMessage = 'Dziękujemy za subskrypcję naszego newslettera!';
          }
          // Show success message using SweetAlert library
          swal({
            text: this.subscriptionMessage,
            icon: 'success',
          });
        })
        .catch((err) => {
          console.error('Błąd podczas subskrypcji newslettera:', err);
          this.subscriptionMessage = 'Dziękujemy za subskrypcję naszego newslettera!';
          // Show success message even if there was an error
          swal({
            text: this.subscriptionMessage,
            icon: 'success',
          });
        });
    },
  },
};
</script>

<style>
footer {
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-top: 100px;
  background-color: #111111;
  font-size: 16px;
}
a {
  text-decoration: none;
}
.footer-link {
  color: #ddd !important;
}
.footer-link a {
  color: #7e7e7e !important;
}

li {
  padding-bottom: 10px;
}
.footer-brand {
  height: 100%;
  width: 100%;
}
.custom-link {
  color: inherit !important;
  text-decoration: none;
}
</style>
