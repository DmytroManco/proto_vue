<template>
  <div class="home">
    <div class="patient-list">
      <patient-card
        v-for="(patient, index) in this.$store.getters.getPatientList"
        :key="index"
        :patient="patient">
      </patient-card>
    </div>
  </div>
</template>

<script lang="ts">

import PatientCard from '@/components/patient/patient-card.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home',
  components: { PatientCard },
})
export default class Home extends Vue {
  mounted() {
    this.$store.dispatch('getPatients');
  }
}
</script>

<style lang="scss">
  .home {
    margin: 10px;
  }
  .patient-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
</style>
