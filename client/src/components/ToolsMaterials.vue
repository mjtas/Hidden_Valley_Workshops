<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Materials</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in maxItemsLength" :key="index">
            <td>{{ materialItems[index] || '' }}</td>
            <td>{{ toolItems[index] || '' }}</td>
          </tr>
        </tbody>
      </table>
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
    computed: {
      materialItems() {
        return this.splitItems(this.guide.materialString);
      },
      toolItems() {
        return this.splitItems(this.guide.toolString);
      },
      maxItemsLength() {
        return Math.max(this.materialItems.length, this.toolItems.length);
      }
    },
    methods: {
      splitItems(inputString) {
        return inputString ? inputString.split(',').map(item => item.trim()) : [];
      }
    }
  };
</script>