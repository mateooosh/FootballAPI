<template>
<footer class="page-footer font-small">

  <!-- Footer Links -->
  <div class="container text-center text-md-left pt-3">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto text-center">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Top 5 Leagues</h5>

        <ul class="list-unstyled">
          <li>
            <router-link to="/bundesliga">Bundesliga</router-link>
          </li>
          <li>
            <router-link to="/ligue-1">Ligue 1</router-link>
          </li>
          <li>
            <router-link to="/premier-league">Premier League</router-link>
          </li>
          <li>
            <router-link to="/primera-division">Primera Division</router-link>
          </li>
          <li>
            <router-link to="/serie-a">Serie A</router-link>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto text-center">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Other Leagues</h5>

        <ul class="list-unstyled">
          <li>
            <router-link to="/championship">Championship</router-link>
          </li>
          <li>
            <router-link to="/ekstraklasa">Ekstraklasa</router-link>
          </li>
          <li>
            <router-link to="/division-1">Division 1</router-link>
          </li>
          <li>
            <router-link to="/eredivisie">Eredivisie</router-link>
          </li>
          <li>
            <router-link to="/portugal">Primeira Liga</router-link>
          </li>
          <li>
            <router-link to="/russian-premier-league">Russian Premier League</router-link>
          </li>
        </ul>

      </div> 
      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto text-center">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact</h5>

        <ul class="list-unstyled">
          <li class="my-2">
            <p>
              <i class="fas fa-home"></i> Cracow, PL
            </p>
          </li>
          <li class="my-2">
            <p>
              <i class="fas fa-envelope"></i> mateusz20111@op.pl
            </p>
          </li>
          <li class="my-2">
            <p>
              <i class="fas fa-phone"></i> 533 790 025
            </p>
          </li>
          
        </ul>

      </div> 
    </div>

  </div>
  <div class="footer-copyright text-center py-3 mt-3">
    <span class="text-muted">All Rights Reserved © 2020 Copyright: 
      <a class="font-weight-bold" href="#">MB Software, Inc.</a> 
    </span>
  </div>

</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
p{
  margin:0;
  color: #6c757d;
}
a{
    text-decoration: none;
    color: #6c757d;

    &:hover{
        color: #3f4347;
    }
}

footer{
    border-top: 1px solid rgb(230, 230, 230);
    letter-spacing: 1px;
    background-color:rgb(241, 241, 241);
}

.footer-copyright{
  border-top: 1px solid #e6e6e6;
  background-color:rgb(231, 231, 231) ;
}
</style>