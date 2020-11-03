<template>
  <div class="home">
    <Navbar/>
    <!-- <div class="my-5">
      Still Creating... Check Leagues
    </div> -->
    <Jumbotron/>
    <Footer/>
    <Background/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import Background from '@/components/Background.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Jumbotron,
    Background
  }
}
</script>

<style lang="scss" scoped>

</style>
