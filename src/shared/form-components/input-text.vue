<template>
     <label class="input-text">
       <slot></slot>
       <input
         type="text"
         :class="isValid ? 'valid' : 'invalid'"
         v-bind:value="value"
         v-on:input="onChanges"
       >
     </label>
</template>

<script lang="ts">

import {
  Vue, Component, Prop,
} from 'vue-property-decorator';
import { InputOptionsInterface } from '@/interfaces/form-controls.d';

@Component({
  name: 'input-text',
})
export default class InputTextComponent extends Vue {
  @Prop() value!: string;

  // TODO: check better way to pass callbacks,
  // create interface for validator returned type
  @Prop() validator!: (str: string) => boolean;

  @Prop() options!: InputOptionsInterface;

  isValid: boolean;

  private isValidateForm: boolean;

  constructor() {
    super();
    this.isValid = false;
    this.isValidateForm = false;
  }

  mounted() {
    this.isValidateForm = !!this.validator;
    this.isValid = !this.options.required;
  }

  onChanges(e: InputEvent): void {
    const val = (e.target as HTMLFormElement).value;

    if (this.isValidateForm) {
      this.validateControl(val);
      return;
    }

    this.$emit('input', val);
  }

  private validateControl(value: string) {
    if (this.validator(value)) {
      this.$emit('input', value);
      return;
    }
    this.setErrors();
  }

  private setErrors(): void {
    this.isValid = false;
  }
}
</script>

<style scoped>

</style>
