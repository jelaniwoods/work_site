<template lang="html">
  <div class="skill">
    <div class="icon">
      Icon
    </div>
    <hr>
    <div class="text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="css">
  .skill {
    display: inline-block;
    width: 24%;
    padding-bottom: 2em;
    padding-top: 2em;
  }
  hr {
    width: 24%;
  }
  .icon {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .text {
    border: 1px solid black;
  }
</style>
