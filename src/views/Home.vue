<template>
  <div class="home">
    <Navbar/>
    <div class="my-5">
      Still Creating... Check Leagues
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
