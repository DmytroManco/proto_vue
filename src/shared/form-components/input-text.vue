<template>
     <label class="input-text">
       <slot></slot>
       <input
         class="form-input"
         type="text"
         :class="isValid ? 'valid' : 'invalid'"
         :required="required"
         v-bind:value="value"
         v-on:input="onChanges"
       >
     </label>
</template>

<script lang="ts">

import {
  Vue, Component, Prop,
} from 'vue-property-decorator';
import { FormControlErrorInterface } from '@/interfaces/form-controls.d';

@Component({
  name: 'input-text',
})
export default class InputTextComponent extends Vue {
  @Prop() value!: string;

  // TODO: check better way to pass callbacks,
  // create interface for validator returned type
  @Prop() validator!: (str: string) => boolean;

  @Prop() required!: boolean;

  @Prop() placeholder!: string;

  isValid: boolean;

  private isValidateForm: boolean;

  constructor() {
    super();
    this.isValid = false;
    this.isValidateForm = false;
  }

  mounted() {
    this.isValidateForm = !!this.validator;
    this.isValid = this.required ? !!this.value : true;
  }

  onChanges(e: InputEvent): void {
    const val = (e.target as HTMLFormElement).value;

    if (this.required) {
      this.requiredValidation(val);
    }

    if (this.isValidateForm) {
      this.validateControl(val);
    }

    this.$emit('input', val);
  }

  private validateControl(value: string) {
    if (!this.validator(value)) {
      this.markAsInvalid();
    }
  }

  private requiredValidation(value: string): void {
    return !value ? this.markAsInvalid({ error: 'Required Field' }) : this.markAsValid();
  }

  private markAsInvalid(error?: FormControlErrorInterface): void {
    this.isValid = false;
    this.$emit('formError', error);
  }

  private markAsValid() {
    this.isValid = true;
    this.$emit('formError', { error: null });
  }
}
</script>

<style lang="scss" scoped>
  .input-text .form-input.invalid {
    border: 1px solid $red;
  }
</style>
