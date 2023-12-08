<template>
  <div class="main">
    <div class="main-container">
      <div class="main-heading">
        <h1>Hidden Valley</h1>
        <h2 v-if="selectedWorkshopName==''">Gift Vouchers</h2>
        <h2 v-if="selectedWorkshopName && selectedWorkshopName!==''">Sustainable Living Workshops</h2>
        </div>
        <div class="workshop-booking-container" v-if="selectedWorkshopName && selectedWorkshopName!==''">
            <div class="home-booking"><h3>Can't get to a scheduled workshop? Arrange one at a date and time that suits you</h3>
            <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
        </div>
        <div class="main-other" v-if="selectedWorkshopName==''">
        <div class="main-left">
          <PremiumWorkshops :premiumWorkshops="premiumWorkshops" :standardWorkshops="standardWorkshops" @workshopSelected="handleWorkshopSelected" />
        </div>
        <div class="main-right">
          <ul class="main-text">
            <li class="main-li">Give an experience as a gift and buy a gift voucher to either our premium workshops (maximum 5 to 6 participants) or our standard workshops (maximum 10 to 12 participants)<br><br></li>
            <GiftUp />
          </ul>
        </div>
      </div>
      <div class="about-other" v-if="selectedWorkshopName && selectedWorkshopName!==''">
        <WorkshopDetails :selectedWorkshop="selectedWorkshop" :workshops="sortedWorkshops"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PremiumWorkshops from '../components/PremiumWorkshops.vue';
import WorkshopDetails from '../components/WorkshopDetails.vue';
import GiftUp from '../components/GiftUp.vue';

export default {
  components: {
    PremiumWorkshops,
    WorkshopDetails,
    GiftUp,
  },
  data() {
    return {
      workshops: [], // Store fetched data here
      selectedWorkshop: null, //Set initial value to null
      selectedWorkshopName: '', // Set initial value to an empty string
      sortedWorkshops: [], // Store sorted workshops here
      price: [], // Store fetched data here
    };
  },
  created() {
    // Make HTTP GET request to backend API
    axios.get('https://hidden-valley-workshops.onrender.com/getData')
      .then(response => {
        this.workshops = response.data; // Update workshops property with fetched data
        this.sortWorkshops(); // Sort the workshops
        // Set selectedWorkshop to the first workshop in sortedWorkshops
        this.selectedWorkshop = this.sortedWorkshops[0];
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  computed: {
    premiumWorkshops() {
      return this.sortedWorkshops.filter(workshop => this.isPremium || workshop.premium);
    },
    standardWorkshops() {
      return this.sortedWorkshops.filter(workshop => this.isStandard || !workshop.premium);
    },
  },
  methods: {
    handleWorkshopSelected(workshopName) {
      // Handle the selected workshop name emitted from child component
      this.selectedWorkshopName = workshopName;
      this.selectedWorkshop = this.sortedWorkshops.find(workshop => workshop.name === workshopName);
    },
    sortWorkshops() {
      // Sort workshops by date in ascending order
      this.sortedWorkshops = [...this.workshops].sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  }
}
</script>