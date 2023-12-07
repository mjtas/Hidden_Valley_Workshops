<template>
<div  class="block">
    <div class="main-left">
        <ul class="main-text">
            <h3 class="h3-link" @click="toggleText(selectedWorkshop.name)">{{ selectedWorkshop.name }}</h3>
            <li class="main-li" v-if="selectedWorkshop.show">{{ selectedWorkshop.text }}</li>
            <li class="price-li">{{ price.length > 0 ? calcPrice(selectedWorkshop.premium) : 'Loading...' }} (or bring a friend for {{ price.length > 0 ? calcDoublePrice(selectedWorkshop.premium) : 'Loading...' }})</li>
            <div class="booking-container">
                <div class="booking">
                  <div class="booking-left">
                    <div class="booking-text">Next Date:<br>{{ formatDate(selectedWorkshop.date) }}</div>
                    </div>
                    <button class="button button2" @click="redirectToExternalLink">Book Now</button>
                </div>
            </div>
        </ul>  
    </div>
    <div class="main-right">
        <div class="main-opaque">
            <img class="about-img" :src="`/${ selectedWorkshop.image }.png`"/>
        </div>
    </div> 
</div>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        selectedWorkshop: Object,
        workshops: Array,
    },
    data() {
    return {
      price: [], // Store fetched data here
    };
  },
    created() {
    // Make HTTP GET request to backend API
    axios.get('/getPriceData')
      .then(response => {
        this.price = response.data; // Update type property with fetched data
      })
      .catch(error => {
        console.error('Error fetching price data:', error);
      });
  },
    
    methods: {
        toggleText(name) {
        // Find the workshop with the given name in workshops array
            const workshop = this.workshops.find(workshop => workshop.name === name);
            if (workshop) {
                // Toggle the 'show' property of the found workshop
                workshop.show = !workshop.show;
            }
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('en-UK', options);
        },

        calcPrice(premium) {
            const workshopType = premium
            ? this.price.find(price => price.type === "premium")
            : this.price.find(price => price.type === "standard");

            // Check if workshopType is defined before accessing properties
            if (workshopType && workshopType.singlePrice !== undefined) {
                return workshopType.singlePrice;
            } else {
                // Handle the case where workshopType or singlePrice is undefined
                return "N/A";
            }
        },

        calcDoublePrice(premium) {
            const workshopType = premium
            ? this.price.find(price => price.type === "premium")
            : this.price.find(price => price.type === "standard");

            // Check if workshopType is defined before accessing properties
            if (workshopType && workshopType.doublePrice !== undefined) {
                return workshopType.doublePrice;
            } else {
                // Handle the case where workshopType or singlePrice is undefined
                return "N/A";
            }
        },

        redirectToExternalLink() {
        window.location.href = 'https://www.eventbrite.com.au/d/australia--tasmania/events/';
        }
    },
}
</script>