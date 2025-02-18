<template>
    <div class="main">
        <div class="main-container">
          <div class="other-heading">
            <h1>Hidden Valley</h1>
            <h2>Sustainable Living Workshops</h2>
            <div class="workshop-booking-container">
                <div class="home-booking"><h3>Can't get to a scheduled workshop? Arrange one at a date and time that suits you for $399</h3>
                <router-link to="/contactUs" tag="button" class="button button3">Contact</router-link></div>
            </div>
            </div>
            <div class="about-other">
                    
                <div class="block" v-for="workshop in filteredWorkshops" :key="workshop.name">
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
            </div>
        </div>
    </div>
    </template>
        
    <script>
    import axios from 'axios';
    export default {
        data() {
            return {
                price: [], // Store fetched data here
                workshops: [], // Store fetched data here
                sortedWorkshops: [], // Store sorted workshops here
            };
        },
        created() {
            // Make HTTP GET requests to backend API
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
        axios.get('https://hidden-valley-workshops.onrender.com/getPriceData')
            .then(response => {
                this.price = response.data; // Update type property with fetched data
            })
            .catch(error => {
                console.error('Error fetching price data:', error);
            });
        },
    
        computed: {
        // Filter workshops to include only those within the next 6 months from today's date
          filteredWorkshops() {
            const today = new Date().setHours(0, 0, 0, 0); // Get today's date without time
            const sixMonthsFromToday = new Date(); 
            sixMonthsFromToday.setMonth(sixMonthsFromToday.getMonth() + 6); // Add 6 months to today
    
            return this.sortedWorkshops.filter(workshop => {
              const workshopDate = new Date(workshop.date).setHours(0, 0, 0, 0); // Get workshop date without time
              return workshopDate >= today && workshopDate <= sixMonthsFromToday;
            });
          }
        },
            
        methods: {
            sortWorkshops() {
            // Sort workshops by date in ascending order
                this.sortedWorkshops = [...this.workshops].sort((a, b) => new Date(a.date) - new Date(b.date));
            },
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
        }
    }
    </script>