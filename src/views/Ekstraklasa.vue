<template>
  <Navbar/>
  
  <a href="https://ekstraklasa.org/" target="_blank" title="Ekstraklasa Official Website">
    <img class="my-4" src="../assets/ekstraklasa.jpg" width="300" alt="Ekstraklasa">
  </a>
  
  <Standing :promotions="promotions" :leagueId="leagueId"/>
  <TopScorers :leagueId="leagueId" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
import TopScorers from '@/components/TopScorers.vue';
export default {
    name: 'Ekstraklasa',
    components:{
        Navbar,
        Standing,
        TopScorers,
    },
    data(){
      return{
        leagueId: 106,
        promotions: [[], [0], [], [1,2], [], [], [15]],
      }
    },
   
}
</script>

<style>

</style>