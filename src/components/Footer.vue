<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none" class="footer-link">
            <li class="text-light font-weigh-bold pb-2">
              <router-link :to="{ name: 'home' }">
                <img id="logo" class="footer-brand" src="../assets/logos.png" />
              </router-link>
            </li>
            <li class="text-light font-weigh-bold pb-2">
              <router-link :to="{ name: 'Ask' }" class="custom-link">
                <i class="bi bi-envelope"></i><a class="ml-1"> Zadaj pytanie </a>
              </router-link>
            </li>
            <li class="text-light font-weigh-bold pb-2">Sklep stacjonarny</li>
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
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none" class="footer-link">
            <li class="text-light font-weigh-bold pb-2">Firma</li>
            <li>
              <router-link :to="{ name: 'About' }" class="custom-link">
                <a class="font-weight-light"> O nas </a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'CompanyData' }" class="custom-link">
                <a class="font-weight-light"> Dane firmy </a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Carier' }" class="custom-link">
                <a class="font-weight-light"> Kariera </a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none" class="footer-link">
            <li class="text-light font-weigh-bold pb-2">Zakupy</li>
            <li>
              <router-link :to="{ name: 'Statue' }" class="custom-link">
                <a class="font-weight-light"> Regulamin </a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Delivery' }" class="custom-link">
                <a class="font-weight-light"> Dostawa </a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Payment' }" class="custom-link">
                <a class="font-weight-light"> Płatność </a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Privacy' }" class="custom-link">
                <a class="font-weight-light"> Polityka prywatności </a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none" class="footer-link">
            <li>
              <a class="font-weight-light">
                Subskrybuj newsletter i bądź na bieżąco z nowościami i wyjątkowymi
                okazjami
              </a>
            </li>
            <li>
              <button
                class="btn btn-secondary mb-0"
                data-toggle="modal"
                data-target="#newsletterModal"
              >
                NEWSLETTER
              </button>
            </li>
            <li>
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
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Podaj swój adres email"
                    />
                  </div>
                  <button type="submit" class="btn btn-secondary mb-0">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

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
