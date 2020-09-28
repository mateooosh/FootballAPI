<template>
  <Navbar/>

  <a href="https://www.laliga.com/en-GB" target="_blank" title="La Liga Official Website">
    <img class="my-4" src="../assets/la-liga.png" width="250" alt="Primera Division">
  </a>

  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <Matches :leagueId="leagueId" :matchesInRound="10"/>
  <TopScorers :leagueId="leagueId" />
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
import TopScorers from '@/components/TopScorers.vue';
import Matches from '@/components/Matches.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'PrimeraDivision',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Matches,
        Footer
    },
    data(){
      return{
        leagueId: 140,
        promotions: [[0,1,2,3], [], [4], [5], [], [], [17,18,19]],
      }
    },
    
}
</script>

<style>

</style>