<template>
  <div>
    <h3>{{ guide.title }}</h3>
    <h4>Difficulty Level: {{ guide.rating }}</h4>
    <div class="main-opaque">
    <img class="about-img" :src="`/${ guide.image }.png`"/></div>
    <ul class="main-text" v-if="isBuilding">
      <AssumedKnowledge />
    </ul>
    <ul class="main-text">
      <li class="main-li">{{ guide.introText }}</li>
    </ul>
    <ToolsMaterials :guide="guide"/>
    <table v-if="guide.cuttingString!=''">
      <CuttingList :guide="guide"/>
    </table>
    <NumberedSteps :guide="guide"/>
    <ul class="main-text" v-if="guide.concText!=''">
      <li class="main-li">{{ guide.concText }}</li>
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