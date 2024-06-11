<template>
<div class="main">
  <div class="main-container">
    <div class="other-heading">
      <h1>Hidden Valley</h1>
      <h2>Contact Us</h2>
    </div>
    <div class="about-other">
      <div class="block">
        <div class="main-left">
          <ul class="main-text">
            <h3>Questions about any of our workshops?</h3>
            <li class="main-li">
              <label for="name">Name</label><br>
              <input type="text" id="name" name="name" v-model="name"><br>
              <label for="user_email">Email Address</label><br>
              <input type="email" id="user_email" name="email" placeholder="you@example.com" v-model="email" required><br>
              <label for="message">Your enquiry:</label><br>
              <!-- Use textarea for the message input -->
              <textarea class="message-input" id="message" name="message" rows="4" cols="50" v-model="message"></textarea><br>
              <button type="button" class="button button1" @click="submitForm">Send</button>
            </li><br>
            <li>Phone: 0456 855 652</li><br>
            <li>Email: bonnie@hiddenvalleyworkshops.com.au</li><br>
          </ul>

        </div>
        <div class="main-right">
          <div class="main-opaque">
            <div class="map" id="map"></div>
            <ul class="main-text">
              <h3>Where is Hidden Valley?</h3>
              <li>Workshops are held at 12361 Highland Lakes Rd, Golden Valley (gate open during workshops only).</li><br>
              <h3>What should I bring to my workshop?</h3>
              <li>Please arrive for your workshop at 8:45am. We might only be 20 minutes drive from Deloraine but at an elevation of 750 metres above sea level we are usually 3 to 5 degrees colder. Bring an extra layer of warm clothes regardless of the time of year, and sun protection in summer as workshops will be held outdoors where possible.</li>
            </ul>
          </div>
        </div>
      </div>
      <RefundComponent />

  </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import RefundComponent from  '../components/RefundComponent.vue';
export default {
  components: {
    RefundComponent,
  },
  data() {
    return {
      email: '',
      name: '',
      message: '',
    };
  },
  mounted() {
    // Load Google Maps API script
    this.loadGoogleMapsScript();
  },
  methods: {
    submitForm() {
      // Validate form fields (you may add more validation as needed)
      if (!this.name || !this.email || !this.message) {
        alert('Please fill in all fields.');
        return;
      }

      // Send form data to the /contact API
      axios.post('https://hidden-valley-workshops.onrender.com/contact', {
        name: this.name,
        email: this.email,
        message: this.message,
      })
        .then(response => {
          alert(response.data.message);
        })
        .catch(error => {
          console.error('Error:', error);
          alert("Message failed to send");
        });

      // Clear form fields
      this.name = '';
      this.email = '';
      this.message = '';
    },

    loadGoogleMapsScript() {
      // Check if the Google Maps script is already loaded
      
      if (typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = import.meta.env.VITE_MAP;
        script.defer = true;
        script.async = true;
        script.onload = this.initMap;
        document.head.appendChild(script);
      } else {
        // Google Maps script is already loaded, initialise the map
        this.initMap();
      }
    },
    initMap() {
      const position = { lat: -41.69140599172209, lng: 146.72657868289832 };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: position,
        mapId: 'DEMO_MAP_ID',
      });
      const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'HiddenValley',
      });
    }
  }
}
</script>
