<template>
    <div>
      <table class="premium-table">
        <thead>
          <tr class="tool-th">
            <th class="tool-th">Materials</th>
            <th class="tool-th">Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tool-th" v-for="index in maxItemsLength" :key="index">
            <td>{{ materialItems[index - 1] || '' }}</td>
            <td>{{ toolItems[index - 1] || '' }}</td>
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