<template>
  <div class="main">
    <div class="main-container">
      <div class="other-heading">
        <h1>Hidden Valley</h1>
        <h2>Sustainable Living Workshops</h2>
        <div class="workshop-booking-container" v-if="selectedWorkshopName && selectedWorkshopName!==''">
            <div class="home-booking"><h3>Can't get to a scheduled workshop? Arrange one at a date and time that suits you for $399</h3>
            <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
        </div>
        <div class="home-booking-container" v-else>
            <div class="home-booking"><h3>Looking for a garden design to bring your ideas to reality?  Discuss your needs and arrange an initial site visit</h3>
            <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
          </div>
        </div>
        <div class="main-other" v-if="selectedWorkshopName==''">
          <div class="table-left">
          <WorkshopTimetable :workshops="sortedWorkshops" @workshopSelected="handleWorkshopSelected" />
          <ul class="main-left">
            <li class="review-li">"Thanks Bonnie for the wonderful short course on using building tools. Good fun in a beautiful location with a lovely group of participants. Excellent practical teaching to build our confidence!"</li>
            <li class="review-li">"This course was amazing. A great mentor, an unspeakably beautiful setting and fabulous hospitality. I would go to another course in a heartbeat."</li>
            <li class="main-li">For more reviews, see https://g.page/r/CYkb5HGi0MIXEAE/review</li>
          </ul>
          <div class="home-booking-container">
            <div class="home-booking"><h3>Can't get to a scheduled workshop? Arrange one at a date and time that suits you for $399</h3>
            <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
          </div>
        </div>
        <div class="main-right">
          <ul class="main-text">
            <li class="main-li">Are you looking for inspiration and information to get you started gardening, baking artisan bread, making compost or building?</li>
            <li class="main-li">You might want to extend your knowledge and improve your practical skills.</li>
            <li class="main-li">Or you might be travelling in Tasmania and looking for an interesting activity to do while you are here.</li>
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
  methods: {
    handleWorkshopSelected(workshopName) {
      // Handle the selected workshop name emitted from child component
      this.selectedWorkshopName = workshopName;
      this.selectedWorkshop = this.sortedWorkshops.find(workshop => workshop.name === workshopName);
    },
    
    sortWorkshops() {
      // Sort workshops by date in ascending order
      this.sortedWorkshops = [...this.workshops].sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  }
}
</script>