<template>
  <Navbar/>
  
  <a href="https://1liga.org/" target="_blank" title="Division 1 Official Website">
    <img class="my-4" src="../assets/division1.jpg" width="250" alt="Division 1">
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
    name: 'Division1',
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
        leagueId: 107,
        promotions: [[], [], [], [], [0,1], [2,3,4,5], [17]],
      }
    },
   
}
</script>

<style>

</style>