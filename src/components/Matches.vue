 <template>
  <section class="container p-0 mt-5 " style="max-width: 700px;">
        <h1 class="mb-3">Matches</h1>


        <!-- loading animation -->
        <div v-if="!matchesAreVisible" class="lds-dual-ring"></div>

        <!-- top scorers -->
        <div v-if="matchesAreVisible" class="container">
            
            <div v-for="(match, index) in roundArray" :key="index" class="border-top d-flex">
                <div class="border-right px-2 d-flex flex-column justify-content-center" style="font-size: 16px;">
                    <div>
                        <span v-if="dates[index].getDate()>9">{{dates[index].getDate()}}</span><span v-else>0{{dates[index].getDate()}}</span>/<span v-if="dates[index].getMonth()>8">{{dates[index].getMonth()+1}}</span><span v-else>0{{dates[index].getMonth()+1}}</span>/{{(dates[index].getFullYear() % 100)}}
                    </div>
                    
                    
                    <div>{{dates[index].getHours()}}:<span v-if="dates[index].getMinutes()<10">0{{dates[index].getMinutes()}}</span><span v-else>{{dates[index].getMinutes()}}</span>
                    </div>
                    
                </div>

                <div style="width:100%;">
                    <div class="d-flex align-items-center justify-content-between px-2 py-1">
                        <div>
                            <img :src="match.teams.home.logo" :alt="match.teams.home.name" width="30">
                            <span class="ml-2">{{ match.teams.home.name }}</span>
                        </div>
                        <div class="mr-1" :class="{'font-weight-bold' : match.teams.home.winner}">{{ match.score.fulltime.home }}</div >
                    </div>

                    <div class="d-flex align-items-center justify-content-between px-2 py-1">
                        <div>
                            <img :src="match.teams.away.logo" :alt="match.teams.away.name" width="30">
                            <span class="ml-2">{{ match.teams.away.name }}</span>
                        </div>
                        <div class="mr-1" :class="{'font-weight-bold' : match.teams.away.winner}">{{ match.score.fulltime.away }}</div >
                    </div>
                </div>

                
                
                
            </div>
            Round {{round}}
                <button class="btn btn-success m-2" @click="round++; getRoundArray()">
                    +1
                </button>
                
                <button class="btn btn-success m-2" @click="round--; getRoundArray()">
                    -1
                </button>
        </div>
        

    </section>
</template>

<script>
export default {
    name: 'Matches',
    props: {
        leagueId: Number,
        matchesInRound: Number,
    },
    data(){
        return{
            matchesAreVisible: false,
            dates: [],
            round: 1,
            roundArray: [],
            matches:{}
        }
    },
    methods:{
        getRoundArray(){
            let tab = [];
            for(let i=this.matchesInRound*this.round-this.matchesInRound; i<this.matchesInRound * this.round; i++){
                tab.push(this.matches.response[i]);
            }
            function compare(a, b) {
                if (a.fixture.timestamp > b.fixture.timestamp) return 1;
                if (b.fixture.timestamp > a.fixture.timestamp) return -1;

                return 0;
            }

            tab.sort(compare);
            this.roundArray = tab;
            this.dates = [];
            for(let i=0; i<this.roundArray.length; i++){
                let d = new Date(this.roundArray[i].fixture.date);
                this.dates.push(d);
            }
            
        }
    },
    
    mounted(){
        

        console.log(this.matches);
      // fetch TOP SCORERS
      fetch(`https://v3.football.api-sports.io/fixtures?season=2020&league=${this.leagueId}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "63a2a98c6dfca66428d46b65d7f15aff"
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.matches = response;


        let temp = -1;
        var date = new Date();
        var timestamp = date.getTime() / 1000;
        for(let i=0; i<this.matches.response.length; i++){
            
            if(this.matches.response[i].fixture.timestamp > timestamp){
                temp = Math.floor(i/this.matchesInRound);
                break;
            }   
        }
        //if season is finished
        if(temp===-1)
            this.round = this.matches.response.length / this.matchesInRound;
        else    
            this.round = temp+1;
        this.getRoundArray();
        
        this.matchesAreVisible = true;

        
      })
      .catch(err => {
        console.log(err);
      });
    },
}
</script>

<style lang="scss" scoped>

@media(max-width: 576px){
    .container{
        padding:0;
    }

    img{
        width:25px;
    }
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