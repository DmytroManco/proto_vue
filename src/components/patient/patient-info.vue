<template>
  <div class="info">
    <div class="procedures">
      <h4 class="procedures__title">Procedures</h4>
      <patient-procedure-bar :procedures="procedures"></patient-procedure-bar>
    </div>
    <div class="form">
      <patient-form></patient-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PatientProcedureBar from '@/components/patient/patient-procedure-bar.vue';
import PatientForm from '@/components/patient/patient-form.vue';

@Component({
  name: 'patient-info',
  components: { PatientForm, PatientProcedureBar },
})
export default class PatientInfo extends Vue {
  // TODO: delete mock
  procedures = [
    {
      title: 'Procedure 1',
      amount: 14,
      date: '14/11/20',
      provider: 'Provider 1',
      status: 'Status',
      insuranceCovered: false,
      notes: 'Very important procedure',
    },
    {
      title: 'Procedure 2',
      amount: 2,
      date: '14/11/20',
      provider: 'Provider 1',
      status: 'Status',
      insuranceCovered: false,
      notes: 'Very important procedure',
    },
    {
      title: 'Procedure 3',
      amount: 1,
      date: '14/11/20',
      provider: 'Provider 1',
      status: 'Status',
      insuranceCovered: false,
      notes: 'Very important procedure',
    },
  ];
};
</script>

<style lang="scss" scoped>
  .procedures {
    &__title {
      margin: 15px 20px 10px;
    }
  }
</style>
