<template>
  <div>
    <h3>Test Component with @Prop() Title: {{title}}</h3>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
} from 'vue-property-decorator';

@Component({
  name: 'test',
})
export default class TestComponent extends Vue {
  @Prop({ default: '' }) title!: string;
}
</script>

<style scoped>

</style>
