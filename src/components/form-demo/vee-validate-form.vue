<template>
  <div>
    <h3>Vee Form Elements</h3>
    <validation-observer ref="form" v-slot="{ invalid }">
      <form
        novalidate
        @submit.prevent="submitForm"
      >
        <!-- .form-row -->
        <div class="form-row">
          <label class="form-label">
            Name <br>
            <validation-provider
              :rules="model.getRules('name')"
              v-slot="v">
              <input
                key="name"
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
            <validation-provider
              :rules="model.getRules('email')"
              v-slot="v">
              <input
                key="email"
                type="text"
                placeholder="Email"
                v-model="model.email"
              >
              <span class="error-massage">{{ v.errors[0] }}</span>
            </validation-provider>
          </label>
        </div>
        <!-- end .form-row -->
        <!-- .add-validators -->
        <div class="add-validators">
          <h4>Add Validation To Filed Name</h4>
          <label>
            BuiltIn (Max)
            <input type="checkbox" @change="addBuiltInValidator">
          </label>
          <label>
            Custom Validators
            <input type="checkbox" @change="addCustomValidator">
          </label>
        </div>
        <!-- end .add-validators -->
        <div class="form-row" v-if="showAdditional">
          <validation-provider rules="required" v-slot="v">
            <label class="form-label">
              Additional Control <br>
              <input
                key="options"
                type="text"
                v-model="model.options"
              >
              <span class="error-massage">{{ v.errors[0] }}</span>
            </label>
          </validation-provider>
        </div>
        <div v-if="showAdditionalControls">
          <div
            class="form-row"
            v-for="(value, property) in model.additionalControls"
            :key="property"
          >
            <label class="form-label">
              {{property}} <br>
              <validation-provider
                rules="required"
                v-slot="v">
                <input
                  :key="'user-'+ property"
                  type="text"
                  :placeholder="property"
                  v-model="model.additionalControls[property]"
                >
                <span class="error-massage">{{ v.errors[0] }}</span>
              </validation-provider>
            </label>
          </div>
        </div>
        <div class="add-inputs">
          <button
            class="btn btn-default"
            type="button"
            @click="toggleAdditionalControl">
            Toggle Additional Control (v-if)
          </button>
          <button
            class="btn btn-default"
            type="button"
            @click="toggleAdditionalControls">
            Toggle Additional Controls (v-for)
          </button>
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
import {
  required, email, min, max,
} from 'vee-validate/dist/rules';
import validationMessages from 'vee-validate/dist/locale/uk.json';

extend('required', {
  ...required,
  message: () => 'Custom required Validation Messages',
});

extend('email', {
  ...email,
  message: () => validationMessages.messages.email.replace('{_field_}', 'Email'),
});

extend('min', min);
extend('max', {
  ...max,
  message: () => 'Build in Max Validator',
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
  showAdditional = false;
  showAdditionalControls = false;

  submitForm(): void {
    console.log(this.model.formModel);
  }

  addBuiltInValidator(event: any): void {
    const validator = 'max:10';

    if (!event.target.checked) {
      const rules = this.removeRule(this.model.getRules('name'), validator);
      this.updateRules('name', rules);
      return;
    }

    if (event.target.checked) {
      const rules = this.model.getRules('name');
      this.model.setRules('name', `${rules}|${validator}`);
    }
  }

  addCustomValidator(event: any): void {
    const validator = 'noHash';

    if (!event.target.checked) {
      const rules = this.removeRule(this.model.getRules('name'), validator);
      this.updateRules('name', rules);
      return;
    }

    this.createCustomValidator(validator);

    const rules = `${this.model.getRules('name')}|${validator}`;
    this.updateRules('name', rules);
  }

  toggleAdditionalControl(): void {
    this.showAdditional = !this.showAdditional;
  }

  toggleAdditionalControls(): void {
    this.showAdditionalControls = !this.showAdditionalControls;
  }

  // eslint-disable-next-line class-methods-use-this
  private createCustomValidator(validator: string): void {
    extend(validator, {
      validate: (value: string) => !value.includes('#'),
      message: () => 'Hash symbol is not allowd!',
    });
  }

  private updateRules(fieldName: string, rules: string): void {
    this.model.setRules(fieldName, rules);
  }

  // eslint-disable-next-line class-methods-use-this
  private removeRule(rules: string, rule: string): string {
    return rules.replace(`|${rule}`, '');
  }
}
</script>

<style lang="scss" scoped>
  .add-validators, .add-inputs {
    margin: 15px 0;
    button {
      margin-right: 15px;
    }
  }
</style>
