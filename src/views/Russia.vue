<template>
  <Navbar/>

  <a href="https://eng.premierliga.ru/" target="_blank" title="Russian Premier League Official Website">
    <img class="my-4" src="../assets/russia.png" width="250" alt="Russian Premier League">
  </a>

  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <Matches :leagueId="leagueId" :matchesInRound="8"/>
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
    name: 'Russia',
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
        leagueId: 235,
        promotions: [[0], [1], [], [2,3], [], [], [12,13,14,15]],
      }
    },
    
}
</script>

<style>

</style>