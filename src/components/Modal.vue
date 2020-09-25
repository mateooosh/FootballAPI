<template>
    <div class="fixed-top modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header align-items-center justify-content-around">
                <img :src="player.player.photo" :alt="player.player.name" width="120">
                <div class="d-flex flex-column">
                    <h5 class="font-weight-bold"> 
                    {{player.player.firstname}} {{player.player.lastname}}
                   </h5>
                    <div class="pt-1 d-flex align-items-center">
                        <img class="mr-2" :src="player.statistics[0].team.logo" width="35" alt="">
                        <span>{{player.statistics[0].team.name}}</span>
                    </div>
                    
                </div>
            </div>
            <div class="modal-body px-5">
                <div>
                    <h6 class="font-weight-bold text-left mb-0">MATCHES</h6>
                    <div class="d-flex justify-content-between border-bottom mb-1">
                        <div>
                            Total played
                        </div>
                        <div>
                            {{player.statistics[0].games.appearences}}
                        </div>
                    </div>
                    <div class="d-flex justify-content-between border-bottom mb-1">
                        <div>
                            Started
                        </div>
                        <div>
                            {{player.statistics[0].games.lineups}}
                        </div>
                    </div>

                    <div class="d-flex justify-content-between mb-1">
                        <div>
                            Minutes per game
                        </div>
                        <div>
                            {{Math.round((player.statistics[0].games.minutes)/(player.statistics[0].games.appearences))}}
                        </div>
                    </div>
                </div>



                <div>
                    <h6 class="font-weight-bold text-left mt-3 mb-0">ATTACKING</h6>
                    <div class="d-flex justify-content-between border-bottom">
                        <div>
                            Goals
                        </div>
                        <div>
                            {{player.statistics[0].goals.total}}
                        </div>
                    </div>
                    <div class="d-flex justify-content-between border-bottom">
                        <div>
                            Assists
                        </div>
                        <div>
                            
                            <span v-if="player.statistics[0].goals.assists == null">0</span>
                            <span v-if="player.statistics[0].goals.assists != null">{{player.statistics[0].goals.assists}}</span>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between border-bottom">
                        <div>
                            Shots per game
                        </div>
                        <div>
                            {{Math.round((player.statistics[0].shots.total*10)/(player.statistics[0].games.appearences))/10}}
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div>
                            Shots on target per game
                        </div>
                        <div>
                            {{Math.round((player.statistics[0].shots.on*10)/(player.statistics[0].games.appearences))/10}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="$emit('close-modal')">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props:{
        player: Object,

    },
    mounted(){
        // console.log("TA",this.player);
    }
}
</script>

<style>

</style>