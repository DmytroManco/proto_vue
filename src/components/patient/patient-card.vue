<template>
  <div class="card">
    <div class="card__name">
      {{patient.firstName}} {{patient.secondName}}
    </div>
    <div class="card__address">
      {{patient.city}} {{patient.zip}}
    </div>
    <div class="card__actions">
      <button
        class="btn btn-primary card__goto"
        v-on:click="navigate()"
      >
        Review
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IPatient } from '@/interfaces/patient.d';

@Component({
  name: 'patient-card',
})
export default class PatientCard extends Vue {
  @Prop() patient!: IPatient;

  public navigate(): void {
    this.$router.push({ name: 'patientInfo', params: { id: this.patient.id } });
  }
}
</script>

<style lang="scss" scoped>

</style>
