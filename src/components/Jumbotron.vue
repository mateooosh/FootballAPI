<template>
    <section class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1>Footscore</h1>      
            <p>Footscore have all latest football scores, fixtures, top scorers and their statistics. Choose from 11 football leagues. </p>
        </div>
        <div class="proba"></div>
    </section>
</template>

<script>
export default {
    name: 'Jumbotron',
}
</script>

<style lang="scss" scoped>
.jumbotron{
//   background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('../assets/ball.jpg');
//   background-position: 30% 0%; 
//   background-repeat: no-repeat; 
background:none;
  padding: 150px 0 570px;
  color:white;
  margin-bottom: 0;
  letter-spacing: 1px;
}

.proba{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 100vh;
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('../assets/ball.jpg');
    background-position: 0% 0%; 
    background-repeat: no-repeat;
    z-index:-1
}

h1{
    font-size: 50px;
}

p{
    font-size: 16px;
}
</style>