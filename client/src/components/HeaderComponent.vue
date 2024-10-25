<template>
    <div class="header">
      <div class="header-text">
        <button class="header-link-toggle" @click="toggleHeader"><img src="../assets/header_toggle.png"></button>
        <!-- Left side links -->
        <ul class="header-ul header-ul-left" :class="{ displayHeaderLinks: displayHeaderLinks }">
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About</router-link>
          <router-link to="/workshops">Workshops</router-link>
          <router-link to="/buildingWeekends">Building Weekends</router-link>
          <router-link to="/giftVouchers">Gift Vouchers</router-link> 
        </ul>
        <!-- Right side links -->
        <ul class="header-ul header-ul-right" :class="{ displayHeaderLinks: displayHeaderLinks }">
          <router-link to="/consulting">Consulting</router-link>
          <router-link to="/howToGuides">How To Guides</router-link> 
          <router-link to="/blog">Blog</router-link> 
          <router-link to="/contactUs">Contact</router-link>
        </ul>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      displayHeaderLinks: false, // Flag to control the display of header links
    };
  },
  methods: {
    toggleHeader() {
      this.displayHeaderLinks = !this.displayHeaderLinks; // Toggle the value of 'displayHeaderLinks' property
    }
  }
}
</script>