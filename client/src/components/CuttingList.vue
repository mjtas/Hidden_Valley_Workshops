<template>
    <div>
      <table>
        <thead>
          <tr class="tool-th">
            <th class="tool-th" colspan="2">Cutting List</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tool-th" v-for="(pair, index) in pairedCuttingItems" :key="index">
            <td>{{ pair[0] }}</td>
            <td>{{ pair[1] }}</td>
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
      cuttingItems() {
        return this.splitItems(this.guide.cuttingString);
      },
      pairedCuttingItems() {
        const items = this.cuttingItems;
        const pairs = [];
        for (let i = 0; i < items.length; i += 2) {
          pairs.push([items[i], items[i + 1] || '']);
        }
        return pairs;
      }
    },
    methods: {
      splitItems(inputString) {
        return inputString ? inputString.split(',').map(item => item.trim()) : [];
      }
    }
  };
  </script>