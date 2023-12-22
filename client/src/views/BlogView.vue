<template>
  <div class="main">
    <div class="main-container">
      <div class="other-heading">
        <h1>Hidden Valley</h1>
        <h2>Blog</h2>
      </div>
      <div class="about-other">
        <div class="block" v-for="post in sortedPosts" :key="post.title">
        <BlogPost :post="post" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      blogPosts: [], // Store fetched data here
      sortedPosts: [] // Initialise sorted posts array
    };
  },
  created() {
    // Make HTTP GET request to backend API
    axios.get('https://hidden-valley-workshops.onrender.com/getBlogData')
    .then(response => {
        this.blogPosts = response.data; // Update type property with fetched data
        this.sortPosts(); // Sort the workshops
      })
    .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  },
  methods: {
    sortPosts() {
      // Sort workshops by date in ascending order
      this.sortedPosts = [...this.blogPosts].sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  }
}
</script>
