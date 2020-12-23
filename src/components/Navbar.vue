<template>
    <nav class="navbar navbar-expand-md navbar-dark py-4 h5 text-white">
        <div class="container">

            <a class="navbar-brand text-white font-weight-bolder f-25" href="#">Footscore</a>

            <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#main-menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="main-menu">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item px-4">
                        <router-link class="nav-link text-white" to="/">Home</router-link> 
                    </li>
                    
                    <li class="nav-item dropdown px-4">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        Leagues
                        </a>
                        <div class="dropdown-menu text-left dropdown-bg-color">
                            <router-link class="dropdown-item" to="/bundesliga">
                                <img class="mr-2" src="https://www.countryflags.io/de/flat/32.png" width="26" alt="Germany">
                                Bundesliga
                            </router-link> 

                            <router-link class="dropdown-item" to="/ligue-1">
                                <img class="mr-2" src="https://www.countryflags.io/fr/flat/32.png" width="26" alt="France">
                                Ligue 1
                            </router-link> 

                            <router-link class="dropdown-item" to="/premier-league">
                                <!-- <img class="mr-2" src="https://flagcdn.com/w40/gb-eng.webp" width="26" alt="England"> -->
                                <img class="mr-2" src="https://www.countryflags.io/gb/flat/32.png" width="26" alt="Great Britain">
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

                            <router-link class="dropdown-item" to="/championship">
                                <img class="mr-2" src="https://www.countryflags.io/gb/flat/32.png" width="26" alt="Great Britain">
                                Championship
                            </router-link> 

                            <router-link class="dropdown-item" to="/ekstraklasa">
                                <img class="mr-2" src="https://www.countryflags.io/pl/flat/32.png" width="26" alt="Poland">
                                Ekstraklasa
                            </router-link> 

                            <router-link class="dropdown-item" to="/division-1">
                                <img class="mr-2" src="https://www.countryflags.io/pl/flat/32.png" width="26" alt="Poland">
                                Division 1
                            </router-link>

                            <router-link class="dropdown-item" to="/eredivisie">
                                <img class="mr-2" src="https://www.countryflags.io/nl/flat/32.png" width="26" alt="Netherlands">
                                Eredivisie
                            </router-link> 

                            <router-link class="dropdown-item" to="/portugal">
                                <img class="mr-2" src="https://www.countryflags.io/pt/flat/32.png" width="26" alt="Portugal">
                                Primeira Liga
                            </router-link> 
                            
                            <router-link class="dropdown-item" to="/russian-premier-league">
                                <img class="mr-2" src="https://www.countryflags.io/ru/flat/32.png" width="26" alt="Russia">
                                Russian Premier League
                            </router-link> 

                            
                        </div>
                    </li>

                    <li class="nav-item px-4">
                        <router-link class="nav-link nav-font-color text-white" to="/about">About</router-link> 
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
nav{
    margin:0;
}
a{
    padding: 0 1.5 rem;
    img{
        padding-bottom: 4px;
    }
}

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

.nav-bg-color{
    // background-color: #3aafa9;
    background:none;
}

.dropdown-bg-color{
    background-color: #ebebeb;
}

.f-25{
    font-size: 25px;
    letter-spacing: 1px;
}

.dropdown-menu{
    a:hover{
        background-color: #cfcfcf;
    }
}

</style>