<template>
  <section class="container p-0 mt-5 " style="max-width: 700px;">
        <div v-if="modalIsVisible" class="position-fixed" style="width:100vw; height: 100vh;top:0; left:0; background-color: rgba(220,220,220,0.7)"></div>
        <h1 class="mb-3">Top Scorers</h1>

        <Modal v-if="modalIsVisible" :player="playerForModal" v-on:close-modal="setModalFalse"/>

        <!-- loading animation -->
        <div v-if="!topScorersIsVisible" class="lds-dual-ring"></div>

        <!-- top scorers -->
        <div v-if="topScorersIsVisible" class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th class="text-center" colspan="2">Player</th>
                        <th class="text-left" colspan="2">Team</th>
                        <th>G</th>
                        <th>A</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="showPlayer(index)"  v-for="(item, index) in topScorers.response" :key="index">
                        <td class="p-1">{{index+1}}</td>
                        <td class="p-1">
                            <img :src="item.player.photo" height="40" alt="">
                        </td>
                        <td data-toggle="modal" data-target="#exampleModalCenter" class="text-left p-0 ">{{item.player.name}}</td>

                        <td class="p-1">
                            <img :src="item.statistics[0].team.logo" height="30" alt="">
                        </td>

                        <td class="text-left p-0">{{item.statistics[0].team.name}}</td>
                        <td>{{item.statistics[0].goals.total}}</td>
                        <td v-if="item.statistics[0].goals.assists!=null">{{item.statistics[0].goals.assists}}</td>
                        <td v-if="item.statistics[0].goals.assists==null">0</td>
                    </tr>
                </tbody>
            </table>
        </div>


    </section>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
    name: 'TopScorers',
    props: {
        leagueId: Number,
    },
    components:{
        Modal
    },
    data(){
        return{
            topScorersIsVisible: false,
            modalIsVisible: false,
            playerForModal: {},
            topScorers: {}
        }
    },
    methods:{
        showPlayer(index){
            this.playerForModal = this.topScorers.response[index];
            this.modalIsVisible = true;
            console.log(this.playerForModal);
        },
        setModalFalse(){
            this.modalIsVisible = false;
        }
    },
    
    mounted(){
      // fetch TOP SCORERS
      fetch(`https://v3.football.api-sports.io/players/topscorers?season=2020&league=${this.leagueId}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "63a2a98c6dfca66428d46b65d7f15aff"
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.topScorers = response;
        this.topScorersIsVisible = true;
      })
      .catch(err => {
        console.log(err);
      });
    },
}
</script>

<style lang="scss" scoped>

@media(max-width: 576px){
    .table td, .table th {
        font-size:12px;
    }

    img{
        height: 35px;
    }

    tr td:nth-child(4) img{
        height: 27px;
    }
}

.table {
    td, th{
        vertical-align: middle; 
        cursor: pointer;
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