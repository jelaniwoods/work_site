<template lang="html">
  <div id="porfolio">
    <div class="row">
      <div id="col1" class="col-lg-3">
        <!-- <img @mouseover="showCaption" src="../assets/img/butterfly.jpg" alt=""> -->
        <div class="skill-container">
          <img @click="lightbox(1)" @mouseover="showCaption" src="../assets/img/actor.jpg" alt="">
          <div class="cap-con">
            <p v-show="!hide" class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor/</p>
          </div>
        </div>
      </div>
      <div id="col2" class="col-lg-3">
        <div class="skill-container">
          <img @click="lightbox(2)" @mouseover="showCaption" src="../assets/img/butterfly.jpg" alt="">
          <div class="cap-con">
            <p v-show="!hide" class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor/</p>
          </div>
        </div>
      </div>
      <div id="col3" class="col-lg-3">
        <div class="skill-container">
          <img @click="lightbox(3)" @mouseover="showCaption" src="../assets/img/flower.jpg" alt="">
          <div class="cap-con">
            <p  class="caption">Butt fajcodnas cjdpsj d do eiusmod tempor/</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-3">
        <div class="skill-container">
          <img @click="lightbox(4)" src="../assets/img/butterfly.jpg" alt="">
          <div class="cap-con">
            <p class="caption">BOTTOM ROOOOOOWWW eiusmod tempor/</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
    <div class="row">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hide: true
    }
  },
  methods: {
    showCaption () {
      this.hide = !this.hide
      console.log('hovering')
    },
    lightbox (num) {
      console.log(num)
    }
  }
}
</script>
<style lang="css" scoped>/* height: 400px; */
  .col-lg-3 {
    width: 30%;
    /* min-height: 4em; */
    display: inline-block;
    border: 1px solid purple;
  }
  .col-lg-3 img {
    width: 100%;
    height: 100%;
  }
  .skill-container {
    /* width: 100%; */
    padding: 0px;
  }
  .cap-con {
    background-color: #000;
    /* bottom: 6em; */
    padding: 0;
    margin: 0;
    color: #fff;
    /* left: 0; */
    /*  TODO width is like 1px wider than the img tag. Why?*/
    opacity: 0.5;
    position: absolute;
    width: 30%;

  }
  .caption {
    /* position:absolute; */
    /* padding:0.25em; */
    /* top:1em; left:0; right:0; */
    /* z-index: 2;
    float: left;
    color:black;
    background-color:rgba(0,0,0,0.2);
    text-align:center; */
  }
  #porfolio {
    background-color: lightgreen;
  }
</style>
