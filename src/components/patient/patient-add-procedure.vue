<template>
  <div>
    <h3>Add Procedure</h3>
    <form
      class="form add-procedure"
      @submit="submitForm($event)"
    >
      <div class="form-row">
        <label class="form-label">
          Title <br>
          <input type="text">
        </label>
        <label class="form-label">
          Date <br>
          <input type="date">
        </label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Provider <br>
          <input type="text"></label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Status <br>
          <select>
            <option value="completed">Completed</option>
            <option value="not-started">Not Started</option>
          </select>
        </label>
      </div>
      <div class="form-checkbox">
        <label>
          Bill to insurance
          <input type="checkbox">
        </label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Amount <br>
          <input type="number">
        </label>
      </div>
      <div class="form-row">
        <label class="form-label">
          Note <br>
          <textarea cols="30" rows="10"></textarea>
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

@Component({
  name: 'patient-add-procedure',
})
export default class PatientAddProcedure extends Vue {
  submitForm(event: InputEvent) {
    console.log(this.$store);
    event.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
  .add-procedure {
    width: 50%;
  }
</style>
