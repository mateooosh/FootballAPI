<template>
  <Navbar/>

  <a href="http://www.legaseriea.it/en" target="_blank" title="Serie A official website">
    <img class="my-4" src="../assets/serie-a.png" width="200" alt="Serie A">
  </a>
  
  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <TopScorers :leagueId="leagueId" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
import TopScorers from '@/components/TopScorers.vue';
export default {
    name: 'SerieA',
    components:{
        Navbar,
        Standing,
        TopScorers,
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