<template>
  <ValidationProvider
    :rules="rules"
    v-slot="{ errors }"
  >
    <label class="form-label">
      <slot></slot>
      <br>
      <input
        type="text"
        :key="inputKey"
        :value="value"
        v-bind:class="{ 'invalid': !!errors[0] }"
        @input="$emit('input', $event.target.value)"
      > <br>
      <span class="error-massage">{{errors[0]}}</span>
    </label>
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { ValidationProvider } from 'vee-validate';

@Component({
  name: 'custom-input',
  components: {
    ValidationProvider,
  },
})
export default class CustomInput extends Vue {
  @Prop() rules!: string;
  @Prop() value!: string;
  @Prop() inputKey!: string;
}
</script>
