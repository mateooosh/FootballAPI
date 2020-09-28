<template>
  <Navbar/>
  
  <a href="https://www.efl.com/" target="_blank" title="Championship Official Website">
    <img class="my-4" src="../assets/championship.png" width="180" alt="Championship">
  </a>
  
  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <Matches :leagueId="leagueId" :matchesInRound="12"/>
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
    name: 'Championship',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Matches,
        Footer
    },
    data(){
      return{
        leagueId: 40,
        promotions: [[], [], [], [], [0,1], [2,3,4,5], [21,22,23]],
      }
    },
   
}
</script>

<style>

</style>