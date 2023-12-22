<template>
    <div class="table-left">
        <ul class="main-text">
            <h3 class="h3-link" @click="toggleText(post)">{{ post.title }}</h3>
            <li class="main-li" v-if="post.show">
                <span :class="{'highlight': isHighlighted(post.text)}" v-html="renderHtml(post.text)"></span>
            </li>
        </ul>
    </div>
    <div class="main-right">
        <div class="booking-container" v-if="latest">
            <input v-model="searchQuery" class="search-input" placeholder="Search for keywords">
            <button @click="clearSearch" class="clear-button" v-show="searchQuery">X</button>
        </div>
        <SubscriptionForm v-if="latest" />
        <div class="main-opaque" v-if="post.show">
            <img class="about-img" :src="`/${ post.image }.png`"/>
        </div>
    </div>
</template>

<script>
import SubscriptionForm from '../components/SubscriptionForm.vue';
import axios from 'axios';

export default {
  components: {
    SubscriptionForm,
  },
  props: {
    post: Object,
  },
  data() {
    return {
      searchQuery: "", // Store the search query
    };
  },
  created() {
    // Make HTTP GET request to backend API
    axios.get('https://hidden-valley-workshops.onrender.com/getBlogData')
    .then(response => {
        this.blogPosts = response.data; // Update type property with fetched data
    })
    .catch(error => {
        console.error('Error fetching blog posts:', error);
    });
  },
  computed: {
    // Compute the mainTextWithHighlights based on the searchQuery
    mainTextWithHighlights() {
      return this.mainText.map((text) => this.highlightSearchTerms(text, this.searchQuery));
    },
  },
  methods: {
    toggleText(post) {
        // Toggle the 'show' property of the found workshop
        post.show = !post.show;
        }
    },
    // Check if a text contains highlighted search terms
    isHighlighted(text) {
      if (!this.searchQuery) return false; // No search query, no highlighting

    // Find all occurrences of the searchQuery
      const regex = new RegExp(this.searchQuery, "gi");

      // Check if the text contains any matches
      return text.match(regex) !== null;
    },
    // Function to highlight search terms in text
    highlightSearchTerms(text, searchQuery) {
      if (!searchQuery) return text; // Return the original text if searchQuery is empty

      // Find all occurrences of the searchQuery
      const regex = new RegExp(searchQuery, "gi");

      // Replace the search term with a highlighted version
      return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    },
    // Function to clear the search bar
    clearSearch() {
      this.searchQuery = "";
    },
    // Function to render HTML content
    renderHtml(htmlString) {
      return htmlString;
    },
  }
</script>