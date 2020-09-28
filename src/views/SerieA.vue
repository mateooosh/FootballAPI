<template>
  <Navbar/>

  <a href="http://www.legaseriea.it/en" target="_blank" title="Serie A official website">
    <img class="my-4" src="../assets/serie-a.png" width="200" alt="Serie A">
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
    name: 'SerieA',
    components:{
        Navbar,
        Standing,
        TopScorers,
        Matches,
        Footer,
    },
    data(){
      return{
        leagueId: 135,
        promotions: [[0,1,2,3], [], [4], [5], [], [], [15,16,17]],
      }
    },
}
      
    

</script>

<style>


</style>