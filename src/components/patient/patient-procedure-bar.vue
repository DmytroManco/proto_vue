<template>
    <div class="bar">
      <div
        class="bar-item"
        v-for="(procedure, index) in this.$store.state.ProceduresStore.procedures"
        :key="index"
      >
        {{procedure.title}}
        <span class="bar-item__amount">{{procedure.amount}}</span>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'patient-procedure-bar',
})
export default class PatientProcedureBar extends Vue {
}
</script>

<style lang="scss" scoped>
  .bar {
    border: 1px solid $lightGray;
    border-radius: 5px;
  }
  .bar-item {
    padding: 15px 10px;
    border-bottom: 1px solid $lightGray;
    position: relative;
    &__amount {
      position: absolute;
      right: 15px;
      background: $blue;
      padding: 5px 10px;
      border-radius: 10px;
      color: $white;
      top: calc(50% - 10px);
      font-size: 12px;
    }
  }
  .bar-item:last-child {
    border-bottom: none;
  }
</style>
