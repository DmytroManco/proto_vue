<template>
  <label class="input-text">
    <slot></slot>
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option disabled value="">Select...</option>
      <option
        v-for="option in options"
        :key="option.value"
        v-bind:value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">

import {
  Vue, Component, Prop,
} from 'vue-property-decorator';

@Component({
  name: 'select-component',
})
export default class SelectComponent extends Vue {
  @Prop() value!: string;

  @Prop() options!: Record<string, string>[];
}
</script>

<style lang="scss" scoped>

</style>
