<template>
    <div>
      <ol>
        <li v-for="(item, index) in splitItems(guide.numberedSteps)" :key="index">
          {{ item }}
        </li>
      </ol>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      guide: {
        type: Object,
        required: true
      }
    },
    methods: {
      splitItems(inputString) {
        return inputString ? inputString.split(',,').map(item => item.trim()) : [];
      }
    }
  };
  </script>