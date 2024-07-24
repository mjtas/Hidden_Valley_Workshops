<template>
    <div class="content">
      <HowToSection 
        v-for="(type, index) in guideTypes" 
        :key="index" 
        :guides="guides" 
        :guideType="type.value" 
        :guideTypeName="type.name" 
        @guideSelected="handleGuideSelected" 
      />
    </div>
  </template>
  
  <script>
  import HowToSection from '../components/HowToSection.vue';
  
  export default {
    components: {
      HowToSection
    },
    props: {
      guides: Array
    },
    data() {
      return {
        guideTypes: [
          { value: 'building', name: 'Building' },
          { value: 'chooks', name: 'Chooks' },
          { value: 'compost', name: 'Compost' },
          { value: 'greenhouse', name: 'Greenhouse and Polytunnel Growing' },
          { value: 'berries', name: 'Growing Berries' },
          { value: 'noDig', name: 'No Dig Gardening' },
          { value: 'preserving', name: 'Preserving Fruit and Vegetables' },
          //{ value: 'pruning', name: 'Pruning and Espalier Fruit Trees' },
          { value: 'sourdough', name: 'Sourdough' }
        ]
      }
    },
    methods: {
      handleGuideSelected(guideTitle) {
        // Emit the event to the parent component
        this.$emit('guideSelected', guideTitle);
      }
    }
  }
  </script>
  
