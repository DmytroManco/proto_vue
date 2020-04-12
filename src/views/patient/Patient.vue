<template>
  <div class="patient">
    <nav class="patient__nav">
      <router-link
        class="patient__link"
        :to="{name: 'patientInfo'}"
        exact
      >
        Info
      </router-link>
      <router-link
        class="patient__link"
        :to="{name: 'addProcedure'}"
        exact
      >
        Add Procedure
      </router-link>
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
  async created(): Promise<void> {
    const patientID = this.$route.params.id;
    await this.$store.dispatch('PatientsStore/getPatient', patientID);
    await this.$store.dispatch('ProceduresStore/getPatientProceduresList', patientID);
  }
}
</script>

<style lang="scss" scoped>
  .patient {
    margin: 0 10px;
    &__nav {
      border-bottom: 1px solid $lightGray;
      margin-top: 15px;
      display: flex;
    }
    &__link {
      margin: 0 10px;
      padding: 10px 25px;
      text-decoration: none;
      color: $blue;
    }
    &__link.router-link-active {
      color: $black;
      border: 1px solid #ddd;
      border-bottom: transparent;
      border-radius: 4px 4px 0 0;
      margin-bottom: -1px;
      background-color: $white;
    }
  }
</style>
