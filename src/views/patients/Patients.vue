<template>
  <div class="patients">
    <h1>This is a Patients page</h1>
      <v-data-table
        :headers="headers"
        :items="notes"
        :disable-pagination="true"
        :hide-default-footer="true"
        @click:row="rowClick"
        class="elevation-1"
      >
      </v-data-table>
    <div>
    </div>
  </div>
</template>
<script lang="ts">

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Tabs from '@/shared/tabs/tabs.vue';

@Component({
  components: { Tabs },
})
export default class Patients extends Vue {
  // TODO: move to propriate file
  headers = [
    { text: 'Date', value: 'date' },
    { text: 'Th', value: 'teeth' },
    { text: 'Description', value: 'description' },
    { text: 'ORG', value: 'organisation' },
    { text: 'Clinic', value: 'clinic' },
    { text: 'Provider', value: 'provider' },
    { text: 'Status', value: 'providerStatus' },
    { text: 'Add. Prov.', value: 'additionalProvide' },
    { text: 'Status', value: 'additionalProvideStatus' },
  ];

  notes = [
    {
      date: '03/10/2020',
      th: '29-31',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      organisation: 'VA',
      clinic: 'CENTRAL',
      provider: 'EWALK',
      providerStatus: 'Signed',
      additionalProvide: 'ZACKC',
      additionalProvideStatus: 'Unsigned',
    },
  ];

  // eslint-disable-next-line
  rowClick(event, row): void {
    row.select(true);
  }
}
</script>

<style lang="scss">
  h5 {
    font-size: $font-size-root;
  }
</style>
