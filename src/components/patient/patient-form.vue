<template>
  <form
    class="patient-form"
    @submit="submitForm($event)"
    v-if="model">
    <div class="form-row">
      <label>
        Email
        <input type="email" placeholder="Name" v-model="model.email">
      </label>
      <label>
        Phone
        <input type="tel" placeholder="Name" v-model="model.phone">
      </label>
    </div>
    <div class="form-row">
      <label>
        Address
        <input type="text" placeholder="Address" v-model="model.address">
      </label>
    </div>
    <div class="form-row">
      <label>
        Address 2
        <input type="text" placeholder="Address 2" v-model="model.address2">
      </label>
    </div>
    <div class="form-row">
      <label>
        City
        <input type="text" placeholder="City" v-model="model.city">
      </label>
      <label>
        State
        <input type="text" placeholder="State" v-model="model.state">
      </label>
      <label>
        Zip
        <input type="number" placeholder="Zip" v-model="model.zip">
      </label>
    </div>
    <button type="submit">Update</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { PatientFormModel } from '@/models/patient-form.model';

@Component({
  name: 'patient-form',
})
export default class PatientForm extends Vue {
  get model() {
    if (!this.$store.getters.getCurrentPatient) {
      return null;
    }

    return new PatientFormModel(this.$store.getters.getCurrentPatient);
  }

  submitForm(event: InputEvent) {
    console.log(this.model);
    event.preventDefault();
  }
}
</script>

<style lang="scss" scoped>

</style>
