<template>
  <div id="app">
    <!-- <router-view/> -->
    <hero></hero>
    <portfolio></portfolio>
    <contact></contact>
    <!-- <router-view ></router-view> -->
  </div>
</template>

<script>
import Contact from './components/Contact.vue'
import Porfolio from './components/Portfolio.vue'
export default {
  components: {
    'contact': Contact,
    'portfolio': Porfolio
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
