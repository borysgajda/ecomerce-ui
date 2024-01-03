<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <header class="font-weight-bold mb-2" style="font-size: larger">
          Formularz Kontaktowy
        </header>
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <label for="message">Imię</label>
            <input
              class="form-control"
              id="message"
              rows="4"
              v-model="emailName"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Twój e-mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="senderEmail"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Kod pocztowy</label>
            <input
              class="form-control"
              id="message"
              rows="4"
              v-model="emailCode"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Telefon</label>
            <input
              class="form-control"
              id="message"
              rows="4"
              v-model="emailPhone"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Twoja wiadomość</label>
            <textarea
              class="form-control"
              id="message"
              rows="4"
              v-model="emailMessage"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-secondary border-radius">
            Wyślij wiadomość
          </button>
        </form>
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0 right-column">
        <header class="font-weight-bold mb-2" style="font-size: larger">
          Nasze sklepy
        </header>
        <div class="mt-3 font-italic">
          Jeśli chcesz dowiedzieć się więcej o towarach, złożonym zamówieniu, reklamacji,
          zwrocie lub masz inne pytania dotyczące naszej oferty skontaktuj się z wybranym
          sklepem.
        </div>
        <div class="mt-3">
          <router-link :to="{ name: 'home' }">
            <img id="logo" class="footer-brand" src="../assets/logos.png" />
          </router-link>
        </div>

        <div>
          <ul style="list-style-type: none" class="pl-0 mt-3">
            <li>
              <a class="font-weight-light">
                <i class="bi bi-geo-alt"></i>
              </a>
              <a class="font-weight-light"> Ul. Krótka 14 </a>
              <a class="font-weight-light"> 35-103 Rzeszów </a>
            </li>
            <li>
              <a class="font-weight-light">
                <i class="bi bi-telephone"></i> 123-456-789
              </a>
            </li>
            <li>
              <a class="font-weight-light"> (Pon - Pt) 8:00 - 17:00 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      product: {},
      category: {},
      quantity: 1,
      senderEmail: '',
      emailMessage: '',
      emailName: '',
      emailCode: '',
      emailPhone: '',
    };
  },
  props: ['products', 'categories'],
  methods: {
    sendEmail() {
      //kod do wysyłania e-maila
      const emailData = {
        senderEmail: this.senderEmail,
        emailMessage: this.emailMessage,
        emailName: this.emailName,
        emailCode: this.emailCode,
        emailPhone: this.emailPhone,
      };

      axios
        .post(`${this.baseURL}/send-email`, emailData)
        .then((res) => {
          if (res.status === 200) {
            swal({
              text: 'Wiadomość e-mail została wysłana.',
              icon: 'success',
            });
          }
        })
        .catch((err) => {
          console.error('Błąd podczas wysyłania e-maila:', err);
          swal({
            text: 'Wystąpił błąd podczas wysyłania e-maila.',
            icon: 'error',
          });
        });
    },
  },
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
.border-radius {
  border-radius: 20px;
}
</style>
