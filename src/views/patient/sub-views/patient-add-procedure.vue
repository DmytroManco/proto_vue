<template>
  <div>
    <h3>Add Procedure</h3>
    <form
      class="form add-procedure"
      @submit.prevent="submitForm($event)"
    >
      <div class="form-row">
        <label class="form-label">
          Title <br>
          <input
            type="text"
            v-model.lazy="model.title"
            required
          >
        </label>
        <label class="form-label">
          Date <br>
          <input type="date" v-model="model.date">
        </label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Provider <br>
          <input type="text" v-model="model.provider"></label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Status <br>
          <select v-model="model.status">
            <option value="completed">Completed</option>
            <option value="not-started">Not Started</option>
          </select>
        </label>
      </div>
      <div class="form-checkbox">
        <label>
          Bill to insurance
          <input type="checkbox" v-model="model.insuranceCovered">
        </label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Amount <br>
          <input
            type="number"
            min="1"
            max="10"
            v-model.number="model.amount">
        </label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Note <br>
          <textarea cols="30" rows="10" v-model="model.notes"></textarea>
        </label>
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-submit"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PatientAddProcedureModel from '@/models/patient-add-procedure.model';
import { ProcedureInterface } from '@/interfaces/procedure.d';

@Component({
  name: 'patient-add-procedure',
})
export default class PatientAddProcedure extends Vue {
  model: ProcedureInterface;

  constructor() {
    super();
    this.model = new PatientAddProcedureModel();
  }

  submitForm(event: HTMLFormElement): void {
    if (!this.model.title || !this.model.provider) {
      return;
    }

    let procedures = [...this.$store.state.ProceduresStore.procedures];
    const index = this.isProcedureExists(this.model);

    if (index > 0) {
      procedures[index] = this.updateExisting(procedures[index]);
    }

    procedures = index > 0 ? procedures : [...procedures, this.model];

    const payload = {
      userID: this.$store.state.PatientsStore.currentPatient.id,
      procedures,
    };

    this.$store.dispatch('ProceduresStore/updatePatientProcedures', payload);
    (event.target as unknown as HTMLFormElement).reset();
  }

  private isProcedureExists(procedure: ProcedureInterface): number {
    return this.$store.state.ProceduresStore.procedures
      .findIndex((proc: ProcedureInterface) => proc.title === procedure.title
        && proc.provider === procedure.provider);
  }

  private updateExisting(procedure: ProcedureInterface): ProcedureInterface {
    return {
      ...procedure,
      amount: procedure.amount + this.model.amount,
      date: this.model.date || procedure.date,
      status: this.model.status || procedure.status,
      notes: this.model.notes,
      insuranceCovered: this.model.insuranceCovered,
    };
  }
}
</script>

<style lang="scss" scoped>
  .add-procedure {
    width: 50%;
  }
</style>
