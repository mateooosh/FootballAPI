<template>
  <Navbar/>

  <a href="https://www.ligue1.com/" target="_blank" title="Ligue 1 Official Website">
    <img class="my-4" src="../assets/ligue-1.png" width="200" alt="Ligue 1">
  </a>
  
  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <Matches :leagueId="leagueId" :matchesInRound="10"/>
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
    name: 'Ligue1',
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
        leagueId: 61, 
        promotions: [[0,1], [2], [3], [4], [], [], [17,18,19]],
      }
    },
}
</script>

<style>

</style>