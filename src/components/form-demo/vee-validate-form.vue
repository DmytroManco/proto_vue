<template>
  <div>
    <h3>Vee Form Elements</h3>
    <validation-observer ref="form" v-slot="{ invalid }">
      <form
        novalidate
        class="form-label"
        @submit.prevent="submitForm"
      >
        <div class="form-row">
          <label class="form-label">
            Name <br>
            <validation-provider rules="required" v-slot="v">
              <input
                type="text"
                placeholder="Name"
                :class="(v.invalid && v.dirty) ? 'invalid' : 'valid'"
                v-model="model.name"
              >
              <span class="error-massage">{{ v.errors[0] }}</span>
            </validation-provider>
          </label>
          <label class="form-label">
            Email <br>
            <validation-provider rules="required|email" v-slot="v">
              <input
                type="text"
                placeholder="Name"
                v-model="model.email"
              >
              <span class="error-massage">{{ v.errors[0] }}</span>
            </validation-provider>
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="invalid"
        >
          Submit Form
        </button>
      </form>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { DemoFormModel } from '@/models/demo-form.model';
import { required, email } from 'vee-validate/dist/rules';
import validationMessages from 'vee-validate/dist/locale/uk.json';

extend('required', {
  ...required,
  message: () => 'Custom required Validation Messages',
});

extend('email', {
  ...email,
  message: () => validationMessages.messages.email,
});

@Component({
  name: 'vee-validate-form',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class VeeValidateForm extends Vue {
  model = new DemoFormModel();

  submitForm(): void {
    console.log(this.$refs.form);
    console.log(this.model);
  }
}
</script>

<style scoped>

</style>
