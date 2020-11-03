<template>
    <section class="background">
    </section>
</template>

<script>
export default {
    name: 'Background',
}
</script>

<style lang="scss" scoped>
.background{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('../assets/ball.jpg');
    background-position: 30% 0%; 
    background-repeat: no-repeat;
    z-index:-1
}

</style>