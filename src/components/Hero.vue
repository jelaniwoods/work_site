<template>
  <div id="hero">
    <div class="logo">
      <router-link to="home">JMW</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="services">Services</router-link></li>
        <li><router-link to="portfolio">Portfolio</router-link></li>
        <li><router-link to="contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'JMW',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#hero {
  background-color: darkgrey;
  padding: 0px;
  margin: 0;
}
</style>
