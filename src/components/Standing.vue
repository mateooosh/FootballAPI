<template>
  <section class="container p-0" style="max-width: 700px;">
        <!-- <h1>{{data.competition.name}}</h1> -->
        
        
        
        <h1 class="mt-4 mb-0">Standings</h1>

        <button class="btn btn-primary m-2" :class="{active: totalIsVisible}" @click="reset(); totalIsVisible=true;">Total</button>
        <button class="btn btn-primary m-2" :class="{active: homeIsVisible}" @click="reset(); homeIsVisible=true;">Home</button>
        <button class="btn btn-primary m-2" :class="{active: awayIsVisible}" @click="reset(); awayIsVisible=true;">Away</button>

        <!-- Total -->
        <div v-if="totalIsVisible" class="table-responsive">
            <table class="table">
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
                    <tr v-for="(team, index) in data.standings[0].table" :key="index">
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

                        <td class="p-2 text-right" style="width: 50px; ">
                            <img :src=team.team.crestUrl alt="logo" height="30">
                        </td>
                        <td class="pl-1 pr-1 text-left" style="min-width: 180px;">{{team.team.name}}</td>
                        <td class="pl-1 pr-1">{{team.playedGames}}</td>
                        <td class="pl-1 pr-1">{{team.won}}</td>
                        <td class="pl-1 pr-1">{{team.draw}}</td>
                        <td class="pl-1 pr-1">{{team.lost}}</td>
                        <td class="pl-1 pr-1">{{team.goalsFor}}:{{team.goalsAgainst}}</td>
                        <td class="pl-1 pr-1">{{team.points}}</td>

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
                <div class="description">Promotion - Premier League</div>
            </div>

            <div v-if="promotions[5].length" class="promotions container d-flex align-items-center">
                <div class="promotion-playoff mr-2"></div>
                <div class="description">Promotion - Premier League (Play Offs)</div>
            </div>

            <div v-if="promotions[6].length" class="promotions container d-flex align-items-center">
                <div class="relegation-description mr-2"></div>
                <div class="description">Relegation</div>
            </div>

            

            <div class="promotions container text-left">
                <div class="description">If teams finish on equal points at the end of the season, score difference will be the tie-breaker.</div>
            </div>
        </div>


        <!-- home -->
        <div v-if="homeIsVisible" class="table-responsive">
            <table class="table">
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
                    <tr v-for="(team, index) in data.standings[1].table" :key="index">
                        <td style="width: 30px;">{{index+1}}</td>
                        <td class="p-2 text-right" style="width: 50px; "><img :src=team.team.crestUrl alt="logo" height="30"></td>
                        <td class="pl-1 pr-1 text-left" style="min-width: 180px;">{{team.team.name}}</td>
                        <td class="pl-1 pr-1">{{team.playedGames}}</td>
                        <td class="pl-1 pr-1">{{team.won}}</td>
                        <td class="pl-1 pr-1">{{team.draw}}</td>
                        <td class="pl-1 pr-1">{{team.lost}}</td>
                        <td class="pl-1 pr-1">{{team.goalsFor}}:{{team.goalsAgainst}}</td>
                        <td class="pl-1 pr-1">{{team.points}}</td>

                    </tr>
                </tbody>
            </table>
        </div>

        <!-- away -->
        <div v-if="awayIsVisible" class="table-responsive">
            <table class="table">
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
                    <tr v-for="(team, index) in data.standings[2].table" :key="index">
                        <td style="width: 30px;">{{index+1}}</td>
                        <td class="p-2 text-right" style="width: 50px; "><img :src=team.team.crestUrl alt="logo" height="30"></td>
                        <td class="pl-1 pr-1 text-left" style="min-width: 180px;">{{team.team.name}}</td>
                        <td class="pl-1 pr-1">{{team.playedGames}}</td>
                        <td class="pl-1 pr-1">{{team.won}}</td>
                        <td class="pl-1 pr-1">{{team.draw}}</td>
                        <td class="pl-1 pr-1">{{team.lost}}</td>
                        <td class="pl-1 pr-1">{{team.goalsFor}}:{{team.goalsAgainst}}</td>
                        <td class="pl-1 pr-1">{{team.points}}</td>

                    </tr>
                </tbody>
            </table>
        </div>
  </section>
</template>

<script>
//2014 - La Liga
//2021 - BPL
//2002 - Bundesliga
//2019 - Serie A
//2017 - Portugal
//2003 - eredivisie
//2015 - ligue 1
//2016 - championship

export default {
    name: 'Standing',
    props:{
        data: Object,
        promotions: Array,
    },
    data(){
        return{
            totalIsVisible: true,
            homeIsVisible: false,
            awayIsVisible: false,
        }
    },
    methods:{
        reset(){
            this.totalIsVisible = false;
            this.homeIsVisible = false;
            this.awayIsVisible = false;
        }
    },
}
</script>

<style scoped lang="scss">
$champions: #004682;
$champions-quali:#1EA8EC;
$europa: #7f0029;
$europa-quali: #c71585;
$relegation: #bd0000;

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
</style>



