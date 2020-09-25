<template>
  <section class="container p-0" style="max-width: 700px;">
        
        
        
        <h1 class="mt-4 mb-3">Standings</h1>

        <!-- loading animation -->
        <div v-if="!totalStandingIsVisible" class="lds-dual-ring"></div>

        <!-- Total standing-->
        <div v-if="totalStandingIsVisible" class="table-responsive px-1">
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
                        <th class="pl-1 pr-1" colspan="5" scope="col">Form</th>
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
                        <td class="pl-1 pr-1 text-left" style="min-width: 180px;">{{team.team.name}}</td>
                        <td class="pl-1 pr-1">{{team.all.played}}</td>
                        <td class="pl-1 pr-1">{{team.all.win}}</td>
                        <td class="pl-1 pr-1">{{team.all.draw}}</td>
                        <td class="pl-1 pr-1">{{team.all.lose}}</td>
                        <td class="pl-1 pr-1">{{team.all.goals.for}}:{{team.all.goals.against}}</td>
                        <td class="pl-2 pr-2">{{team.points}}</td>

                        <td v-if="team.form.length>0" class="px-0">
                            <div 
                                :class="{ win : team.form.charAt(0)=='W', 
                                         draw : team.form.charAt(0)=='D',
                                         lose : team.form.charAt(0)=='L',}">
                                {{team.form.charAt(0)}}
                            </div>
                        </td>

                        <td v-if="team.form.length>1"  class="px-0">
                            <div :class="{ win : team.form.charAt(1)=='W', 
                                         draw : team.form.charAt(1)=='D',
                                         lose : team.form.charAt(1)=='L',}">
                                {{team.form.charAt(1)}}
                            </div>
                        </td>

                        <td v-if="team.form.length>2"  class="px-0">
                            <div :class="{ win : team.form.charAt(2)=='W', 
                                         draw : team.form.charAt(2)=='D',
                                         lose : team.form.charAt(2)=='L',}">
                                {{team.form.charAt(2)}}
                            </div>
                        </td>

                        <td v-if="team.form.length>3"  class="px-0">
                            <div :class="{ win : team.form.charAt(3)=='W', 
                                         draw : team.form.charAt(3)=='D',
                                         lose : team.form.charAt(3)=='L',}">
                                {{team.form.charAt(3)}}
                            </div>
                        </td>

                        <td v-if="team.form.length>4"  class="px-0">
                            <div :class="{ win : team.form.charAt(4)=='W', 
                                         draw : team.form.charAt(4)=='D',
                                         lose : team.form.charAt(4)=='L',}">
                                {{team.form.charAt(4)}}
                            </div>
                        </td>
                        

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


export default {
    name: 'Standing',
    props:{
        data: Object,
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
        standings: {
    "get": "standings",
    "parameters": {
        "league": "78",
        "season": "2020"
    },
    "errors": [],
    "results": 1,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "league": {
                "id": 78,
                "name": "Bundesliga 1",
                "country": "Germany",
                "logo": "https://media.api-sports.io/football/leagues/78.png",
                "flag": "https://media.api-sports.io/flags/de.svg",
                "season": 2020,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 157,
                                "name": "Bayern Munich",
                                "logo": "https://media.api-sports.io/football/teams/157.png"
                            },
                            "points": 3,
                            "goalsDiff": 8,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 0
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 159,
                                "name": "Hertha Berlin",
                                "logo": "https://media.api-sports.io/football/teams/159.png"
                            },
                            "points": 3,
                            "goalsDiff": 3,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 1
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 1
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 165,
                                "name": "Borussia Dortmund",
                                "logo": "https://media.api-sports.io/football/teams/165.png"
                            },
                            "points": 3,
                            "goalsDiff": 3,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 0
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 170,
                                "name": "FC Augsburg",
                                "logo": "https://media.api-sports.io/football/teams/170.png"
                            },
                            "points": 3,
                            "goalsDiff": 2,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 1
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 1
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 173,
                                "name": "RB Leipzig",
                                "logo": "https://media.api-sports.io/football/teams/173.png"
                            },
                            "points": 3,
                            "goalsDiff": 2,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": "Promotion - Europa League (Group Stage)",
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 1
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 167,
                                "name": "1899 Hoffenheim",
                                "logo": "https://media.api-sports.io/football/teams/167.png"
                            },
                            "points": 3,
                            "goalsDiff": 1,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": "Promotion - Europa Conference League (Qualification)",
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 160,
                                "name": "SC Freiburg",
                                "logo": "https://media.api-sports.io/football/teams/160.png"
                            },
                            "points": 3,
                            "goalsDiff": 1,
                            "group": "Bundesliga",
                            "form": "W",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 1,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 169,
                                "name": "Eintracht Frankfurt",
                                "logo": "https://media.api-sports.io/football/teams/169.png"
                            },
                            "points": 1,
                            "goalsDiff": 0,
                            "group": "Bundesliga",
                            "form": "D",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 188,
                                "name": "Arminia Bielefeld",
                                "logo": "https://media.api-sports.io/football/teams/188.png"
                            },
                            "points": 1,
                            "goalsDiff": 0,
                            "group": "Bundesliga",
                            "form": "D",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 168,
                                "name": "Bayer Leverkusen",
                                "logo": "https://media.api-sports.io/football/teams/168.png"
                            },
                            "points": 1,
                            "goalsDiff": 0,
                            "group": "Bundesliga",
                            "form": "D",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 161,
                                "name": "VfL Wolfsburg",
                                "logo": "https://media.api-sports.io/football/teams/161.png"
                            },
                            "points": 1,
                            "goalsDiff": 0,
                            "group": "Bundesliga",
                            "form": "D",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 192,
                                "name": "FC Koln",
                                "logo": "https://media.api-sports.io/football/teams/192.png"
                            },
                            "points": 0,
                            "goalsDiff": -1,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 172,
                                "name": "VfB Stuttgart",
                                "logo": "https://media.api-sports.io/football/teams/172.png"
                            },
                            "points": 0,
                            "goalsDiff": -1,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 182,
                                "name": "Union Berlin",
                                "logo": "https://media.api-sports.io/football/teams/182.png"
                            },
                            "points": 0,
                            "goalsDiff": -2,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 164,
                                "name": "FSV Mainz 05",
                                "logo": "https://media.api-sports.io/football/teams/164.png"
                            },
                            "points": 0,
                            "goalsDiff": -2,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 3
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 162,
                                "name": "Werder Bremen",
                                "logo": "https://media.api-sports.io/football/teams/162.png"
                            },
                            "points": 0,
                            "goalsDiff": -3,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": "Bundesliga (Relegation)",
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 4
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 163,
                                "name": "Borussia Monchengladbach",
                                "logo": "https://media.api-sports.io/football/teams/163.png"
                            },
                            "points": 0,
                            "goalsDiff": -3,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": "Relegation - 2. Bundesliga",
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 0,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 0,
                                    "against": 3
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 174,
                                "name": "FC Schalke 04",
                                "logo": "https://media.api-sports.io/football/teams/174.png"
                            },
                            "points": 0,
                            "goalsDiff": -8,
                            "group": "Bundesliga",
                            "form": "L",
                            "status": "same",
                            "description": "Relegation - 2. Bundesliga",
                            "all": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 0,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 0,
                                "win": 0,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 0,
                                    "against": 8
                                }
                            },
                            "update": "2020-09-20T00:00:00+00:00"
                        }
                    ]
                ]
            }
        }
    ]
},
        
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

.win, .draw, .lose{
    margin-right: 2px;
    padding: 0 3px;
    // font-size: 16px;
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


</style>



