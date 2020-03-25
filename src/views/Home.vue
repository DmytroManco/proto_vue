<template>
  <div class="home">
    <div class="patient-list">
      <patient-card
        v-for="(patient, index) in patientsMock"
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
  // TODO: remove mock
  patientsMock = [
    {
      id: '12345678',
      firstName: 'Bob',
      secondName: 'Knob',
      zip: 491090,
      city: 'Detroit',
    },
    {
      id: '87654321',
      firstName: 'Rob',
      secondName: 'Brob',
      zip: 665775859,
      city: 'New Alexandrivka',
    },
  ]
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
