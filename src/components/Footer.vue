<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-3 col-6"></div>
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li class="text-light font-weigh-bold pb-2">Skontaktuj sie z nami</li>
            <li>
              <a class="footer-link font-weight-light" href="#">
                Pon - Pt 8:00 - 18:30
              </a>
            </li>
            <li>
              <a class="footer-link font-weight-light" href="mailto:name@email.com">
                email: name@email.com
              </a>
            </li>
            <li>
              <a class="footer-link font-weight-light" href="#"> telefon: 123 456 789 </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li class="text-light font-weigh-bold pb-2">Nasz sklep</li>
            <li>
              <a class="footer-link font-weight-light" href="#"> Sklep stacjonarny </a>
            </li>
            <li><a class="footer-link font-weight-light" href="#"> Ul. Krótka 14 </a></li>
            <li>
              <a class="footer-link font-weight-light" href="#"> 35-103 Rzeszów </a>
            </li>
            <li>
              <a class="footer-link font-weight-light" href="#">
                Pon - Pt 8:00 - 18:30
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6"></div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
footer {
  margin-top: 100px;
  background-color: #232f3e;
  font-size: 16px;
}
a {
  text-decoration: none;
}
.footer-link {
  color: #ddd;
}
li {
  padding-bottom: 10px;
}
</style>
