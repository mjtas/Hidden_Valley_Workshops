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
          <a @click="selectGuide(guide.name)" class="workshop-a">{{ guide.name }}</a>
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
          selectGuide(guideName) {
          this.$emit('guideSelected', guideName);
          },
      },
      computed: {
          filteredGuides() {
            return this.guides.filter(guide => guide.type === this.guideType);
          }
      }
}
</script>