<template>
  <Navbar/>
  
  <a href="https://eredivisie.nl/en-us/" target="_blank" title="Eredivisie Official Website">
    <img class="my-4" src="../assets/eredivisie.png" width="300" alt="Eredivisie">
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
    name: 'Eredivisie',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Footer
    },
    data(){
      return{
        leagueId: 88,
        promotions: [[0], [1], [], [2,3], [], [], [15,16,17]],
      }
    },
}
</script>

<style>

</style>