<template>
  <Navbar/>
  
  <a href="https://www.ligaportugal.pt/en/homepage/" target="_blank" title="Primeira Liga Official Website">
    <img class="my-4" src="../assets/portugal.png" width="180" alt="Portugal">
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
    name: 'Portugal',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Footer
    },
    data(){
      return{
        leagueId: 94,
        promotions: [[0,1], [2], [], [3,4], [], [], [15,16,17]],
      }
    },
}
</script>

<style>

</style>