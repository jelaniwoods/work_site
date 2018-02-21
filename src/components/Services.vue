<template lang="html">
  <div id="services">
    <skill></skill>
    <skill></skill>
    <skill></skill>
    <skill></skill>
  </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
  components: {
    'skill': Skill
  },
  data () {
    return {

    }
  }

}
</script>
<style lang="css" scoped>
  #services {
    background-color: orange;
    width: 100%;
  }
</style>
