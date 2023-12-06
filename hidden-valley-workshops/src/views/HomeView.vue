<template>
  <div class="main">
    <div class="main-container">
      <div class="other-heading">
        <h1>Hidden Valley</h1>
        <h2>Sustainable Living Workshops</h2>
        <div class="workshop-booking-container" v-if="selectedWorkshopName && selectedWorkshopName!==''">
            <div class="home-booking"><h3>Can't get to a scheduled workshop? Arrange one at a date and time that suits you</h3>
            <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
        </div>
        </div>
        <div class="main-other" v-if="selectedWorkshopName==''">
          <div class="table-left">
          <WorkshopTimetable :workshops="sortedWorkshops" @workshopSelected="handleWorkshopSelected" />
          <div class="home-booking-container">
            <div class="home-booking"><h3>Can't get to a scheduled workshop? Arrange one at a date and time that suits you</h3>
            <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
          </div>
        </div>
        <div class="main-right">
          <ul class="main-text">
            <li class="main-li">Find inspiration and information to start gardening, bread baking, making compost and building. Extend your knowledge and improve your practical skills.</li>
            <li class="main-li">Our workshops will inspire you to get out there and start that new hobby or project you want to do, and they are a fun and informative way to spend your Sunday morning.</li>
            <li class="main-li">All workshops include a hearty, fresh baked morning tea.  Book a unique experience in a beautiful part of Tasmania.</li>
            <li class="main-li">Hidden Valley is only 20 minutes from Deloraine, an hour from Devonport or Launceston, and 2 hours from Hobart on the Great Lakes touring route.</li>
          </ul>
          <SubscriptionForm />
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
import WorkshopTimetable from '../components/WorkshopTimetable.vue';
import WorkshopDetails from '../components/WorkshopDetails.vue';
import SubscriptionForm from  '../components/SubscriptionForm.vue';

export default {
  components: {
    WorkshopTimetable,
    WorkshopDetails,
    SubscriptionForm,
  },
  data() {
    return {
      workshops: [], // Store fetched data here
      sortedWorkshops: [], // Store sorted workshops here
      selectedWorkshop: null, //Set initial value to null
      selectedWorkshopName: '', // Set initial value to an empty string
      subscribers: [],
    };
  },
  created() {
    // Make HTTP GET request to backend API
    axios.get('http://localhost:3000/getData')
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
    submitForm() {
        // Form for subscription is submitted
        // Add data to subscribers array
        this.subscribers.push({
          name: this.name,
          email: this.email,
        });
        console.log('Subscribers:', this.subscribers);

      // Clear form fields and checkboxes
      this.name = '';
      this.email = '';
    },
  }
}
</script>