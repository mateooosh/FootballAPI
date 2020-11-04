<template>
  <div class="about">
    <Navbar/>
    <div class="jumbotron">
      Still Creating About section... Check Leagues
    </div>
    
    <Footer/>
    <Background/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Background from '@/components/Background.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Background 
  }
}
</script>


<style scoped lang="scss">
.jumbotron{
  padding: 300px 0;
  background: none;
  color: white;
}
</style>
