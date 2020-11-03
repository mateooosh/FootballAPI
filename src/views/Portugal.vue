<template>
  <Navbar/>
  
  <a href="https://www.ligaportugal.pt/en/homepage/" target="_blank" title="Primeira Liga Official Website">
    <img class="my-4" src="../assets/portugal.png" width="180" alt="Portugal">
  </a>

  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <Matches :leagueId="leagueId" :matchesInRound="9"/>
  <TopScorers :leagueId="leagueId" />
  <Footer/>
  <Background/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
import TopScorers from '@/components/TopScorers.vue';
import Matches from '@/components/Matches.vue';
import Footer from '@/components/Footer.vue';
import Background from '@/components/Background.vue';
export default {
    name: 'Portugal',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Matches,
        Footer,
        Background
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