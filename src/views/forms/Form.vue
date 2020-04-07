<template>
  <div class="forms">
    <h3>Form Examples</h3>
  </div>
</template>

<script lang="ts">

import PatientCard from '@/components/patient/patient-card.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home',
})
export default class FormView extends Vue {
  mounted() {
    this.$store.dispatch('getPatients');
  }
}
</script>

<style lang="scss">
  .forms {
    margin: 10px;
  }
</style>
