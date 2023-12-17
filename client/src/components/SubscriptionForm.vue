<template>
  <div class="green-subscription">
    <div class="subscribe">
      <h3>Subscribe to receive blog posts and upcoming workshop updates as a monthly newsletter</h3>
    </div>
    <div class="subscribe">
      <label for="subscription_name">Name</label><br>
      <input type="text" id="subscription_name" name="name" class="wide-input" v-model="name"><br>
      <label for="subscription_email">Email Address</label><br>
      <input type="email" id="subscription_email" name="email" placeholder="you@example.com" class="wide-input" v-model="email" required><br>
    </div>
    <div class="subscribe">
      <button type="button" class="button button2" @click="submitForm">Subscribe</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      isLoading: false,
    };
  },
  methods: {
    isValidEmail(email) {
      // Use a regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    async submitForm() {
      try {
        this.isLoading = true;

        // Validate email before submitting
        if (!this.isValidEmail(this.email)) {
          alert('Please enter a valid email address.');
          return;
        }

        // Send subscriber details to server
        const response = await axios.post('https://hidden-valley-workshops.onrender.com/subscribe', {
          name: this.name,
          email: this.email,
        });

        alert(response.data.message); // Display the response message from the server

        const router = this.$router;
        router.push({ path: "/" });

        // Clear form fields and checkboxes
        this.name = '';
        this.email = '';

      } catch (error) {
        console.error('Subscription failed:', error);
        alert("Subscription failed. Please try again later.");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
