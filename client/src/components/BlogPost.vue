<template>
    <div class="table-left">
      <ul class="main-text">
        <h3 class="h3-link" @click="toggleText(post)">{{ post.title }}</h3>
        <li class="main-li" v-if="post.show" v-html="renderHtml(post.text)">
        </li>
      </ul>
    </div>
    <div class="main-right">
      <SubscriptionForm v-if="post.latest" />
      <div class="main-opaque" v-if="post.show">
        <img class="about-img" :src="`/${ post.image }.png`"/>
      </div>
    </div>
  </template>
  
  <script>
  import SubscriptionForm from '../components/SubscriptionForm.vue';
  
  export default {
    components: {
      SubscriptionForm,
    },
    props: {
      post: Object,
    },
    methods: {
      toggleText(post) {
        // Toggle the 'show' property of the found post
        post.show = !post.show;
      },
      // Function to render HTML content
      renderHtml(htmlString) {
        return htmlString;
      }
    }
  };
  </script>