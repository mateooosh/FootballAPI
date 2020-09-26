<template>
  <Navbar/>

  <a href="https://eng.premierliga.ru/" target="_blank" title="Russian Premier League Official Website">
    <img class="my-4" src="../assets/russia.png" width="250" alt="Russian Premier League">
  </a>

  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <TopScorers :leagueId="leagueId" />
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
import TopScorers from '@/components/TopScorers.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Russia',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Footer,
    },
    data(){
      return{
        leagueId: 235,
        promotions: [[0], [1], [], [2,3], [], [], [12,13,14,15]],
      }
    },
    
}
</script>

<style>

</style>