<template>
  <table class="premium-table">
    <thead>
      <tr>
        <th class="premium-th">{{ guideTypeName }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through each workshop in guides of given type-->
      <tr v-for="(guide, index) in filteredGuides" :key="index" >
        <td class="premium-td">
          <a @click="selectGuide(guide.title)" class="workshop-a">{{ guide.title }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>


 <script>
 export default {
      props: {
          guides: Array,
          guideType: String,
          guideTypeName: String
      },
      methods: {
          selectGuide(guideTitle) {
          this.$emit('guideSelected', guideTitle);
          },
      },
      computed: {
          filteredGuides() {
            return this.guides.filter(guide => guide.type === this.guideType);
          }
      }
}
</script>