<template>
  <div class="info">
    <div class="procedures">
      <h4 class="procedures__title">Procedures</h4>
      <patient-procedure-bar></patient-procedure-bar>
    </div>
  </div>
</template>

<script>
import PatientProcedureBar from '@/components/patient/patient-procedure-bar.vue';

export default {
  name: 'patient-info',
  components: { PatientProcedureBar },
};
</script>

<style lang="scss" scoped>
  .procedures {
    &__title {
      margin: 15px 20px 10px;
    }
  }
</style>
