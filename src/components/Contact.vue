<template lang="html">
  <div id="contact">
    <h1>Interested?</h1>
    <h3>(yes)</h3>
    <input type="text" v-model="email">
    <br>
    <button type="button" @click="sendMail">Contact</button>
    <footer>email: @jelanimwoods@email.com <br> &copy; JMW</footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    sendMail () {
    }
  }

}
</script>

<style lang="css">
#contact {
  padding: 10px;
  background-color: lightblue;
}
footer {
  padding: 10px;
}
</style>
