<template>
  <Navbar/>
  
  <a href="https://www.efl.com/" target="_blank" title="Championship Official Website">
    <img class="my-4" src="../assets/championship.png" width="180" alt="Championship">
  </a>
  
  <Standing v-if="isVisible" :data="standings" :promotions="promotions"/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Standing from '@/components/Standing.vue';
export default {
    name: 'Championship',
    components:{
        Navbar,
        Standing
    },
    data(){
      return{
        isVisible: false,
        leagueId: 2016,
        standings: {},
        promotions: [[], [], [], [], [0,1], [2,3,4,5], [21,22,23]],
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

        for(let i=0; i<this.standings.standings[0].table.length; i++){
            if(this.standings.standings[0].table[i].team.name.includes(" FC"))
                this.standings.standings[0].table[i].team.name = this.standings.standings[0].table[i].team.name.substr(0, this.standings.standings[0].table[i].team.name.length-3);
        }

        for(let i=0; i<this.standings.standings[1].table.length; i++){
            if(this.standings.standings[1].table[i].team.name.includes(" FC"))
                this.standings.standings[1].table[i].team.name = this.standings.standings[0].table[i].team.name.substr(0, this.standings.standings[1].table[i].team.name.length-3);
        }

        for(let i=0; i<this.standings.standings[2].table.length; i++){
            if(this.standings.standings[2].table[i].team.name.includes(" FC"))
                this.standings.standings[2].table[i].team.name = this.standings.standings[0].table[i].team.name.substr(0, this.standings.standings[2].table[i].team.name.length-3);
        }

        this.isVisible = true;
      })
    }
}
</script>

<style>

</style>