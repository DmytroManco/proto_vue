<template>
  <div class="info">
    <div class="procedures">
      <h4 class="procedures__title">Procedures</h4>
      <patient-procedure-bar></patient-procedure-bar>
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
}
</script>

<style lang="scss" scoped>
  .info {
    display: flex;
    flex-flow: row wrap;
  }
  .procedures {
    flex: 1;
    &__title {
      margin: 15px 20px 10px;
    }
  }
  .form {
    flex: 3;
    margin-top: 20px;
    margin-left: 15px;
  }
</style>
