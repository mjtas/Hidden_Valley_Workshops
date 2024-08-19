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
    // Filter workshops to include only those within the next 6 months from today's date
      filteredWorkshops() {
        const today = new Date().setHours(0, 0, 0, 0); // Get today's date without time
        const sixMonthsFromToday = new Date(); 
        sixMonthsFromToday.setMonth(sixMonthsFromToday.getMonth() + 6); // Add 6 months to today

        return this.workshops.filter(workshop => {
          const workshopDate = new Date(workshop.date).setHours(0, 0, 0, 0); // Get workshop date without time
          return workshopDate >= today && workshopDate <= sixMonthsFromToday;
        });
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
