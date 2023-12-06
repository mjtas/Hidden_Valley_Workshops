<template>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th>Premium Workshops</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through each workshop in premiumWorkshops -->
        <tr v-for="(workshop, index) in premiumWorkshops" :key="index">
          <td>
            <a @click="selectWorkshop(workshop.name)" class="workshop-a">{{ workshop.name }}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Standard Workshops</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through each workshop in standardWorkshops -->
        <tr v-for="(workshop, index) in standardWorkshops" :key="index">
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
        premiumWorkshops: Array,
        standardWorkshops: Array,
    },
    methods: {
        selectWorkshop(workshopName) {
        // Emit an event or update a data property with workshopName
        this.$emit('workshopSelected', workshopName);
        },
    },
}
</script>
    <style scoped>
    /* Scoped styles for the component */
    th, td {
      border: 1px solid white;
      padding: 12px;
      text-align: center;
      background-color: white;
      color: black;
    }
    
    th {
      font-weight: bold;
      background-color: #0E6251;
      color: white;
    }
    
    .workshop-a {
      color: black;
      text-decoration: none;
      padding: 10px;
      transition: background-color 0.3s;
    }
    
    .workshop-a:hover {
      background-color: #f0f0f0;
    }
    
    table {
      width: 100%;
    }
    </style>