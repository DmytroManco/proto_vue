<template>
  <div class="card">
    <div class="card__name">
      {{patient.firstName}} {{patient.secondName}}
    </div>
    <div class="card__address">
      City: {{patient.city}}, Zip: {{patient.zip}}
    </div>
    <div class="card__actions">
      <button
        class="btn btn-primary card__goto"
        v-on:click="navigate"
      >
        Review
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { PatientInterface } from '@/interfaces/patient.d';
import { ROUTES_NAMES } from '@/constants/routes.constant';

@Component({
  name: 'patient-card',
})
export default class PatientCard extends Vue {
  @Prop() patient!: PatientInterface;

  public navigate(): void {
    this.$router.push({ name: ROUTES_NAMES.PatientInfo, params: { id: this.patient.id } });
  }
}
</script>

<style lang="scss" scoped>
  .card {
    padding: 15px 10px;
    border: 1px solid $lightGray;
    border-radius: 10px;
    &__name {
      font-size: 16px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    &__address {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    &__actions {
      margin-bottom: 5px;
    }
  }
  .btn-primary.card__goto {
    padding: 10px 25px;
  }
</style>
