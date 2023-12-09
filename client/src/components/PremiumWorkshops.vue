<template>
  <div class="content">
    <table class="premium-table">
      <thead>
        <tr>
          <th class="premium-th">Premium Workshops</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through each workshop in premiumWorkshops -->
        <tr v-for="(workshop, index) in premiumWorkshops" :key="index">
          <td class="premium-td">
            <a @click="selectWorkshop(workshop.name)" class="workshop-a">{{ workshop.name }}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th class="premium-th">Standard Workshops</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through each workshop in standardWorkshops -->
        <tr v-for="(workshop, index) in standardWorkshops" :key="index">
          <td class="premium-td">
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
    }
}
</script>
