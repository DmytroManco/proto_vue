<template>
  <div class="patient">
    <nav class="patient__nav">
      <router-link :to="{name: 'patientInfo'}">Info</router-link>
      <router-link :to="{name: 'addProcedure'}">Add Procedure</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'patient',
})
export default class Patient extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
