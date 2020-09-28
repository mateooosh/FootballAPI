<template>
  <section class="container p-0" style="max-width: 700px;">
        
        <h1 class="mt-4 mb-3">Standings</h1>

        <!-- loading animation -->
        <div v-if="!totalStandingIsVisible" class="lds-dual-ring"></div>

        <!-- Total standing--> 
        <div v-if="totalStandingIsVisible" class="table-responsive padding-1">
        <!-- <div class="table-responsive px-1"> -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th class="pl-1 pr-1" colspan="3" scope="col">Club</th>
                        <th class="pl-1 pr-1" scope="col">MP</th>
                        <th class="pl-1 pr-1" scope="col">W</th>
                        <th class="pl-1 pr-1" scope="col">D</th>
                        <th class="pl-1 pr-1" scope="col">L</th>
                        <th class="pl-1 pr-1" scope="col">G</th>
                        <th class="pl-1 pr-1" scope="col">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(team, index) in standings.response[0].league.standings[0]" :key="index">
                        <td :class="{champions: promotions[0].includes(index), 
                                    'champions-quali': promotions[1].includes(index),
                                    'europa': promotions[2].includes(index),
                                    'europa-quali': promotions[3].includes(index),
                                    'promotion-table' : promotions[4].includes(index),
                                    'promotion-playoff-table' : promotions[5].includes(index),
                                    'relegation': promotions[6].includes(index)
                                    }"  
                            style="width: 30px;">{{index+1}}
                        </td>

                        <td class="p-2 text-center" style="width: 50px;">
                            <img :src=team.team.logo alt="logo" height="30">
                        </td>
                        <td class="pl-1 pr-1 text-left team-name">{{team.team.name}}</td>
                        <td class="pl-1 pr-1">{{team.all.played}}</td>
                        <td class="pl-1 pr-1">{{team.all.win}}</td>
                        <td class="pl-1 pr-1">{{team.all.draw}}</td>
                        <td class="pl-1 pr-1">{{team.all.lose}}</td>
                        <td class="pl-1 pr-1">{{team.all.goals.for}}:{{team.all.goals.against}}</td>
                        <td class="pl-2 pr-2">{{team.points}}</td>
                    </tr>
                </tbody>    
            </table>

            <div v-if="promotions[0].length" class="promotions container d-flex align-items-center">
                <div class="champions-league mr-2"></div>
                <div class="description">Promotion - Champions League (Group Stage)</div>
            </div>

            <div v-if="promotions[1].length" class="promotions container d-flex align-items-center">
                <div class="champions-league-quali mr-2"></div>
                <div class="description">Promotion - Champions League (Qualification)</div>
            </div>

            <div v-if="promotions[2].length" class="promotions container d-flex align-items-center">
                <div class="europa-league mr-2"></div>
                <div class="description">Promotion - Europa League (Group Stage)</div>
            </div>

            <div v-if="promotions[3].length" class="promotions container d-flex align-items-center">
                <div class="europa-league-quali mr-2"></div>
                <div class="description">Promotion - Europa League (Qualification)</div>
            </div>

            <div v-if="promotions[4].length" class="promotions container d-flex align-items-center">
                <div class="promotion mr-2"></div>
                <div class="description">Promotion </div>
            </div>

            <div v-if="promotions[5].length" class="promotions container d-flex align-items-center">
                <div class="promotion-playoff mr-2"></div>
                <div class="description">Promotion (Play Offs)</div>
            </div>

            <div v-if="promotions[6].length" class="promotions container d-flex align-items-center">
                <div class="relegation-description mr-2"></div>
                <div class="description">Relegation</div>
            </div>

            <div class="promotions container text-left">
                <div class="description">If teams finish on equal points at the end of the season, score difference will be the tie-breaker.</div>
            </div>
        </div>

  </section>
</template>

<script>
// leagues and ids
//140 - La Liga
//39 - BPL
//78 - Bundesliga
//135 - Serie A
//94 - Portugal
//88 - eredivisie
//61 - ligue 1
//40 - championship
//106 - ekstraklasa
//235 - Russia
//144 - Belgium
//107 - 1 liga 


export default {
    name: 'Standing',
    props:{
        promotions: Array,
        leagueId: Number,
    },
    mounted(){
      // fetch  STANDINGS
      fetch(`https://v3.football.api-sports.io/standings?league=${this.leagueId}&season=2020`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "63a2a98c6dfca66428d46b65d7f15aff"
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.standings = response;
        this.totalStandingIsVisible = true;
      })
      .catch(err => {
        console.log(err);
      });
 
      
    },
    data(){
        return{
            totalStandingIsVisible: false,  
            standings: {}
        }
    },
}
</script>

<style scoped lang="scss">

//variables
$champions: #004682;
$champions-quali:#1EA8EC;
$europa: #7f0029;
$europa-quali: #c71585;
$relegation: #bd0000;

.padding-1{
    padding-left: 1px;
    padding-right: 1px;
}

.win, .draw, .lose{
    margin-right: 2px;
    width: 22px;
    font-weight: 700;
    border-radius: 3px;
    color: white;
}

.win{
    background-color: #44ac45;
}

.draw{
    background-color: #ffb22f;
}

.lose{
    background-color: #eb3f30;
}

.champions, .promotion-table{
    background-color: $champions;
    border-radius: 5px;
    color: white;
}

.champions-quali {
    background-color: $champions-quali;
    border-radius: 5px;
    color: white;
}

.europa, .promotion-playoff-table{
    background-color: $europa;
    border-radius: 5px;
    color: white;
}

.europa-quali{
    background-color: $europa-quali;
    border-radius: 5px;
    color: white;
}

.relegation{
    background-color: $relegation;
    border-radius: 5px;
    color: white;
}

.table td, .table th {
    vertical-align: middle; 
}

.active{
    background-color: white !important;
    color: black !important;
}

.champions-league, .promotion{
    background-color: $champions;
    width: 14px;
    height: 14px;
}

.champions-league-quali{
    background-color: $champions-quali;
    width: 14px;
    height: 14px;
}

.europa-league, .promotion-playoff{
    background-color: $europa;
    width: 14px;
    height: 14px;
}

.europa-league-quali{
    background-color: $europa-quali;
    width: 14px;
    height: 14px;
}

.relegation-description{
    background-color: $relegation;
    width: 14px;
    height: 14px;
}

.description{
    font-size: 12px;
    margin-top:1px;
}



//loading animation
.lds-dual-ring {
  display: inline-block;
  width: 160px;
  height: 160px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 128px;
  height: 128px;
  margin: 16px;
  border-radius: 50%;
  border: 12px solid rgb(0, 0, 0);
  border-color: rgb(0, 0, 0) transparent rgb(0, 0, 0) transparent;
  animation: lds-dual-ring 1.6s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.team-name{
    min-width: 180px;
}

@media(max-width: 576px){
    .team-name{
        min-width: 120px;
    }
}

</style>



