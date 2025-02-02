<template>
<div  class="block">
    <div class="main-left">
        <ul class="main-text">
            <h3 class="h3-link" @click="toggleText(selectedWorkshop.name)">{{ selectedWorkshop.name }}</h3>
            <li class="main-li" v-if="selectedWorkshop.show">{{ selectedWorkshop.text }}</li>
            <li class="price-li">{{ price.length > 0 ? calcPrice(selectedWorkshop.type) : 'Loading...' }}
            <span v-if="!['weekend', 'mother'].includes(selectedWorkshop.type)">
            (or bring a friend for {{ price.length > 0 ? calcDoublePrice(selectedWorkshop.type) : 'Loading...' }})
            </span></li>
            <div class="booking-container">
                <div class="booking">
                  <div class="booking-left">
                    <div class="booking-text">Next Date:<br>{{ formatDate(selectedWorkshop.date) }}</div>
                    </div>
                    <button class="button button2" @click="redirectToExternalLink(selectedWorkshop)">Book Now</button>
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
<div class="block" v-for="workshop in otherWorkshops" :key="workshop.name">
   <div class="main-left">
        <ul class="main-text">
            <h3 class="h3-link" @click="toggleText(workshop.name)">{{ workshop.name }}</h3>
            <li class="main-li" v-if="workshop.show">{{ workshop.text }}</li>
            <li class="price-li">{{ price.length > 0 ? calcPrice(workshop.type) : 'Loading...' }}
                <span v-if="!['weekend', 'mother'].includes(workshop.type)">
            (or bring a friend for {{ price.length > 0 ? calcDoublePrice(workshop.type) : 'Loading...' }})
            </span></li>
            <div class="booking-container">
                <div class="booking">
                  <div class="booking-left">
                    <div class="booking-text">Next Date:<br>{{ formatDate(workshop.date) }}</div>
                    </div>
                    <button class="button button2" @click="redirectToExternalLink(workshop)">Book Now</button>
                    </div>
                    </div>
        </ul>  
    </div>
    <div class="main-right">
        <div class="main-opaque">
            <img class="about-img" :src="`/${ workshop.image }.png`"/>
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
        axios.get('https://hidden-valley-workshops.onrender.com/getPriceData')
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

        calcPrice(type) {
            const workshopType = this.price.find(price => price.type === type);
            // Check if workshopType is defined before accessing properties
            if (workshopType && workshopType.singlePrice !== undefined) {
                return workshopType.singlePrice;
            } else {
                // Handle the case where workshopType or singlePrice is undefined
                return "N/A";
            }
        },
        calcDoublePrice(type) {
            const workshopType = this.price.find(price => price.type === type);
            // Check if workshopType is defined before accessing properties
            if (workshopType && workshopType.doublePrice !== undefined) {
                return workshopType.doublePrice;
            } else {
                // Handle the case where workshopType or singlePrice is undefined
                return "N/A";
            }
        },

        redirectToExternalLink(workshop) {
        if (workshop && workshop.link) {
            window.location.href = workshop.link;
        } else {
            console.error('Invalid workshop data or link not available.');
        }
    }
    },
    
    computed: {
        otherWorkshops() {
        const today = new Date().setHours(0, 0, 0, 0); // Get today's date without time
        const sixMonthsFromToday = new Date();
        sixMonthsFromToday.setMonth(sixMonthsFromToday.getMonth() + 6); // Add 6 months to today

        return this.workshops.filter((workshop) => {
            const workshopDate = new Date(workshop.date).setHours(0, 0, 0, 0); // Get workshop date without time
      
        return (
            workshop.name !== this.selectedWorkshop.name && // Exclude selectedWorkshop
            workshopDate >= today && // Only include dates from today
            workshopDate <= sixMonthsFromToday // Only include dates within 6 months
        );
    });
  }
}
  }
</script>