<template>
    <footer class="footer p-4 mt-5">
        <div class="container">
            <div>
                <div class="mb-1 font-weight-bolder">
                    Top 5 Leagues
                </div>
                <router-link class="px-3 d-block" to="/bundesliga">Bundesliga</router-link>
                <router-link class="px-3 d-block" to="/ligue-1">Ligue 1</router-link>
                <router-link class="px-3 d-block" to="/premier-league">Premier League</router-link>
                <router-link class="px-3 d-block" to="/primera-division">Primera Division</router-link>
                <router-link class="px-3 d-block" to="/serie-a">Serie A</router-link>

            </div>

            <div>
                <div class="mb-1 mt-3 font-weight-bolder">
                    Other Leagues
                </div>
                <router-link class="px-3 d-block" to="/championship">Championship</router-link> 
                <router-link class="px-3 d-block" to="/ekstraklasa">Ekstraklasa</router-link>
                <router-link class="px-3 d-block" to="/division-1">Division 1</router-link>
                <router-link class="px-3 d-block" to="/eredivisie">Eredivisie</router-link>
                <router-link class="px-3 d-block" to="/portugal">Primeira Liga</router-link>
                <router-link class="px-3 d-block" to="/russian-premier-league">Russian Premier League</router-link>

            </div>

            <div class="mt-5">
                <span class="text-muted">All Rights Reserved © 2020 Copyright: 
                    <a class="font-weight-bold" href="#">MB Software, Inc.</a> 
                </span>
            </div>
            
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
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
}
</style>