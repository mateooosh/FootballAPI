<template>
    <section id="modal" class="fixed-top modal-dialog modal-dialog-centered">

        <div class="modal-content">
            <div class="modal-header align-items-center justify-content-around">
                <img class="photo" :src="player.player.photo" :alt="player.player.name" width="120">
                <div class="d-flex flex-column">
                    <h5 class="font-weight-bold"> 
                    {{player.player.firstname}} {{player.player.lastname}}
                   </h5>
                    <div class="pt-1 d-flex align-items-center justify-content-center">
                        <img class="mr-2" :src="player.statistics[0].team.logo" width="35" alt="">
                        <span>{{player.statistics[0].team.name}}</span>
                    </div>

                    <button @click="$emit('close-modal')" class="close-button"></button>
                </div>
            </div>
            <div class="modal-body px-5">
                <div>
                    <h6 class="font-weight-bold text-left mb-1">MATCHES</h6>
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
                    <h6 class="font-weight-bold text-left mt-4 mb-1">ATTACKING</h6>
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

                <div>
                    <h6 class="font-weight-bold text-left mt-4 mb-1 ">PASSES</h6>
                    <div class="d-flex justify-content-between border-bottom mb-1">
                        <div>
                            Assists
                        </div>
                        <div>
                            <span v-if="player.statistics[0].goals.assists == null">0</span>
                            <span v-if="player.statistics[0].goals.assists != null">{{player.statistics[0].goals.assists}}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between border-bottom mb-1">
                        <div>
                            Accuracy
                        </div>
                        <div>
                            {{player.statistics[0].passes.accuracy}}%
                        </div>
                    </div>

                    <div class="d-flex justify-content-between border-bottom mb-1">
                        <div>
                            Key passes
                        </div>
                        <div>
                            {{player.statistics[0].passes.key}}
                        </div>
                    </div>

                    <div class="d-flex justify-content-between mb-1">
                        <div>
                            Passes per game
                        </div>
                        <div>
                            {{Math.round((player.statistics[0].passes.total*10) / (player.statistics[0].games.appearences))/10}}
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary m-auto" @click="$emit('close-modal')">Close</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Modal',
    props:{
        player: Object,

    },
}
</script>

<style lang="scss" scoped>

.close-button{
    background-color: rgba(10, 10, 10, .2);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    height: 24px;
    width: 24px;
    top: 5px;
    right: 5px;
    outline: 0;
    position: absolute;

    &:hover{
        background-color: rgba(10, 10, 10, .35);
    }

    &::after,
    &::before {
        background-color: #fff;
        content: "";
        display: block;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform-origin: center center;
    }

    &::before {
        height: 2px;
        width: 50%;
    }

    &::after {
        height: 50%;
        width: 2px;
    }
}

@media(max-width: 576px){
    section{
        // position: static;
    }

    .photo{
        width: 90px;
    }

    .modal-body{
        padding-left:1rem !important;
        padding-right: 1rem !important;
    }

    .modal-content, .modal-body{
        font-size: 12px;
    }

    h6{
        font-size: 14px;
    }
}
</style>