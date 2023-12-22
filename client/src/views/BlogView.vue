<template>
  <div class="main">
    <div class="main-container">
      <div class="other-heading">
        <h1>Hidden Valley</h1>
        <h2>Blog</h2>
      </div>
      <div class="about-other">
        <div class="block" v-for="post in sortedBlogPosts" :key="post.title">
        <BlogPost :post="post" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BlogPost from '../components/BlogPost.vue';

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      blogPosts: [], // Store fetched data here
    };
  },
  computed: {
    // Create a computed property for sorted blog posts
    sortedBlogPosts() {
      return this.blogPosts.slice().sort((a, b) => {
        // Sort in descending order based on the 'date' property
        return new Date(b.date) - new Date(a.date);
      });
    }
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
  }
}
</script>
