<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-sticky-top bg-success py-3 h5">
        <div class="container">

            <a class="navbar-brand text-white font-weight-bolder " href="#">FootScore</a>

            <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#main-menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="main-menu">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item text-white px-4">
                        <router-link class="nav-link text-white" to="/">Home</router-link> 
                    </li>
                    
                    <li class="nav-item dropdown px-4">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        Leagues
                        </a>
                        <div class="dropdown-menu text-left bg-light">
                            <router-link class="dropdown-item" to="/bundesliga">
                                <img class="mr-2" src="https://www.countryflags.io/de/flat/32.png" width="26" alt="Germany">
                                Bundesliga
                            </router-link> 

                            <router-link class="dropdown-item" to="/ligue-1">
                                <img class="mr-2" src="https://www.countryflags.io/fr/flat/32.png" width="26" alt="France">
                                Ligue 1
                            </router-link> 

                            <router-link class="dropdown-item" to="/premier-league">
                                <img class="mr-2" src="https://flagcdn.com/w40/gb-eng.webp" width="26" alt="England">
                                Premier League
                            </router-link> 

                            <router-link class="dropdown-item" to="/primera-division">
                                <img class="mr-2" src="https://www.countryflags.io/es/flat/32.png" width="26" alt="Spain">
                                Primera Division
                            </router-link> 

                            <router-link class="dropdown-item" to="/serie-a">
                                <img class="mr-2" src="https://www.countryflags.io/it/flat/32.png" width="26" alt="Italy">
                                Serie A
                            </router-link>

                            <div class="dropdown-divider"></div>

                            <router-link class="dropdown-item" to="/eredivisie">
                                <img class="mr-2" src="https://www.countryflags.io/nl/flat/32.png" width="26" alt="Netherlands">
                                Eredivisie
                            </router-link> 

                            <router-link class="dropdown-item" to="/portugal">
                                <img class="mr-2" src="https://www.countryflags.io/pt/flat/32.png" width="26" alt="Portugal">
                                Primeira Liga
                            </router-link> 
                            <router-link class="dropdown-item" to="/championship">
                                <img class="mr-2" src="https://flagcdn.com/w40/gb-eng.webp" width="26" alt="England">
                                Championship
                            </router-link> 

                            <router-link class="dropdown-item" to="/ekstraklasa">
                                <img class="mr-2" src="https://www.countryflags.io/pl/flat/32.png" width="26" alt="Poland">
                                Ekstraklasa
                            </router-link> 

                            <router-link class="dropdown-item" to="/russian-premier-league">
                                <img class="mr-2" src="https://www.countryflags.io/ru/flat/32.png" width="26" alt="Russia">
                                Russian Premier League
                            </router-link> 
                        </div>
                    </li>

                    <li class="nav-item text-white px-4">
                        <router-link class="nav-link text-white" to="/about">About</router-link> 
                    </li>


                    

                </ul>
            </div>
        </div>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: 'Navbar',
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
@media(min-width:768px){
    .dropdown-menu {
        display: block;
        visibility: hidden;
        opacity:0;transform: 
        translateY(50px);
        transition:.5s ease all;
    }
    .dropdown-menu.show {
        display: block;
        visibility: visible;
        opacity:1;transform: 
        translateY(0px);
        transition:.5s ease all;
    }
}

</style>