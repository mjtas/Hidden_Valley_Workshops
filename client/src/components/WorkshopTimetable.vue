<template>
  <div class="content">
    <h3>Coming up:</h3>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Workshop</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through each workshop in sortedWorkshops -->
        <tr v-for="(workshop, index) in filteredWorkshops" :key="index">
          <td>{{ formatDate(workshop.date) }}</td> <!-- Display formatted workshop date -->
          <td>
            <a @click="selectWorkshop(workshop.name)" class="workshop-a">{{ workshop.name }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props: {
        workshops: Array, // Define the workshops prop to receive the sorted workshops data
    },
    computed: {
      // Filter workshops to exclude those before today's date
      filteredWorkshops() {
        const today = new Date().setHours(0, 0, 0, 0); // Get today's date without time
        return this.workshops.filter(workshop => new Date(workshop.date) >= today);
      }
    },
    methods: {
      selectWorkshop(workshopName) {
        // Emit an event or update a data property with workshopName
        this.$emit('workshopSelected', workshopName);
       },
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-UK', options);
      },
    },
  }
</script>
