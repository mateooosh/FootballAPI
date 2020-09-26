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
            totalStandingIsVisible: true,  
            standings: {
    "get": "standings",
    "parameters": {
        "league": "61",
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
                "id": 61,
                "name": "Ligue 1",
                "country": "France",
                "logo": "https://media.api-sports.io/football/leagues/61.png",
                "flag": "https://media.api-sports.io/flags/fr.svg",
                "season": 2020,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 79,
                                "name": "Lille",
                                "logo": "https://media.api-sports.io/football/teams/79.png"
                            },
                            "points": 11,
                            "goalsDiff": 4,
                            "group": "Ligue 1",
                            "form": "WDWWD",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "played": 5,
                                "win": 3,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 6,
                                    "against": 2
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 2,
                                    "against": 1
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 1063,
                                "name": "Saint Etienne",
                                "logo": "https://media.api-sports.io/football/teams/1063.png"
                            },
                            "points": 10,
                            "goalsDiff": 6,
                            "group": "Ligue 1",
                            "form": "DWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "played": 4,
                                "win": 3,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 2
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 94,
                                "name": "Rennes",
                                "logo": "https://media.api-sports.io/football/teams/94.png"
                            },
                            "points": 10,
                            "goalsDiff": 4,
                            "group": "Ligue 1",
                            "form": "WWWD",
                            "status": "same",
                            "description": "Promotion - Champions League (Qualification)",
                            "all": {
                                "played": 4,
                                "win": 3,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 82,
                                "name": "Montpellier",
                                "logo": "https://media.api-sports.io/football/teams/82.png"
                            },
                            "points": 9,
                            "goalsDiff": 5,
                            "group": "Ligue 1",
                            "form": "WWWL",
                            "status": "same",
                            "description": "Promotion - Europa League (Group Stage)",
                            "all": {
                                "played": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 10,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 116,
                                "name": "Lens",
                                "logo": "https://media.api-sports.io/football/teams/116.png"
                            },
                            "points": 9,
                            "goalsDiff": 2,
                            "group": "Ligue 1",
                            "form": "WWWL",
                            "status": "same",
                            "description": "Promotion - Europa Conference League (Qualification)",
                            "all": {
                                "played": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 4
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 91,
                                "name": "Monaco",
                                "logo": "https://media.api-sports.io/football/teams/91.png"
                            },
                            "points": 7,
                            "goalsDiff": 1,
                            "group": "Ligue 1",
                            "form": "LWWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 81,
                                "name": "Marseille",
                                "logo": "https://media.api-sports.io/football/teams/81.png"
                            },
                            "points": 7,
                            "goalsDiff": 0,
                            "group": "Ligue 1",
                            "form": "DLWW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 85,
                                "name": "Paris Saint Germain",
                                "logo": "https://media.api-sports.io/football/teams/85.png"
                            },
                            "points": 6,
                            "goalsDiff": 2,
                            "group": "Ligue 1",
                            "form": "WWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 2
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 1
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 106,
                                "name": "Stade Brestois 29",
                                "logo": "https://media.api-sports.io/football/teams/106.png"
                            },
                            "points": 6,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "WWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 4
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 84,
                                "name": "Nice",
                                "logo": "https://media.api-sports.io/football/teams/84.png"
                            },
                            "points": 6,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "LLWW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 5,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 3
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 77,
                                "name": "Angers",
                                "logo": "https://media.api-sports.io/football/teams/77.png"
                            },
                            "points": 6,
                            "goalsDiff": -3,
                            "group": "Ligue 1",
                            "form": "LWLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 4
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 80,
                                "name": "Lyon",
                                "logo": "https://media.api-sports.io/football/teams/80.png"
                            },
                            "points": 5,
                            "goalsDiff": 2,
                            "group": "Ligue 1",
                            "form": "DLDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 78,
                                "name": "Bordeaux",
                                "logo": "https://media.api-sports.io/football/teams/78.png"
                            },
                            "points": 5,
                            "goalsDiff": 1,
                            "group": "Ligue 1",
                            "form": "LDWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 0,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 83,
                                "name": "Nantes",
                                "logo": "https://media.api-sports.io/football/teams/83.png"
                            },
                            "points": 5,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "LDLWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 1,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 5,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 4
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 92,
                                "name": "Nimes",
                                "logo": "https://media.api-sports.io/football/teams/92.png"
                            },
                            "points": 4,
                            "goalsDiff": 1,
                            "group": "Ligue 1",
                            "form": "DLLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 97,
                                "name": "Lorient",
                                "logo": "https://media.api-sports.io/football/teams/97.png"
                            },
                            "points": 3,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "LLLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 1,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 7,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 2,
                                    "against": 5
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 112,
                                "name": "Metz",
                                "logo": "https://media.api-sports.io/football/teams/112.png"
                            },
                            "points": 3,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "WLLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 4,
                                "win": 1,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 4
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 0,
                                    "against": 2
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 95,
                                "name": "Strasbourg",
                                "logo": "https://media.api-sports.io/football/teams/95.png"
                            },
                            "points": 3,
                            "goalsDiff": -5,
                            "group": "Ligue 1",
                            "form": "WLLL",
                            "status": "same",
                            "description": "Ligue 1 (Relegation)",
                            "all": {
                                "played": 4,
                                "win": 1,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 5
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 19,
                            "team": {
                                "id": 93,
                                "name": "Reims",
                                "logo": "https://media.api-sports.io/football/teams/93.png"
                            },
                            "points": 1,
                            "goalsDiff": -3,
                            "group": "Ligue 1",
                            "form": "LLLD",
                            "status": "same",
                            "description": "Relegation - Ligue 2",
                            "all": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 3,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 1,
                                "win": 0,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 0,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 5
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        },
                        {
                            "rank": 20,
                            "team": {
                                "id": 89,
                                "name": "Dijon",
                                "logo": "https://media.api-sports.io/football/teams/89.png"
                            },
                            "points": 0,
                            "goalsDiff": -7,
                            "group": "Ligue 1",
                            "form": "LLLL",
                            "status": "same",
                            "description": "Relegation - Ligue 2",
                            "all": {
                                "played": 4,
                                "win": 0,
                                "draw": 0,
                                "lose": 4,
                                "goals": {
                                    "for": 1,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 0,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 5
                                }
                            },
                            "update": "2020-09-26T00:00:00+00:00"
                        }
                    ]
                ]
            }
        }
    ]
}
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


</style>



