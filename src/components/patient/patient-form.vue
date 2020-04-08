<template>
  <form
    class="patient-form"
    @submit="submitForm($event)"
    v-if="model">
    <div class="form-row">
      <label class="form-label">
        Email <br>
        <input type="email" placeholder="Name" v-model="model.email">
      </label>
      <label class="form-label">
        Phone <br>
        <input type="tel" placeholder="Phone" v-model="model.phone">
      </label>
    </div>
    <div class="form-row">
      <label class="form-label">
        Address <br>
        <input-text
          placeholder="Address"
          v-model="model.address"
          :required="true"
          v-on:formError="onError"
        >
        </input-text>
      </label>
    </div>
    <div class="form-row">
      <label class="form-label">
        Address 2 <br>
        <input type="text" placeholder="Address 2" v-model="model.address2">
      </label>
    </div>
    <div class="form-row">
      <label class="form-label">
        City <br>
        <input type="text" placeholder="City" v-model="model.city">
      </label>
      <label class="form-label">
        State <br>
        <input type="text" placeholder="State" v-model="model.state">
      </label>
      <label class="form-label">
        Zip <br>
        <input type="number" placeholder="Zip" v-model="model.zip">
      </label>
    </div>
    <label class="form-checkbox">
      <input type="checkbox"> Garantor
    </label> <br>
    <button
      type="submit"
      class="btn btn-primary form-submit-btn"
      :disabled="disableSubmit"
    >
      Update
    </button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { PatientFormModel } from '@/models/patient-form.model';
import InputText from '@/shared/form-components/input-text.vue';
import { FormControlErrorInterface } from '@/interfaces/form-controls.d';

@Component({
  name: 'patient-form',
  components: { InputText },
})
export default class PatientForm extends Vue {
  disableSubmit = false;

  get model() {
    if (!this.$store.getters.getCurrentPatient) {
      return null;
    }

    return new PatientFormModel(this.$store.getters.getCurrentPatient);
  }

  submitForm(event: InputEvent): void {
    const updatedPatient = Object.assign(this.$store.getters.getCurrentPatient, this.model);
    this.$store.dispatch('updatePatientInfo', updatedPatient);
    event.preventDefault();
  }

  onError(error: FormControlErrorInterface): void {
    this.disableSubmit = !!error.error;
  }
}
</script>

<style lang="scss" scoped>
  .btn-primary.form-submit-btn {
    margin-top: 10px;
  }
</style>
