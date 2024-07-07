<template>
  <div>
    <h3>{{ guide.title }}</h3>
    <h3>Difficulty Level: {{ guide.rating }}</h3>
    <img class="about-img" :src="`/${ guide.image }.png`"/>
    <ul v-if="isBuilding">
      <AssumedKnowledge />
    </ul>
    <ul>
      <li>{{ guide.introText }}</li>
    </ul>
    <ToolsMaterials :guide="guide"/>
    <table v-if="isBuilding">
      <CuttingList :guide="guide"/>
    </table>
    <NumberedSteps :guide="guide"/>
    <ul>
      <li>{{ guide.concText }}</li>
    </ul>
  </div>
</template>

<script>
import AssumedKnowledge from '../components/AssumedKnowledge.vue';
import ToolsMaterials from '../components/ToolsMaterials.vue';
import CuttingList from '../components/CuttingList.vue';
import NumberedSteps from '../components/NumberedSteps.vue';

export default {
  components: {
    AssumedKnowledge,
    ToolsMaterials,
    CuttingList,
    NumberedSteps,
  },
  props: {
    guide: {
      type: Object,
      required: true
    }
  },
  computed: {
    isBuilding() {
      return this.guide.type === 'building';
    }
  }
};
</script>