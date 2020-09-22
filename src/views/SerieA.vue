<template>
  <Navbar/>
  

  <a href="http://www.legaseriea.it/en" target="_blank" title="Serie A Official Website">
    <img class="my-4" src="../assets/serie-a.png" width="170" alt="Serie A">
  </a>
  <Standing v-if="isVisible" :data="standings" :promotions="promotions"/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
export default {
    name: 'SerieA',
    components:{
        Navbar,
        Standing
    },
    data(){
      return{
        isVisible: false,
        leagueId: 2019,
        standings: {},
        promotions: [[0,1,2,3], [], [4], [5], [], [], [17,18,19]],
      }
    },

    mounted(){
      // fetch standing data
      fetch(`https://api.football-data.org/v2/competitions/${this.leagueId}/standings`, {headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.standings = response;
        this.isVisible = true;
      })
    }
}
</script>

<style>

</style>