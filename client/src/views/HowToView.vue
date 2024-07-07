<template>
    <div class="main">
      <div class="main-container">
        <div class="main-heading">
          <h1>Hidden Valley</h1>
          <h2>How To Guides</h2>
          </div>
          <div class="main-other">
          <div class="guide-left">
            <HowToList :guides="guides" @guideSelected="handleGuideSelected" />
          </div>
          <div class="guide-right">
            <ul class="main-text">
              <li class="main-li" v-if="selectedGuideTitle==''">{{ howToIntro1 }}</li>
              <li class="main-li" v-if="selectedGuideTitle=''">{{ howToIntro2 }}</li>

              <SelectedGuideComponent guide="selectedGuide" v-else />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HowToList from '../components/HowToList.vue';
  import SelectedGuideComponent from '../components/SelectedGuideComponent.vue';
  
  export default {
    components: {
      HowToList,
      SelectedGuideComponent,
    },
    data() {
      return {
        guides: [], // Store fetched data here
        selectedGuide: null, //Set initial value to null
        selectedGuideTitle: '', // Set initial value to an empty string
        howToIntro1: "I love a good ‘how to’ guide. But let’s face it, a good one can be hard to find! Either they use expensive materials, they use inches (a hassle to convert), or they leave out important details and leave you without any idea of ‘how to’! I have been getting things done for myself around the house for a long time now, and I’m finally getting to the point where I feel like I know enough about what I’m doing to share my own ‘how to’ guides. I have done all of these projects for myself and found them really useful, but I have stuck to how I completed each one - which is not to say you could find another way or even a better way! I’d love to improve these guides and add more in over time so if you have any suggestions please email me.", 
        howToIntro2: "Each project is rated with a difficulty rating. Easy are quick and easy to accomplish with minimal experience and/or tools. Medium projects require some more experience and time to get it done. For example, medium rated building projects require the basic tool kit I recommend in my building workshops, and I’ll assume you also know how to use your tools to measure and cut accurately. Tricky projects are either more time consuming (taking multiple weekends to do) or require more specialised tools/ equipment."
      };
    },
    created() {
      // Make HTTP GET request to backend API
      axios.get('https://hidden-valley-workshops.onrender.com/getGuides')
        .then(response => {
          this.guides = response.data; // Update workshops property with fetched data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  methods: {
    handleGuideSelected(guideTitle) {
      this.selectedGuideTitle = guideTitle;
      this.selectedGuide = this.guides.find(guide => guide.title === guideTitle);
    }
  }
  }
  </script>