<template>
  <div id="app">
    <!-- <router-view/> -->
    <hero></hero>
    <services></services>
    <portfolio></portfolio>
    <contact></contact>
    <!-- <router-view ></router-view> -->
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'
import Porfolio from './components/Portfolio.vue'
export default {
  components: {
    'hero': Hero,
    'contact': Contact,
    'services': Services,
    'portfolio': Porfolio
  },
  name: 'App'
}
</script>

<style>
#app {
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
