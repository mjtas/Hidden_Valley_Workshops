<template>
    <div>
      <h3 class="h3-link2" @click="toggleText">Assumed Knowledge</h3>
      <ul class="main-text" v-if="show">
        <li class="main-li">To avoid the plans becoming too wordy, I have assumed some basic building knowledge and skills.</li>
        <li class="main-li">I assume you know to cut on the waste side of the line, so that you leave the line on when you cut to the measurement.</li>
        <li class="main-li">I assume you can cut a straight line within 1mm of square with a circular saw (most of the time!).</li>
        <li class="main-li">I assume you know to always pre-drill your holes 2/3 the depth of the screw.</li>
        <li class="main-li">I teach all of these skills in my building skills workshops, along with a general introduction to hand and power tools so if you’re feeling lost then come along and learn the basics or build on the basics with me in person!</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false, // Initially hidden
      };
    },
    methods: {
      toggleText() {
        this.show = !this.show; // Toggle the 'show' property
      },
    },
  };
  </script>  