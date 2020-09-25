<template>
  <Navbar/>
  <a href="https://www.bundesliga.com/en/bundesliga" target="_blank" title="Bundesliga official website">
    <img class="my-4" src="../assets/bundesliga.png" width="200" alt="Bundesliga">
  </a>
  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <TopScorers :leagueId="leagueId" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
import TopScorers from '@/components/TopScorers.vue';
export default {
    name: 'Bundesliga',
    components:{
        Navbar,
        Standing,
        TopScorers,
    },
    data(){
      return{
        leagueId: 78,
        promotions: [[0,1,2,3], [], [4], [5], [], [], [15,16,17]],
      }
    },
}
      
</script>

<style>


</style>